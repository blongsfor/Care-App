import { getSession } from "next-auth/react";

export default function Home() {
  return <h2>CLIENTLIST PAGE</h2>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
