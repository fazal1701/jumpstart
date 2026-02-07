"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Palette, TrendingUp, Users, Settings, BarChart3 } from "lucide-react"

const industries = [
  { id: "all", name: "All Tasks", icon: null, href: "/tasks" },
  { id: "engineering", name: "Engineering", icon: Code, href: "/tasks/engineering" },
  { id: "design", name: "Design", icon: Palette, href: "/tasks/design" },
  { id: "marketing", name: "Marketing", icon: TrendingUp, href: "/tasks/marketing" },
  { id: "sales", name: "Sales", icon: Users, href: "/tasks/sales" },
  { id: "operations", name: "Operations", icon: Settings, href: "/tasks/operations" },
  { id: "data", name: "Data", icon: BarChart3, href: "/tasks/data" },
]

export function IndustryTabs() {
  const pathname = usePathname()
  
  return (
    <div className="border-b border-gray-200 bg-white sticky top-16 z-40">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
          {industries.map((industry) => {
            const Icon = industry.icon
            const isActive = pathname === industry.href || 
                           (pathname?.startsWith('/tasks') && industry.id === 'all' && pathname === '/tasks')
            
            return (
              <Link
                key={industry.id}
                href={industry.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  isActive 
                    ? "bg-teal-700 text-white font-semibold shadow-lg" 
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{industry.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

