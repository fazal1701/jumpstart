"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Clock, Users } from "lucide-react"

interface TaskCardProps {
  task: {
    id: string
    title: string
    company: string
    logo: string
    reward: number
    duration: string
    difficulty: string
    skills: string[]
    image: string
    submissions: number
  }
  index: number
}

export function TaskCard({ task, index }: TaskCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/tasks/${task.id}`}>
        <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white border-2 border-gray-200 hover:border-teal-700">
          {/* Image */}
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src={task.image}
              alt={task.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Difficulty Badge */}
            <div className="absolute top-3 right-3">
              <Badge className={`
                ${task.difficulty === 'Junior' ? 'bg-green-500' : ''}
                ${task.difficulty === 'Mid-Level' ? 'bg-amber-500' : ''}
                ${task.difficulty === 'Senior' ? 'bg-red-500' : ''}
                text-white border-0 font-semibold
              `}>
                {task.difficulty}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Company */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
                <Image src={task.logo} alt={task.company} width={32} height={32} />
              </div>
              <span className="text-sm font-semibold text-black">{task.company}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-teal-700 transition-colors">
              {task.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {task.skills.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-gray-100 text-black border border-gray-300">
                  {skill}
                </Badge>
              ))}
              {task.skills.length > 3 && (
                <Badge variant="secondary" className="bg-gray-100 text-black border border-gray-300">
                  +{task.skills.length - 3}
                </Badge>
              )}
            </div>

            {/* Meta */}
            <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-200">
              <div className="flex items-center gap-1 text-black font-bold">
                <DollarSign className="w-4 h-4 text-teal-700" />
                <span>${task.reward}</span>
              </div>
              <div className="flex items-center gap-1 text-black">
                <Clock className="w-4 h-4" />
                <span>{task.duration}</span>
              </div>
              <div className="flex items-center gap-1 text-black">
                <Users className="w-4 h-4" />
                <span>{task.submissions}</span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}

