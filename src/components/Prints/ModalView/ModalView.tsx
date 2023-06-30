import { ImageBlockProps } from "pages/Prints";

const ImageBlock = (images: ImageBlockProps[]) => {
  return (
    <div className="container-fluid">
      <div className="row g-2 mx-auto">
        {images.map(({ img, alt }) => {
          return (
            <div key={alt} className="col-4" tabIndex={0}>
              <div className="card">
                <img src={img} alt={alt} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ModalView = (title: string, images: ImageBlockProps[]) => {
  return (
    <div
      className="modal fade"
      id={title}
      tabIndex={-1}
      aria-labelledby={`${title}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`${title}Label`}>
              {title}
            </h1>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{ImageBlock(images)}</div>
        </div>
      </div>
    </div>
  );
};
