'use client';
import React, { useState } from "react"
import BoardCard from "../ui/editor/board-card";
import ResizableContainer from "../ui/dashboard/resizable-container";
import SliderBoards from "../ui/dashboard/slider-boards";

export default function Home() {

  
    return (
    <>
      <ResizableContainer 
        direction="horizontal" 
        className="h-full w-full rounded-lg" 
        contents={[
          {
            content: <SliderBoards />,
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
  