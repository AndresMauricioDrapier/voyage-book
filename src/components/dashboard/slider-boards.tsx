import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function SliderBoards() {
    return (
        <div className={`flex flex-col h-full items-start justify-center`}>
            <div className="w-[100px] my-6 mx-auto">Mis tablones</div>
            <Carousel
                opts={{
                align: "start",
                }}
                orientation="vertical"
                className="w-full h-full mb-12  overflow-y-clip flex-grow"
            >
                <CarouselContent className="h-full">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <CarouselItem key={index} className="pt-1 basis-1/8">
                            <Card className="m-6">
                                <CardContent className="flex items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
  }
export default SliderBoards;
