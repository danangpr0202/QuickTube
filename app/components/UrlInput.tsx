'use client'

import { useState, useEffect } from 'react'
import { VideoPreview } from './VideoPreview'

interface VideoInfo {
  thumbnail: string;
  title: string;
  duration: string;
}

export function UrlInput() {
  const [url, setUrl] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null)

  const validateUrl = (input: string) => {
    const platforms = [
      'youtube.com',
      'youtu.be',
      'tiktok.com',
      'instagram.com',
      'facebook.com',
      'soundcloud.com'
    ]
    return platforms.some(platform => input.includes(platform))
  }

  const fetchVideoInfo = async (videoUrl: string) => {
    if (!validateUrl(videoUrl)) return;
    
    setIsLoading(true)
    console.log('Client: Fetching info for:', videoUrl)

    try {
      const response = await fetch('/api/video-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoUrl }),
      })

      const data = await response.json()

      if (!response.ok) {
        console.error('API Error:', data)
        throw new Error(data.details || 'Failed to fetch video info')
      }

      console.log('Client: Received data:', data)
      setVideoInfo(data)
    } catch (error: any) {
      console.error('Client Error:', {
        message: error?.message || 'Unknown error',
        stack: error?.stack || 'No stack trace available'
      })
      setVideoInfo(null)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (url && isValid) {
        fetchVideoInfo(url)
      }
    }, 500)

    return () => clearTimeout(debounceTimer)
  }, [url])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    setUrl(input)
    setIsValid(validateUrl(input))
    if (!input) setVideoInfo(null)
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="url"
          value={url}
          onChange={handleChange}
          placeholder="Paste your video URL here..."
          className={`w-full px-6 py-4 rounded-xl bg-white border-2 text-dark
            ${isValid ? 'border-primary/20 focus:border-primary' : 'border-red-500'}
            focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all
            placeholder:text-gray-400 text-lg`}
        />
        {!isValid && url && (
          <p className="absolute text-sm text-red-500 mt-2">
            Please enter a valid URL from supported platforms
          </p>
        )}
      </div>

      <VideoPreview
        url={url}
        isLoading={isLoading}
        {...videoInfo}
      />
    </div>
  )
} 


