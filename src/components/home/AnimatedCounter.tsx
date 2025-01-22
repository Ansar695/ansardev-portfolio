/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const stats = [
  { id: 1, name: 'Projects Completed', value: 500 },
  { id: 2, name: 'Happy Clients', value: 250 },
  { id: 3, name: 'Years of Experience', value: 10 },
  { id: 4, name: 'Awards Won', value: 30 },
]

const AnimatedCounter = ({ value, duration = 2 }: any) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = parseInt(value)
      const incrementTime = (duration / end) * 1000

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(timer)
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [value, duration, inView])

  return <span ref={ref}>{count}</span>
}

export default function AnimatedStatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          {/* <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by creators worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-purple-200">
              Our track record speaks for itself. Here is a glimpse of our achievements and the trust our clients place in us.
            </p>
          </div> */}
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="flex flex-col bg-white/5 p-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              >
                <dt className="text-sm font-semibold leading-6 text-purple-200">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  <AnimatedCounter value={stat.value} />
                  {stat.name === 'Years of Experience' ? '+' : ''}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}

