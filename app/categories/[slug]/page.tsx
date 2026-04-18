// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PostCard from '@/components/PostCard'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium mb-6 inline-block">
        ← Back to Home
      </Link>

      <header className="mb-10 border-b border-gray-200 pb-8">
        <div className="inline-block px-4 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
          Category
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{name}</h1>
        {description && <p className="text-lg text-gray-600">{description}</p>}
      </header>

      {posts.length === 0 ? (
        <p className="text-gray-600">No posts in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}