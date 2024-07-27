"use client";
import Loader from "@/components/loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push(`/appartments`);
    }, 2000);
  }, []);
  return <Loader />;
}
