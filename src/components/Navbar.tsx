import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { irishDate } from "utils/irishDate";
import { contents, PageEntry, pageLabel } from "./pages";

interface NavItemProps {
  item: PageEntry;
  isActive: boolean;
  collapsed: boolean;
}

const sheet = "mx-auto w-full max-w-sheet px-gutter";
const smallLabel = "font-label text-sm tracking-label";

const cell =
  "flex min-h-11 items-center gap-2 px-3 py-2 no-underline hover:bg-ink/80 hover:text-paper aria-[current=page]:bg-ink aria-[current=page]:text-paper aria-[current=page]:hover:bg-ink";

const Rule = () => (
  <div className={sheet} aria-hidden="true">
    <div className="rule-double" />
  </div>
);

const NavItem = ({ item, isActive, collapsed }: NavItemProps) => (
  <li className="bg-paper">
    <Link
      to={item.link}
      aria-current={isActive ? "page" : undefined}
      className={`${cell} ${collapsed ? "max-sm:justify-center max-sm:px-1" : ""} text-ink`}
    >
      <span className="flex flex-col leading-tight font-label text-base font-semibold tracking-label uppercase">
        {item.name}
      </span>
    </Link>
  </li>
);

export const Navbar = () => {
  const { pathname } = useLocation();
  const [folio] = useState(() => irishDate());
  const [collapsed, setCollapsed] = useState(false);
  const mastheadRef = useRef<HTMLDivElement>(null);

  // The masthead collapses to the sticky nav bar once it has scrolled out of view.
  useEffect(() => {
    const masthead = mastheadRef.current;
    if (!masthead) return;
    const observer = new IntersectionObserver(([entry]) =>
      setCollapsed(!entry.isIntersecting),
    );
    observer.observe(masthead);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header>
        <div className="border-b border-ink">
          <div
            className={`${sheet} flex flex-wrap items-center justify-between gap-x-4 py-2`}
          >
            <p className={`${smallLabel} mb-0`}>
              <time dateTime={folio.iso}>
                <span lang="ga">{folio.ga}</span> · <span>{folio.en}</span>
              </time>
            </p>
            <span className="badge-page">{pageLabel(pathname)}</span>
          </div>
        </div>

        <div ref={mastheadRef} className={`${sheet} pt-4 pb-2`}>
          <div className="grid grid-cols-2 items-center gap-x-4 gap-y-2 lg:grid-cols-[auto_1fr_auto]">
            <div
              className={`${smallLabel} order-1 border-2 border-ink px-3 py-2 uppercase`}
            >
              Printed
              <br />
              to order
            </div>

            <Link
              to="/"
              className="masthead order-3 col-span-2 text-ink no-underline hover:text-ink lg:order-2 lg:col-span-1"
            >
              <span className="masthead-word ink-in misregister">
                <span className="block sm:inline">THAT&apos;S</span>{" "}
                <span className="block sm:inline">SAVAGE</span>
              </span>
            </Link>

            <div className="order-2 flex items-center justify-end gap-3 lg:order-3">
              <div
                className={`${smallLabel} border-2 border-ink px-3 py-2 uppercase`}
              >
                <img
                  src="/logo-head.png"
                  alt=""
                  width={40}
                  height={56}
                  className="print-photo h-14 w-auto"
                />
              </div>
            </div>
          </div>

          <p className="mt-3 mb-0 text-center text-base italic">
            Custom garment printing &amp; logo design · Made in Ireland (
            <span lang="ga">Déanta in Éirinn</span>)
          </p>
        </div>
        <Rule />
      </header>

      <nav
        aria-label="Contents"
        className={`sticky top-0 z-50 bg-paper ${collapsed ? "border-b-2 border-ink" : ""}`}
      >
        <div className={`${sheet} flex items-center gap-4`}>
          <ul
            className={`m-0 grid w-full list-none gap-px border border-ink bg-ink p-0 ${
              collapsed ? "grid-cols-4" : "grid-cols-2 md:grid-cols-4"
            }`}
          >
            {contents.map((item) => (
              <NavItem
                key={item.link}
                item={item}
                isActive={pathname === item.link}
                collapsed={collapsed}
              />
            ))}
          </ul>
        </div>
      </nav>
      <Rule />
    </>
  );
};
