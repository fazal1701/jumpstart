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
    description?: string
    requirements?: string[]
    deliverables?: string[]
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
        <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white border-2 border-gray-200 hover:border-teal-700 h-full flex flex-col">
          {/* Image */}
          <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
            <Image
              src={task.image}
              alt={task.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Fallback image if load fails
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop&q=80';
              }}
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
            {/* Submissions Badge */}
            <div className="absolute top-3 left-3">
              <Badge className="bg-black/80 text-white border-0 font-semibold flex items-center gap-1">
                <Users className="w-3 h-3" />
                {task.submissions} working
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Company */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200 bg-white">
                <Image 
                  src={task.logo} 
                  alt={task.company} 
                  width={32} 
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-semibold text-black">{task.company}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-teal-700 transition-colors min-h-[3.5rem]">
              {task.title}
            </h3>

            {/* Description (if available) */}
            {task.description && (
              <p className="text-sm text-black mb-4 line-clamp-2">
                {task.description}
              </p>
            )}

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {task.skills.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-gray-100 text-black border border-gray-300 text-xs">
                  {skill}
                </Badge>
              ))}
              {task.skills.length > 3 && (
                <Badge variant="secondary" className="bg-gray-100 text-black border border-gray-300 text-xs">
                  +{task.skills.length - 3}
                </Badge>
              )}
            </div>

            {/* Requirements Preview */}
            {task.requirements && task.requirements.length > 0 && (
              <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs font-semibold text-black mb-1">Key Requirements:</p>
                <ul className="text-xs text-black space-y-1">
                  {task.requirements.slice(0, 2).map((req, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-teal-700 mt-0.5">•</span>
                      <span className="line-clamp-1">{req}</span>
                    </li>
                  ))}
                  {task.requirements.length > 2 && (
                    <li className="text-teal-700 font-semibold">+{task.requirements.length - 2} more</li>
                  )}
                </ul>
              </div>
            )}

            {/* Meta - Push to bottom */}
            <div className="flex items-center justify-between text-sm pt-4 mt-auto border-t border-gray-200">
              <div className="flex items-center gap-1 text-black font-bold">
                <DollarSign className="w-4 h-4 text-teal-700" />
                <span>${task.reward}</span>
              </div>
              <div className="flex items-center gap-1 text-black text-xs">
                <Clock className="w-4 h-4" />
                <span>{task.duration}</span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}

