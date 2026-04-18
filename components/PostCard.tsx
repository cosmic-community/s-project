import Link from 'next/link'
import { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function PostCard({ post }: { post: Post }) {
  const title = getMetafieldValue(post.metadata?.title) || post.title
  const image = post.metadata?.featured_image
  const category = post.metadata?.category

  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-4xl">
            📝
          </div>
        )}
        <div className="p-5 flex-1 flex flex-col">
          {category && (
            <span className="text-xs text-primary-600 font-semibold mb-2 uppercase tracking-wide">
              {getMetafieldValue(category.metadata?.name) || category.title}
            </span>
          )}
          <h3 className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
            {title}
          </h3>
        </div>
      </article>
    </Link>
  )
}