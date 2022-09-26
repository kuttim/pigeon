import type { NextPage } from "next";
import { useSession, signOut, signIn } from "next-auth/react";
import React from "react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <React.Fragment>
        <h1>Hello {session.user.email}</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <button onClick={() => signIn()}>Sign in</button>
    </React.Fragment>
  );
};

export default Home;
