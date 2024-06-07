import useSWR from "swr";
import React from "react";
import ClientList from "../components/ClientList";
import LogoutButton from "../components/LogoutButton";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Homepage() {
  const { data, error } = useSWR("/api/clients", fetcher);

  if (error) return <div>Failed to load clients</div>;
  if (!data) return <div>Loading...</div>;
  console.log("data", data);

  return (
    <div>
      <LogoutButton />
      <h2>Client List</h2>
      <ClientList clients={data} />
    </div>
  );
}
