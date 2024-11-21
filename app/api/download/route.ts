import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

import ytdl from 'yt-dlp-exec'

import { prisma } from '@/lib/db'



interface DownloadRequest {

  url: string

  format: string

  userId?: string

}



export async function POST(request: NextRequest) {

  try {

    const body = (await request.json()) as DownloadRequest



    // Verificar límites de usuario gratuito

    if (!body.userId) {

      const downloads = await prisma.download.count({

        where: {

          userId: body.userId,

          createdAt: {

            gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // Último día

          }

        }

      })



      if (downloads >= Number(process.env.MAX_FREE_DOWNLOADS_PER_DAY || 5)) {

        return NextResponse.json(

          { error: 'Daily download limit reached' },

          { status: 403 }

        )

      }

    }



    // Iniciar descarga

    const info = await ytdl(body.url, {

      dumpSingleJson: true,

      noCheckCertificates: true,

      noWarnings: true,

      preferFreeFormats: true

    })



    // Registrar descarga

    await prisma.download.create({

      data: {

        url: body.url,

        format: body.format,

        status: 'completed',

        userId: body.userId || ''

      }

    })



    return NextResponse.json({ info })

  } catch (error) {

    console.error('Download error:', error)

    return NextResponse.json(

      { error: 'Failed to process download' },

      { status: 500 }

    )

  }

} 
