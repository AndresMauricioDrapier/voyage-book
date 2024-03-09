import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function SliderBoards() {
    return (
            <Carousel
                opts={{
                align: "start",
                }}
                orientation="vertical"
                className="w-full p-6 items-start"
            >
            <CarouselContent className="-mt-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="pt-1 basis-1/8">
                    <div className="p-1">
                        <Card>
                        <CardContent className="flex items-center justify-center p-6">
                            <span className="text-3xl font-semibold">{index + 1}</span>
                        </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            <CarouselNext />
        </Carousel>
    )
  }
export default SliderBoards;
