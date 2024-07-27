import { useRouter } from "next/navigation";
import React from "react";

export default function Appartment({
  id,
  name,
  type,
  description,
  price,
  ownerName,
  ownerPhone,
  className,
  hideShow,
}: {
  id?: string;
  name?: string;
  type?: string;
  description?: string;
  price?: number;
  ownerName?: string;
  ownerPhone?: string;
  className?: string;
  hideShow?: boolean;
}) {
  const router = useRouter();
  const showAppartment = (
    ev: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    router.push(`appartments/${id}`);
  };
  return (
    <div
      className={`position-relative border rounded p-5 pb-3 my-2 shadow ${
        className ? className : ""
      }  col-12 col-lg-3 col-md-5 col-sm-12`}
    >
      <span className="position-absolute translate-middle badge rounded-pill bg-primary fs-5">
        {type}
        <span className="visually-hidden">Type</span>
      </span>
      <h5 className="card-title text-center p-2 h4">{name}</h5>
      <p className="card-text my-2">{description}</p>
      <p className="card-text">
        <small className="text-muted">Price: ${price}</small>
      </p>
      <p className="card-text">
        <small className="text-muted">Owner: {ownerName}</small>
      </p>
      <p className="card-text">
        <small className="text-muted">Phone: {ownerPhone}</small>
      </p>
      {!hideShow && (
        <p className="text-center">
          <button
            onClick={(ev) => showAppartment(ev, id ?? "")}
            className="btn btn-primary w-75"
          >
            Show
          </button>
        </p>
      )}
    </div>
  );
}
