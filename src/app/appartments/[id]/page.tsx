"use client";
import Appartment from "@/components/appartmentComponent";
import Loader from "@/components/loader";
import PageTitle from "@/components/pageTitle";
import { getAppartment } from "@/utils/api.functions";
import { AppartmentType } from "@/utils/types";
import { useEffect, useState } from "react";

export default function Index({ params: { id } }: { params: { id: string } }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [appartment, setAppartment] = useState<AppartmentType>({});
  useEffect(() => {
    setLoading(true);
    getAppartment(id)
      .then((data) => setAppartment({ ...data }))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="container">
      <PageTitle title={"Appartment Details"} />
      <div className="row">
        {loading && !appartment?.id ? (
          <Loader />
        ) : (
          <Appartment
            className={"col-12 col-lg-10 col-md-12 col-sm-12 mx-auto"}
            name={appartment.name}
            description={appartment.description}
            type={appartment.type}
            price={appartment.price}
            ownerName={appartment.ownerName}
            ownerPhone={appartment.ownerPhone}
            id={appartment.id}
            key={appartment.id}
            hideShow={true}
          />
        )}
      </div>
    </div>
  );
}
