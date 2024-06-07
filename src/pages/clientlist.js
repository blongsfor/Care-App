import useSWR from "swr";
import ClientList from "../components/ClientList";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Homepage() {
  const { data, error } = useSWR("/api/clients", fetcher);

  if (error) return <div>Failed to load clients</div>;
  if (!data) return <div>Loading...</div>;

  return <ClientList clients={data} />;
}
