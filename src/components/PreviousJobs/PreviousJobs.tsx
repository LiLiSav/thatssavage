import { Job } from "./Job";
import { card } from "./cardArray";

export const PreviousJobs = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Check out what we can do!</h1>
      </div>

      <ul className="cards-container">
        {card.map((item) => (
          <Job key={item.front} front={item.front} label={item.label} />
        ))}
        <li className="card-items" role="button" tabIndex={0}>
          <div className="btn btn-outline-dark">View More</div>
        </li>
      </ul>
    </div>
  );
};
