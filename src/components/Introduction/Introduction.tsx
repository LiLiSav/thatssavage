import { TextBox } from "./TextBox";

export const Introduction = () => {
  return (
    <div>
      <div className="full-page-container dgry">
        <div className="intro-container">
          <div className="intro-heading">
            <h3>
              <b>For all your design needs, </b>
            </h3>
          </div>
          <div>
            <img src="/Logo.png" alt="Thatssavage" className="intro-pic-text" />
          </div>
          <div className="intro-heading">
            <h3>
              <b> has got you covered!</b>
            </h3>
          </div>
        </div>
      </div>
      <div>
        <div className="page-container">
          <ul className="intro-cards-container">
            <TextBox title="No Minimum Order">
              We don't do min. orders, there are enough rules in life. If it is personal or for your
              whole business, you can get 1-100+ printed. This could be showbiz baby!
            </TextBox>
            <TextBox title="Highest Quality and Service">
              We promise to work with you to provide the perfect solution for you or your business.
              From the apparel to the design, we got your back.
            </TextBox>
            <TextBox title="Irish Owned">
              We take pride in where we are from and what we do. By supporting us you are supporting
              local. We guarantee that what we produce is at the very highest standard and you know
              exactly where it comes from.
            </TextBox>
          </ul>
        </div>
      </div>
    </div>
  );
};
