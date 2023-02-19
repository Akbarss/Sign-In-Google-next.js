import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <div>
        <h2>Welcome, {session.user.name}</h2>
        <h3>{session.user.email}</h3>
        <h3>{session.expires}</h3>
        <img
          src={session.user.image}
          alt="sa"
          style={{ borderRadius: "100%", width: "100px", height: "100px" }}
        />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>You are not signed in.</h2>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
};

export default Login;
