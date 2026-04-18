import { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CategoryBadge({ category }: { category: Category }) {
  const name = getMetafieldValue(category.metadata?.name) || category.title

  return (
    <span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold hover:bg-primary-100 transition-colors cursor-pointer">
      {name}
    </span>
  )
}