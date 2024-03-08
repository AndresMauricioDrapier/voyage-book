// components.ts
import { ComponentTypeEnum } from "../enums/menuTypes";

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
    href: "/dashboard/editor",
    description: "Editor Link",
    elements: [
      {
        type: ComponentTypeEnum.SUB,
        title: "My Boards",
        href: "/dashboard/editor/boards",
        description: "Main Boards of users",
      },
      {
        type: ComponentTypeEnum.SUB,
        title: "HIstory",
        href: "/dashboard/editor/history",
        description: "Historial of last dashboards used and shared.",
      },
    ],
  },
  {
    type: ComponentTypeEnum.MAIN,
    title: "Share",
    href: "/dashboard/editor",
    description: "Editor Link",
    elements: [
      {
        type: ComponentTypeEnum.SUB,
        title: "Rapid Links",
        href: "/dashboard/share/my-links",
        description: "Your personal Fave links",
      },
      {
        type: ComponentTypeEnum.SUB,
        title: "Genarate new links",
        href: "/dashboard/editor/history",
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
    href: "/doss",
    description: "docs message",
  },
];

export default components;
