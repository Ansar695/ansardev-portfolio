'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { type LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface SkillCardProps {
  name: string
  description: string
  icon: LucideIcon
}

export function SkillCard({ name, description, icon: Icon }: SkillCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="bg-gray-800 border-gray-700 text-white h-full">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon className="h-6 w-6 text-blue-400" />
            <span>{name}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

