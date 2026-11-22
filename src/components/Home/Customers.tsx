import keren from "assets/customers/keren-hen.jpg";
import clonmany from "assets/customers/clonmany.jpg";
import disney from "assets/customers/disney.jpg";
import country from "assets/customers/country-fit.jpg";
import bride from "assets/customers/bride.jpg";

const imageBlock = "block w-full rounded-sm";

const customers = [
  { img: bride, label: "Bride in white on steps" },
  { img: country, label: "Country fit dancers" },
  { img: disney, label: "Hen do with disney character" },
  { img: clonmany, label: "Clonmany green and red tops" },
  { img: keren, label: "Hen tops with cocktail glasses" },
];

export const Customers = () => {
  return (
    <div className="container px-0 pt-4 pb-12">
      <h2 className="my-8">Some Of Our Happy Customers</h2>

      <div className="mx-auto grid w-4/5 grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between">
          <img className={`${imageBlock} mb-2`} src={customers[0].img} alt={customers[0].label} />
          <img className={imageBlock} src={customers[1].img} alt={customers[1].label} />
        </div>
        <div>
          <img className={imageBlock} src={customers[4].img} alt={customers[4].label} />
        </div>
        <div className="hidden flex-col justify-between md:col-span-2 md:flex lg:col-span-1">
          <img className={`${imageBlock} mb-2`} src={customers[2].img} alt={customers[2].label} />
          <img className={imageBlock} src={customers[3].img} alt={customers[3].label} />
        </div>
      </div>
    </div>
  );
};
