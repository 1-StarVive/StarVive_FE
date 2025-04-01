export const headerCategories = [
  { title: "메인", href: "/" },
  { title: "기획전", href: "/promotion" },
  { title: "베스트", href: "/best" },
  { title: "마이페이지", href: "/my" },
] as const satisfies { title: string; href: string }[];

export type HeaderCategory = (typeof headerCategories)[number];
