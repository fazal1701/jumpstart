"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MOCK_PORTFOLIO_ITEMS } from "@/lib/mock-data"
import { motion } from "framer-motion"
import { Play, Image as ImageIcon } from "lucide-react"

export function SectionShowcase() {
    return (
        <section className="py-24 bg-muted/20">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Real Work. Verified Skills.
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
                        See what candidates are building on Jumpstart. From technical deep dives to design walkthroughs.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MOCK_PORTFOLIO_ITEMS.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full flex flex-col border-2 hover:border-primary/30">
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                                    
                                    {/* Type Badge */}
                                    <div className="absolute top-3 left-3">
                                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm gap-1 text-[10px]">
                                            {item.type === 'VIDEO' ? (
                                                <><Play className="h-3 w-3 fill-current" /> Video</>
                                            ) : (
                                                <><ImageIcon className="h-3 w-3" /> Image</>
                                            )}
                                        </Badge>
                                    </div>

                                    {/* Video Play Overlay */}
                                    {item.type === 'VIDEO' && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="h-12 w-12 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                                <Play className="h-6 w-6 fill-current ml-1" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <CardHeader className="p-4">
                                    <CardTitle className="line-clamp-1 text-lg group-hover:text-primary transition-colors">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 pt-0 text-sm text-muted-foreground flex-1">
                                    <p className="line-clamp-2 mb-4">{item.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.skills.map(skill => (
                                            <Badge key={skill} variant="secondary" className="text-[10px] font-mono">{skill}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 border-t bg-muted/5 flex justify-between items-center text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1.5">
                                        <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center">
                                            <div className="h-2 w-2 rounded-full bg-primary" />
                                        </div>
                                        Verified by <strong>{item.verifiedBy}</strong>
                                    </span>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
