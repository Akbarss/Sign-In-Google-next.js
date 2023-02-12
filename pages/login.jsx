import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h2>Welcome, {session.user.email}</h2>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <h4>You are not signed in.</h4>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
};

export default Login;
