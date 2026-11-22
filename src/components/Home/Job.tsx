import { Parallax } from "react-scroll-parallax";
import { ReactNode } from "react";

interface CardOptionsProps {
  isEven: boolean;
  label: string;
  front: string;
  bulletpoints?: string[];
  children?: ReactNode;
}

export const Job = (props: CardOptionsProps) => {
  const { front, label, isEven } = props;
  return (
    <div className="col-6 col-lg-4" tabIndex={0}>
      <div className="card h-100">
        <figure
          className="relative m-0 overflow-hidden rounded-sm bg-charcoal p-2.5 text-yellow after:absolute after:bottom-0 after:z-1 after:ml-0 after:box-border after:max-w-[calc(100%-10px)] after:rounded-sm after:bg-charcoal after:px-3.5 after:py-2.5 after:text-sm after:font-black after:content-[attr(data-category)] sm:after:ml-5 sm:after:max-w-[calc(100%-60px)] sm:after:text-base"
          data-category={label}
        >
          <Parallax speed={isEven ? -5 : 5} className="overflow-hidden rounded-sm">
            <img src={front} alt={label} className="block max-w-full rounded-sm" />
          </Parallax>
        </figure>
      </div>
    </div>
  );
};
