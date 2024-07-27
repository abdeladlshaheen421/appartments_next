import Appartments from "@/components/appartmentsComponent";
import PageTitle from "@/components/pageTitle";

export default function Index() {
  return (
    <div className="container">
      <PageTitle title={"Appartments Page"} />
      <Appartments />
    </div>
  );
}
