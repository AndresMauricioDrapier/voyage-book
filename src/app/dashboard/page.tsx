'use client';
import React from "react"

import ResizableContainer from '@/components/dashboard/resizable-container';
import SliderBoards from '@/components/dashboard//slider-boards';

export default function Dashboard() {

  
    return (
    <>
     <ResizableContainer 
        direction="horizontal" 
        className="h-full w-full rounded-lg" 
        contents={[
          {
            content: <>
            <SliderBoards />
            </>,
            defaultSize: 25,
          },
          {
            content: <span className="font-semibold">Templates and others</span>,
            defaultSize: 90,
          },
        ]} 
      />
    </>
     
    )
  }
  