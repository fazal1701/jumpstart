"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote: "Jumpstart changed everything. I went from sending 50 apps a day to getting paid for real work at TechFlow. That work turned into a full-time role.",
    author: "Alex Rivera",
    role: "Frontend Engineer at TechFlow",
    avatar: "https://i.pravatar.cc/150?u=alex-rivera",
    rating: 5,
  },
  {
    quote: "The verification ledger is a game changer. When I applied to my current job, I just sent my Jumpstart profile. No technical interview needed.",
    author: "Sarah Chen",
    role: "Full Stack Dev at GreenPeak",
    avatar: "https://i.pravatar.cc/150?u=sarah-chen",
    rating: 5,
  },
  {
    quote: "As a self-taught designer, I struggled to get noticed. Jumpstart gave me the platform to prove my skills on real projects. Now I lead design at Nebula.",
    author: "Jordan Smith",
    role: "Design Lead at Nebula Create",
    avatar: "https://i.pravatar.cc/150?u=jordan-smith",
    rating: 5,
  },
]

export function SectionTestimonials() {
  return (
    <section className="py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Stories of{" "}
            <span className="text-gradient">Execution</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real people. Real outcomes. See how Jumpstart is helping the next
            generation of operators skip the résumé line.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-card rounded-3xl p-8 ring-1 ring-border/50 hover:ring-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col justify-between group"
            >
              {/* Quote mark */}
              <div>
                <Quote className="h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors mb-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-base leading-relaxed text-foreground/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border/50">
                <div className="h-11 w-11 rounded-full overflow-hidden ring-2 ring-primary/20 shrink-0">
                  <Image src={t.avatar} alt={t.author} width={44} height={44} />
                </div>
                <div>
                  <p className="font-bold text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
