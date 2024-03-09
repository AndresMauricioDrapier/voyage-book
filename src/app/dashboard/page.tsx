'use client';
import React, { useState } from "react"
import BoardCard from "../ui/editor/board-card";
import ResizableContainer from "../ui/dashboard/resizable-container";

export default function Home() {

  const contents = [
    {
      content: <span className="font-semibold">Boards</span>,
      defaultSize: 25,
    },
    {
      content: <span className="font-semibold">Templates and others</span>,
      defaultSize: 90,
    },
  ];


  
    return (
    <>
      <ResizableContainer 
        direction="horizontal" 
        className="min-h-[200px] h-full w-full rounded-lg" 
        contents={contents} 
      />
    </>
    )
  }
  