import type React from "react"

interface ServiceFeature {
  title: string
  description: string
}

interface ServiceCategory {
  title: string
  description: string
  icon: React.ReactNode
}

interface ServiceDetailsProps {
  title: string
  description: string
  features: ServiceFeature[]
  categoryTitle: string
  categories: ServiceCategory[]
}

export default function ServiceDetails({
  title,
  description,
  features,
  categoryTitle,
  categories,
}: ServiceDetailsProps) {
  return (
    <section className="py-20 bg-primary-hover bg-opacity-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">{title}</h2>
            <p className="text-primary-light mb-6">{description}</p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary-hover p-3 rounded-full flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">{feature.title}</h3>
                    <p className="text-primary-light">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-primary mb-6">{categoryTitle}</h3>
            <div className="space-y-4">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center p-4 bg-primary-hover rounded-xl">
                  <div className="bg-primary text-white p-3 rounded-lg mr-4">{category.icon}</div>
                  <div>
                    <h4 className="font-bold text-primary">{category.title}</h4>
                    <p className="text-primary-light text-sm">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
