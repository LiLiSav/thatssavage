import { ReactNode } from "react";

interface FoldProps {
  name: string;
  tint: string;
  summary: ReactNode;
  children: ReactNode;
}

export const Fold = ({ name, tint, summary, children }: FoldProps) => (
  <details name={name} className="fold group border-2 border-ink">
    <summary
      className={`${tint} ink-noise flex cursor-pointer items-center gap-4 p-4 hover:bg-ink hover:text-paper`}
    >
      <div className="flex flex-1 items-center gap-4">{summary}</div>
      <span
        aria-hidden="true"
        className="flex size-10 shrink-0 items-center justify-center border-2 border-current font-masthead text-2xl leading-none"
      >
        <span className="group-open:hidden">+</span>
        <span className="hidden group-open:inline">−</span>
      </span>
    </summary>
    <div className="border-t-2 border-ink bg-paper p-4">{children}</div>
  </details>
);
