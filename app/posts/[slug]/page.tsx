// app/posts/[slug]/page.tsx
import { getPostBySlug } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CategoryBadge from '@/components/CategoryBadge'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const content = getMetafieldValue(post.metadata?.content)
  const image = post.metadata?.featured_image
  const category = post.metadata?.category

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium mb-6 inline-block">
        ← Back to Home
      </Link>

      {image && (
        <img
          src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
          alt={title}
          className="w-full h-80 md:h-96 object-cover rounded-xl mb-8"
        />
      )}

      {category && (
        <div className="mb-4">
          <Link href={`/categories/${category.slug}`}>
            <CategoryBadge category={category} />
          </Link>
        </div>
      )}

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{title}</h1>

      {content && (
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </article>
  )
}