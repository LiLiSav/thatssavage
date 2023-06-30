import { ImageBlockProps } from "pages/Prints";
import { useModal } from "hooks/use-modal-handler.hook";
import styles from "./CollagePic.module.scss";
import { ModalView } from "../ModalView";

interface CollagePicProps {
  collage: {
    title: string;
    collagePic: string;
    images: ImageBlockProps[];
  };
}

export const CollagePic = ({ collage }: CollagePicProps) => {
  const { modal } = useModal(collage.title);

  const handlePicClick = () => {
    if (modal) modal.show();
  };
  return (
    <div className="col-md-6 col-lg-4">
      <div className={`card ${styles.cardImage}`} onClick={handlePicClick}>
        <img src={collage.collagePic} alt={`${collage.title} collage Image`} />
      </div>
      {ModalView(collage.title, collage.images)}
    </div>
  );
};
