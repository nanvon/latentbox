
import React from "react";

export interface ComponentItemProps {
  name: string;
  id: string;
  desc: string;
  tag?: string;
}

export const componentList: ComponentItemProps[] = [
  {
    name: "Lumiflex",
    id: "lumiflex",
    desc: "Gradient shader",
  },
  {
    name: "Zenitho",
    id: "zenitho",
    desc: "Shader from Stripe",
    tag: "beta",
  },
  {
    name: "Novatrix",
    id: "novatrix",
    desc: "Fork from Shadertoy",
  },
  {
    name: "Velustro",
    id: "velustro",
    desc: "Fork from Shadertoy",
  },
  {
    name: "Tranquiluxe",
    id: "tranquiluxe",
    desc: "Fork from Shadertoy",
  },
  {
    name: "Opulento",
    id: "opulento",
    desc: "Fork from Shadertoy",
  },
];

export interface NavGroup {
  title: string;
  links: Array<{
    title: string;
    href: string;
    tag?: string
  }>;
}

export const navigation: NavGroup[] = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "/docs" },
      { title: "Contributing", href: "/docs/contributing" },
      { title: "Changelog", href: "/docs/changelog" },
    ],
  },
  {
    title: "Collections",
    links: [
      ...componentList.map((item, index) => ({
        title: item.name,
        href: "/docs/components/" + item.id,
      })),
    ],
  },
] as const;
