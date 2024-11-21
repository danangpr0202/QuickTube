import { UrlInput } from './components/UrlInput'

import { FormatSelector } from './components/FormatSelector'

import { DownloadButton } from './components/DownloadButton'

import { PricingCard } from './components/PricingCard'

import { AdBanner } from './components/AdBanner'



export default function Home() {

  return (

    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">

      <div className="container mx-auto px-4 py-16">

        <h1 className="text-5xl font-bold text-center mb-2 text-dark">

          QuickTube.io

        </h1>

        <p className="text-center text-lg text-dark/80 mb-12">

          Download videos and music from YouTube, TikTok, Instagram, and more

        </p>

        

        <div className="max-w-2xl mx-auto space-y-8 bg-white p-8 rounded-2xl shadow-lg">

          <UrlInput />

          <FormatSelector />

          <DownloadButton />

        </div>



        <div className="mt-24">

          <h2 className="text-3xl font-semibold text-center mb-4 text-dark">

            Choose Your Plan

          </h2>

          <p className="text-center text-dark/70 mb-12">

            Select the perfect plan for your needs

          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            <PricingCard 

              type="free"

              features={['5 downloads/day', 'Basic quality', 'With ads']}

              price={0}

            />

            <PricingCard 

              type="premium"

              features={['Unlimited downloads', 'High quality', 'No ads']}

              price={9.99}

            />

          </div>

        </div>



        <AdBanner className="mt-24" />

      </div>

    </main>

  )

} 
