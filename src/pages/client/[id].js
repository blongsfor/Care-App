// pages/clients/[id].js
import { useRouter } from "next/router";
import useSWR from "swr";
import Client from "../../components/Client"; // Adjust path if necessary
import LogoutButton from "../../components/LogoutButton";
import BackButton from "@/components/BackButton";
import DocumentButton from "@/components/DocumentButton";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ClientDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/clients/${id}` : null, fetcher);

  if (error) return <div>Failed to load client</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <LogoutButton />
      <Client {...data} />
      <DocumentButton />
      <BackButton />
    </>
  );
}
