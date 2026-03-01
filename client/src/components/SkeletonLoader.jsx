// src/components/SkeletonLoader.jsx
export default function SkeletonLoader({ type = 'card', count = 3 }) {
  if (type === 'card') {
    return (
      <>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 animate-pulse">
            <div className="aspect-video bg-gray-300 dark:bg-gray-700" />
            <div className="p-6 space-y-4">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full" />
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
              <div className="flex gap-2">
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16" />
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16" />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }

  if (type === 'post') {
    return (
      <>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 animate-pulse">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24 mb-3" />
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-3" />
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2" />
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
          </div>
        ))}
      </>
    );
  }

  return null;
}