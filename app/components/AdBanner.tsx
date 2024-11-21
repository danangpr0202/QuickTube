type AdBannerProps = {

  className?: string

}



export function AdBanner({ className = '' }: AdBannerProps) {

  return (

    <div className={`p-8 bg-white border-2 border-gray-200 rounded-2xl text-center shadow-lg ${className}`}>

      <div className="max-w-2xl mx-auto">

        <h3 className="text-xl font-semibold text-dark mb-2">

          Advertisement

        </h3>

        <p className="text-dark/60">

          Support our service by viewing ads

        </p>

      </div>

    </div>

  )

} 
