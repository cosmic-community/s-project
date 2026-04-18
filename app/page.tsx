import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import CategoryBadge from '@/components/CategoryBadge'

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ])

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            حنقس حناقيس's Project
          </h1>
          <p className="text-xl text-primary-50 max-w-2xl mx-auto">
            Discover amazing content across multiple categories
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Categories */}
        {categories.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Categories</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Link key={category.id} href={`/categories/${category.slug}`}>
                  <CategoryBadge category={category} />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Latest Posts */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Latest Posts</h2>
          {posts.length === 0 ? (
            <p className="text-gray-600">No posts available yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}