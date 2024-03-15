// components.ts
import { ComponentTypeEnum } from "@/enums/menuTypes";

export interface ComponentMenu {
  title: string;
  href: string;
  description: string;
  type: ComponentTypeEnum;
  elements?: ComponentMenu[];
}

const components: ComponentMenu[] = [
  {
    type: ComponentTypeEnum.MAIN,
    title: "Editor",
    href: "/editor",
    description: "Editor Link",
    elements: [
      {
        type: ComponentTypeEnum.SUB,
        title: "My Boards",
        href: "/boards",
        description: "Main Boards of users",
      },
      {
        type: ComponentTypeEnum.SUB,
        title: "History",
        href: "/history",
        description: "Historial of last dashboards used and shared.",
      },
    ],
  },
  {
    type: ComponentTypeEnum.MAIN,
    title: "Share",
    href: "/editor",
    description: "Editor Link",
    elements: [
      {
        type: ComponentTypeEnum.SUB,
        title: "Rapid Links",
        href: "/share/my-links",
        description: "Your personal Fave links",
      },
      {
        type: ComponentTypeEnum.SUB,
        title: "Genarate new links",
        href: "/history",
        description: "Historial of last dashboards used and shared.",
      },
    ],
  },
  {
    type: ComponentTypeEnum.MAIN,
    title: "Help",
    href: "/help",
    description: "Help message",
  },
  {
    type: ComponentTypeEnum.MAIN,
    title: "Documentation",
    href: "/docs",
    description: "docs message",
  },
  {
    type: ComponentTypeEnum.MAIN,
    title: "Profile",
    href: "/profile",
    description: "Your profile",
  },
];

export default components;
