import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function login() {
  const { data: session } = useSession();
  // console.log(session);
  if (session) {
    return (
      <>
        <p>Signed in as {session.user.name}</p>
        <img src={session.user.image} alt="Userimage" />
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
