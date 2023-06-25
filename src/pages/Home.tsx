import { PicCarousel } from "components/PicCarousel";
import { Introduction } from "components/Introduction";
import { PreviousJobs } from "components/PreviousJobs";
import { HappyCustomers } from "components/HappyCustomers";

export default function Home() {
  return (
    <>
      <Introduction />
      <PreviousJobs />
      <HappyCustomers />
    </>
  );
}
