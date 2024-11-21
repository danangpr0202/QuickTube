type PricingCardProps = {

  type: 'free' | 'premium'

  features: string[]

  price: number

}



export function PricingCard({ type, features, price }: PricingCardProps) {

  return (

    <div className={`p-8 rounded-2xl border-2 transition-all ${

      type === 'premium' 

        ? 'bg-primary text-white border-primary shadow-xl' 

        : 'bg-white border-gray-200 text-dark'

    }`}>

      <h3 className="text-2xl font-bold capitalize mb-2">

        {type} Plan

      </h3>

      <div className="text-4xl font-bold mb-6">

        ${price}

        <span className="text-lg font-normal opacity-80">/month</span>

      </div>

      

      <ul className="space-y-4 mb-8">

        {features.map((feature, index) => (

          <li key={index} className="flex items-center">

            <svg

              className={`w-5 h-5 mr-3 ${

                type === 'premium' ? 'text-white' : 'text-primary'

              }`}

              fill="none"

              stroke="currentColor"

              viewBox="0 0 24 24"

            >

              <path

                strokeLinecap="round"

                strokeLinejoin="round"

                strokeWidth={2}

                d="M5 13l4 4L19 7"

              />

            </svg>

            <span className={type === 'premium' ? 'text-white' : 'text-dark/80'}>

              {feature}

            </span>

          </li>

        ))}

      </ul>



      <button 

        className={`w-full py-3 px-6 rounded-xl font-medium text-lg transition-all ${

          type === 'premium'

            ? 'bg-white text-primary hover:bg-gray-50'

            : 'bg-primary text-white hover:bg-primary-hover'

        }`}

      >

        {type === 'free' ? 'Get Started' : 'Upgrade Now'}

      </button>

    </div>

  )

} 
