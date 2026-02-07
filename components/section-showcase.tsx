"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MOCK_PORTFOLIO_ITEMS } from "@/lib/mock-data"
import { motion } from "framer-motion"
import { Play, Image as ImageIcon, ExternalLink, ArrowRight } from "lucide-react"

export function SectionShowcase() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -mr-48 -mt-48" />
            
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 max-w-2xl text-left"
                    >
                        <Badge variant="outline" className="border-primary text-primary px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[10px]">
                            Verified Proof
                        </Badge>
                        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
                            Real Work. <br />
                            <span className="text-primary">Verified Impact.</span>
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Every item here was built on Jumpstart, scored by AI, and verified by an employer. No generic side projects allowed.
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <button className="group flex items-center gap-2 font-bold text-lg hover:text-primary transition-colors">
                            Explore full library <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MOCK_PORTFOLIO_ITEMS.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className="group h-full flex flex-col border-none bg-muted/30 hover:bg-background hover:shadow-2xl transition-all duration-500 rounded-[2rem] overflow-hidden">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                                    
                                    {/* Type Badge */}
                                    <div className="absolute top-5 left-5">
                                        <Badge className="bg-white/90 backdrop-blur-md text-black border-none px-3 py-1.5 rounded-xl gap-1.5 text-xs font-bold shadow-lg">
                                            {item.type === 'VIDEO' ? (
                                                <><Play className="h-3.5 w-3.5 fill-current" /> Video Walkthrough</>
                                            ) : (
                                                <><ImageIcon className="h-3.5 w-3.5" /> Static Impact</>
                                            )}
                                        </Badge>
                                    </div>

                                    {/* Video Play Overlay */}
                                    {item.type === 'VIDEO' && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl transform scale-90 group-hover:scale-100 group-hover:bg-primary transition-all duration-500">
                                                <Play className="h-8 w-8 fill-current ml-1" />
                                            </div>
                                        </div>
                                    )}

                                    <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Ref: #{item.id.toUpperCase()}</span>
                                        <ExternalLink className="h-5 w-5 text-white" />
                                    </div>
                                </div>

                                <CardHeader className="p-8 pb-4">
                                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">{item.title}</CardTitle>
                                </CardHeader>
                                
                                <CardContent className="px-8 flex-1 space-y-4">
                                    <p className="text-muted-foreground leading-relaxed line-clamp-2">{item.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.skills.map(skill => (
                                            <Badge key={skill} variant="secondary" className="bg-primary/5 text-primary border-none text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">{skill}</Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="p-8 pt-6 border-t border-border/50 bg-muted/10">
                                    <div className="flex items-center gap-3 w-full">
                                        <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm p-2 border border-border/50">
                                            <Image src={`https://img.logoipsum.com/${200 + i}.svg`} alt="Company" width={40} height={40} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">Verified By</span>
                                            <span className="text-sm font-bold">{item.verifiedBy} Engineering</span>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
