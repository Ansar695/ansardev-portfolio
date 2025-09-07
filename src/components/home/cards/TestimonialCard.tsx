import { TestimonialItem } from '@/utils/types'
import { User } from 'lucide-react'

export function TestimonialCard({ name, testimonial }: TestimonialItem) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-xl h-full flex flex-col">
      <div className="flex items-center mb-4">
        {/* <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full border-2 border-indigo-500"
        /> */}
        <div className='w-16 h-16 bg-transparent rounded-full border-2 border-white flex items-center justify-center'>
          <User className='w-10 h-10 text-white' />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          {/* <p className="text-sm text-indigo-400">{position}</p>
          <p className="text-sm text-gray-400">{company}</p> */}
        </div>
      </div>
      <blockquote className="text-gray-300 text-sm italic leading-relaxed flex-grow">
        {testimonial}
      </blockquote>
    </div>
  )
}

