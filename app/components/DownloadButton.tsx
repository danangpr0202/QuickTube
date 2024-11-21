'use client'



import { useState } from 'react'



export function DownloadButton() {

  const [isLoading, setIsLoading] = useState(false)



  const handleDownload = async () => {

    setIsLoading(true)

    try {

      await new Promise(resolve => setTimeout(resolve, 2000))

    } catch (error) {

      console.error('Download failed:', error)

    } finally {

      setIsLoading(false)

    }

  }



  return (

    <button

      onClick={handleDownload}

      disabled={isLoading}

      className={`w-full py-4 px-8 rounded-xl font-medium text-lg transition-all

        ${isLoading

          ? 'bg-gray-200 cursor-not-allowed text-gray-500'

          : 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30'

        }`}

    >

      {isLoading ? (

        <span className="flex items-center justify-center">

          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">

            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>

            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>

          </svg>

          Processing...

        </span>

      ) : (

        'Download'

      )}

    </button>

  )

} 
