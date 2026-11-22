import { useModal } from "hooks/use-modal-handler.hook";
import { ImageBlockProps } from "types/data";
import { ModalView } from "./ModalView";

interface CollagePicProps {
  collage: {
    title: string;
    collagePic: string;
    images: ImageBlockProps[];
  };
}

export const CollagePic = ({ collage }: CollagePicProps) => {
  const { show } = useModal(collage.title);

  const handlePicClick = show;
  return (
    <div>
      <div
        className="card cursor-pointer transition-all duration-200 ease-linear hover:scale-105 hover:opacity-90"
        onClick={handlePicClick}
      >
        <img src={collage.collagePic} alt={`${collage.title} collage Image`} />
      </div>
      {ModalView(collage.title, collage.images)}
    </div>
  );
};
