import { customers } from "./customerArray";

export const HappyCustomers = () => {
  return (
    <div className="container py-5">
      <h3>Look at some of our happy customers!</h3>

      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex flex-column g-1">
          <img className="d-block w-100 mb-1" src={customers[0].img} alt={customers[0].label} />
          <img className="d-block w-100 mb-1" src={customers[1].img} alt={customers[1].label} />
        </div>
        <div className="col-lg-4 col-md-6 d-flex flex-column g-1">
          <img className="d-block w-100 mb-1" src={customers[2].img} alt={customers[2].label} />
          <img className="d-block w-100 mb-1" src={customers[3].img} alt={customers[3].label} />
        </div>
        <div className="col-lg-4 col-md-12">
          <img className="d-block w-100" src={customers[4].img} alt={customers[4].label} />
        </div>
      </div>
    </div>
  );
};
