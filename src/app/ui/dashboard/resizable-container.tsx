import React from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
    Card,
  } from "@/components/ui/card"

type ResizableContent = {
    content: React.ReactNode,
    defaultSize: number,
}

type ResizableContainerConfig = {
    contents: ResizableContent[],
    className?: string,
    direction?: 'horizontal' | 'vertical',
}

type ResizableContainerProps = ResizableContainerConfig;

export function ResizableContainer({ contents, className, direction = 'horizontal', ...props }: ResizableContainerProps) {
    return (
        <Card className="h-full">
            <ResizablePanelGroup
                direction={direction}
                className={`${className}`}
                {...props}
            >
                {contents.map((content: ResizableContent, index: any) => (
                    <React.Fragment key={index}>
                        <ResizablePanel defaultSize={content.defaultSize}>
                            <div className={`flex h-full items-center justify-center`}>
                                {content.content}
                            </div>
                        </ResizablePanel>
                        {index < contents.length - 1 && <ResizableHandle withHandle />}
                    </React.Fragment>
                ))}
            </ResizablePanelGroup>
        </Card>
    )
}

export default ResizableContainer