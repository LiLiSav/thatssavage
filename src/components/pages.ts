export interface PageEntry {
  name: string;
  link: string;
}

export const contents: PageEntry[] = [
  { name: "Home", link: "/" },
  { name: "Prints", link: "/prints" },
  { name: "About", link: "/about" },
  { name: "Contact Us", link: "/contact" },
];

export const pageLabel = (pathname: string) => {
  const index = contents.findIndex((page) => page.link === pathname);
  return `P.${index === -1 ? contents.length + 1 : index + 1}`;
};
