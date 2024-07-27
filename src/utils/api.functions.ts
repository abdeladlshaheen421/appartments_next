import client from "./client";

export async function getAllAppartments() {
  const { data } = await client.get("/appartments");
  return data.appartments;
}

export async function getAppartment(id: string) {
  const { data } = await client.get(`/appartments/${id}`);
  return data.appartment;
}
