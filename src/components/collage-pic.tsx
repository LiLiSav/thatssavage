import { Fold } from "components/fold";
import { ImageBlockProps } from "types/data";

interface CollagePicProps {
  collage: {
    title: string;
    description: string;
    tint: string;
    collagePic: string;
    images: ImageBlockProps[];
  };
}

export const CollagePic = ({ collage }: CollagePicProps) => (
  <Fold
    name="prints"
    tint={collage.tint}
    summary={
      <>
        <img
          src={collage.collagePic}
          alt=""
          loading="lazy"
          className="aspect-4/3 w-24 shrink-0 border-2 border-ink object-cover sm:w-40"
        />
        <div className="flex-1">
          <h2 className="mb-1 font-masthead text-xl sm:text-3xl">
            {collage.title}
          </h2>
          <p className="mb-0 max-sm:hidden">{collage.description}</p>
        </div>
      </>
    }
  >
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {collage.images.map(({ img, alt }) => (
        <img
          key={alt}
          src={img}
          alt={alt}
          loading="lazy"
          className="aspect-square w-full border-2 border-ink object-cover"
        />
      ))}
    </div>
  </Fold>
);
