import React from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

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
            <ResizablePanelGroup
                direction={direction}
                className={`${className}`}
                {...props}
            >
                {contents.map((content: ResizableContent, index: any) => (
                    <React.Fragment key={index}>
                        <ResizablePanel defaultSize={content.defaultSize}>
                                {content.content}
                        </ResizablePanel>
                        {index < contents.length - 1 && <ResizableHandle withHandle />}
                    </React.Fragment>
                ))}
            </ResizablePanelGroup>
    )
}

export default ResizableContainer