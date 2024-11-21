'use client'

interface VideoPreviewProps {
  url: string;
  thumbnail?: string;
  title?: string;
  duration?: string;
  isLoading: boolean;
}

export function VideoPreview({ url, thumbnail, title, duration, isLoading }: VideoPreviewProps) {
  if (!url) return null;

  console.log('VideoPreview props:', { url, thumbnail, title, duration, isLoading })

  return (
    <div className="mt-4 bg-white rounded-xl border-2 border-primary/20 overflow-hidden">
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mt-2"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-64 h-48">
            {thumbnail && (
              <img
                src={thumbnail}
                alt={title || 'Video thumbnail'}
                className="w-full h-full object-cover"
              />
            )}
            {duration && (
              <span className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded">
                {duration}
              </span>
            )}
          </div>
          <div className="p-4 flex-1">
            <h3 className="font-medium text-lg line-clamp-2">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">Ready to download</p>
          </div>
        </div>
      )}
    </div>
  );
} 