import { ImageBlockProps } from "types/data";

const ImageBlock = (images: ImageBlockProps[]) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
      {images.map(({ img, alt }) => {
        return (
          <div key={alt} tabIndex={0}>
            <div className="card">
              <img src={img} alt={alt} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const ModalView = (title: string, images: ImageBlockProps[]) => {
  return (
    // The native dialog handles Esc, focus trapping and the backdrop. Clicking the backdrop
    // (the dialog element itself) closes it.
    // Esc already closes a native dialog, so the click handler only adds backdrop-click.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <dialog
      id={title}
      aria-labelledby={`${title}Label`}
      className="m-auto max-h-[calc(100%-3.5rem)] w-[min(calc(100%-1rem),800px)] flex-col overflow-hidden rounded-md border border-black/20 bg-white p-0 backdrop:bg-black/50 open:flex"
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      <div className="flex shrink-0 items-center justify-between border-b border-black/15 p-4">
        <h1 className="m-0 text-xl" id={`${title}Label`}>
          {title}
        </h1>
        <form method="dialog">
          <button
            type="submit"
            aria-label="Close"
            className="size-8 rounded-sm text-2xl leading-none opacity-50 hover:opacity-100"
          >
            &times;
          </button>
        </form>
      </div>
      <div className="overflow-y-auto p-4">{ImageBlock(images)}</div>
    </dialog>
  );
};
