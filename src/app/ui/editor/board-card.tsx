import React from 'react'
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
 
const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function BoardCard({ className, children,  ...props }: CardProps) {
    return (
      <Card className={cn("w-[380px]", className)} {...props}>
        <CardHeader>
          <CardTitle>My Board 1</CardTitle>
          <CardDescription>3 new views</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {children}
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            Edit
          </Button>
        </CardFooter>
      </Card>
    )
  }

export default BoardCard