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
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 rounded-md bg-[var(--primary)]/10 text-[var(--primary)]">
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-lg">{name}</span>
          </CardTitle>
          <CardDescription className="mt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mt-1">
            <div className="h-1.5 w-20 rounded-full bg-[var(--primary)]/30" />
            <div className="h-1.5 w-12 rounded-full bg-[var(--accent)]/20" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

