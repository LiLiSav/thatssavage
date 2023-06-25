import { useState } from "react";
import { CardOptionsProps } from "types/card";

export const Job = (props: CardOptionsProps) => {
  const { front, label } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => setIsFlipped(!isFlipped);

  return (
    <li
      className="card-items"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      <figure className="card-fig" data-category={label}>
        <img src={front} alt={label} className="card-pic" />
      </figure>
    </li>
  );
};
