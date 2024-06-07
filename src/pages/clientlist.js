import useSWR from "swr";
import ClientList from "../components/ClientList";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Homepage() {
  const router = useRouter();
  const handleLogout = async () => {
    await signOut();
    router.replace("/login");
  };
  const { data, error } = useSWR("/api/clients", fetcher);

  if (error) return <div>Failed to load clients</div>;
  if (!data) return <div>Loading...</div>;
  console.log("data", data);

  return (
    <div>
      <button onClick={handleLogout}>Log out</button>
      <h2>Client List</h2>
      <ClientList clients={data} />
    </div>
  );
}
