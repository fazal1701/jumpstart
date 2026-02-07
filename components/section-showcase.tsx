"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { PlayCircle, CheckCircle2 } from "lucide-react"
import { MOCK_PORTFOLIO_ITEMS } from "@/lib/mock-data"

export function SectionShowcase() {
  const items = MOCK_PORTFOLIO_ITEMS.slice(0, 6)

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            The Execution{" "}
            <span className="text-gradient">Ledger</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real work. Verified by real companies. This is what replaces your résumé.
          </p>
        </motion.div>

        {/* Bento Grid — varied sizes for visual interest */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            // Make first and fourth items taller for bento effect
            const isTall = i === 0 || i === 3
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative rounded-3xl overflow-hidden ring-1 ring-border/50 hover:ring-primary/30 transition-all duration-500 ${
                  isTall ? "md:row-span-2" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative w-full overflow-hidden ${isTall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Video play overlay */}
                  {item.type === "VIDEO" && (
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        <PlayCircle className="h-3.5 w-3.5" />
                        Video
                      </div>
                    </div>
                  )}

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    </div>

                    <p className="text-white/60 text-sm line-clamp-2">{item.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-semibold text-white/70 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Verified by */}
                    <div className="flex items-center gap-2 text-white/50 text-xs pt-2 border-t border-white/10">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      Verified by <span className="text-white/80 font-semibold">{item.verifiedBy}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
