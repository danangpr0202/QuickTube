import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuickTube.io - Download Videos & Music',
  description: 'Download videos and music from YouTube, TikTok, Instagram, and more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-primary">
                  QuickTube.io
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-dark hover:text-primary transition-colors">
                  Pricing
                </a>
                <a href="#" className="text-dark hover:text-primary transition-colors">
                  FAQ
                </a>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-dark text-white py-12 mt-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-gray-400">
                © 2024 QuickTube.io. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
