'use client'



import { useState } from 'react'



type Format = {

  id: string

  label: string

  quality: string

}



const VIDEO_FORMATS: Format[] = [

  { id: 'mp4-1080p', label: 'MP4', quality: '1080p' },

  { id: 'mp4-720p', label: 'MP4', quality: '720p' },

  { id: 'mp3-320', label: 'MP3', quality: '320kbps' },

  { id: 'wav', label: 'WAV', quality: 'Lossless' },

]



export function FormatSelector() {

  const [selectedFormat, setSelectedFormat] = useState<string>('mp4-1080p')



  return (

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {VIDEO_FORMATS.map((format) => (

        <button

          key={format.id}

          onClick={() => setSelectedFormat(format.id)}

          className={`p-4 rounded-xl border-2 transition-all

            ${selectedFormat === format.id

              ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'

              : 'bg-white border-gray-200 hover:border-primary/30 text-dark'

            }`}

        >

          <div className="text-base font-medium">{format.label}</div>

          <div className={`text-sm ${

            selectedFormat === format.id ? 'text-white/80' : 'text-gray-500'

          }`}>{format.quality}</div>

        </button>

      ))}

    </div>

  )

} 
