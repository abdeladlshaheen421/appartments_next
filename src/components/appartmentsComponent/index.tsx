"use client";

import { getAllAppartments } from "@/utils/api.functions";
import { AppartmentType } from "@/utils/types";
import { useEffect, useState } from "react";
import Appartment from "../appartmentComponent";
import Loader from "../loader";

export default function Appartments() {
  const [loading, setLoading] = useState<boolean>(false);
  const [appartments, setAppartments] = useState<AppartmentType[]>([]);
  useEffect(() => {
    setLoading(true);
    getAllAppartments()
      .then((data) => setAppartments([...data]))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : appartments.length > 0 ? (
        <div className="row gap-1 justify-content-evenly">
          {appartments.map((appartment: AppartmentType) => (
            <Appartment
              name={appartment.name}
              description={appartment.description}
              type={appartment.type}
              price={appartment.price}
              ownerName={appartment.ownerName}
              ownerPhone={appartment.ownerPhone}
              id={appartment.id}
              key={appartment.id}
            />
          ))}
        </div>
      ) : (
        <div className="text-center">No Departments</div>
      )}
    </>
  );
}
