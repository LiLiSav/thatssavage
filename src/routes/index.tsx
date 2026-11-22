import { createFileRoute, Link } from "@tanstack/react-router";
import bride from "assets/customers/bride.jpg";
import clonmany from "assets/customers/clonmany.jpg";
import country from "assets/customers/country-fit.jpg";
import disney from "assets/customers/disney.jpg";
import keren from "assets/customers/keren-hen.jpg";
import { Job } from "components/Home/Job";
import { TextBox } from "components/Home/TextBox";
import { cards } from "components/Home/cardArray";

const imageBlock = "block w-full rounded-sm";

const customers = [
  { img: bride, label: "Bride in white on steps" },
  { img: country, label: "Country fit dancers" },
  { img: disney, label: "Hen do with disney character" },
  { img: clonmany, label: "Clonmany green and red tops" },
  { img: keren, label: "Hen tops with cocktail glasses" },
];

export const Route = createFileRoute("/")({
  component: HomeRoute,
});

function HomeRoute() {
  return (
    <>
      <div>
        <div className="flex min-h-[50vh] items-center justify-center bg-charcoal text-yellow">
          <div className="p-8 text-center">
            <h3 className="m-0 inline-flex flex-wrap items-end justify-center gap-2 text-[1.4rem] font-bold lg:text-[2rem]">
              For all your design needs,{" "}
              <img
                src="/Name.png"
                alt="Thatssavage"
                className="-mb-2 inline-block h-[2.8rem] align-middle"
              />{" "}
              has got you covered!
            </h3>
          </div>
        </div>
        <div className="mx-auto w-[90%]">
          <ul className="m-0 -mt-12.5 flex w-full list-none flex-wrap justify-evenly gap-3.75 p-0 px-5 lg:gap-5 lg:px-0">
            <TextBox title="No Minimum Order">
              We don't do min. orders, there are enough rules in life. If it is
              personal or for your whole business, you can get 1-100+ printed.
              This could be showbiz baby!
            </TextBox>
            <TextBox title="Irish Owned">
              We take pride in where we are from and what we do. By supporting
              us you are supporting local. We guarantee that what we produce is
              at the very highest standard and you know exactly where it comes
              from.
            </TextBox>
            <TextBox title="Highest Quality & Service">
              We promise to work with you to provide the perfect solution for
              you or your business. From the apparel to the design, we got your
              back.
            </TextBox>
          </ul>
        </div>
      </div>

      <div className="container">
        <h2 className="my-8">What We Can Do</h2>

        <div className="mx-auto grid w-[95%] grid-cols-2 gap-2 lg:w-4/5 lg:grid-cols-3">
          {cards.map((item, index) => (
            <Job
              key={item.label}
              isEven={index % 2 === 0}
              front={item.img}
              label={item.label}
            />
          ))}
          <div className="col-span-2 lg:col-span-1" role="button" tabIndex={0}>
            <Link to="/prints" className="group block h-full no-underline">
              <div className="card h-full items-center justify-center bg-charcoal!">
                <h2 className="m-0 py-2 text-yellow transition-all duration-200 ease-linear group-hover:scale-105">
                  VIEW MORE
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="container px-0 pt-4 pb-12">
        <h2 className="my-8">Some Of Our Happy Customers</h2>

        <div className="mx-auto grid w-4/5 grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between">
            <img
              className={`${imageBlock} mb-2`}
              src={customers[0].img}
              alt={customers[0].label}
            />
            <img
              className={imageBlock}
              src={customers[1].img}
              alt={customers[1].label}
            />
          </div>
          <div>
            <img
              className={imageBlock}
              src={customers[4].img}
              alt={customers[4].label}
            />
          </div>
          <div className="hidden flex-col justify-between md:col-span-2 md:flex lg:col-span-1">
            <img
              className={`${imageBlock} mb-2`}
              src={customers[2].img}
              alt={customers[2].label}
            />
            <img
              className={imageBlock}
              src={customers[3].img}
              alt={customers[3].label}
            />
          </div>
        </div>
      </div>
    </>
  );
}
