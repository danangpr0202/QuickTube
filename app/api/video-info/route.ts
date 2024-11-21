import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import ytdl from 'yt-dlp-exec'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()
    console.log('API: Received URL:', url)

    // Configuración específica para Windows
    const pythonPath = 'python'  // o la ruta completa si es necesario
    const info = await ytdl(url, {
      dumpSingleJson: true,
      noCheckCertificates: true,
      noWarnings: true,
      format: 'best',
      pythonPath, // Especificar el path de Python
      binPath: path.join(process.cwd(), 'node_modules', 'yt-dlp-exec', 'bin', 'yt-dlp.exe'), // Para Windows
    })

    console.log('API: Raw video info:', info)

    const response = {
      thumbnail: info.thumbnail,
      title: info.title,
      duration: formatDuration(info.duration),
    }

    console.log('API: Sending response:', response)
    return NextResponse.json(response)

  } catch (error: any) {
    // Log más detallado para debugging
    console.error('API Error details:', {
      name: error?.name || 'Unknown error',
      message: error?.message || 'No error message available',
      stack: error?.stack || 'No stack trace available',
      command: error?.command,
      path: error?.path,
      pythonPath: process.env.PYTHONPATH,
      cwd: process.cwd(),
    })

    return NextResponse.json(
      { 
        error: 'Failed to fetch video information',
        details: error?.message || 'Unknown error'
      },
      { status: 500 }
    )
  }
}

function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = Math.floor(seconds % 60)

  if (hours > 0) {
    return `${hours}:${padZero(minutes)}:${padZero(remainingSeconds)}`
  }
  return `${minutes}:${padZero(remainingSeconds)}`
}

function padZero(num: number): string {
  return num.toString().padStart(2, '0')
} 