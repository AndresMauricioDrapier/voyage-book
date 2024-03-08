import Link from "next/link"
import React from "react"

// STYLE AND COMPONENTS
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// Config for Menu Items
import components from "../config/menu"

interface Component {
  title: string;
  href?: string;
  description?: string;
  elements?: Array<{
    title: string;
    href: string;
    description?: string;
  }>;
}


const NavigationMenuItems = ({ component }: { component: Component }) => (
  <React.Fragment key={component.title}>
    <NavigationMenuItem>
      {component.elements && component.elements.length > 0 ? (
        <NavigationMenuWithElements component={component} />
      ) : (
        <LinkItem
          key={component.title}
          title={component.title}
          href={component.href as string}
        >
          {component.description}
        </LinkItem>
      )}
    </NavigationMenuItem>
  </React.Fragment>
);

const NavigationMenuWithElements = ({ component }: { component: Component }) => (
  <>
    <NavigationMenuTrigger>
      {component.title}
    </NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
        {component.elements?.map((element) => (
          <ListItemBasic
            key={element.title}
            title={element.title}
            href={element.href}
          >
            {element.description}
          </ListItemBasic>
        ))}
      </ul>
    </NavigationMenuContent>
  </>
);

const NavLinks = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {components.map((component) => (
          <NavigationMenuItems component={component} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavLinks;

const ListItemBasic = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, href, children }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={{
            pathname: href.toString(),
          }}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>

      </NavigationMenuLink>
    </li>
  )
})

ListItemBasic.displayName = "BasicItem"

const LinkItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, href, children }) => {
  return (
    <Link 
      href="/docs" 
      legacyBehavior 
      // passHref
    >
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {title}
      </NavigationMenuLink>
    </Link>
  )
})
LinkItem.displayName = "LinkItem"