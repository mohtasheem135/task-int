"use client";

import { googleSignIn } from "../../../lib/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"


const LoginForm = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const handleGoogleLogin = async ()=> {
    try {
        await googleSignIn();
        router.push("/dashboard");

    } catch(error) {
        console.log("Login Failed", error.message);
    }
  }

  if(loading) return <p>Loading.....</p>
  
  if(user) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div>
      <Button onClick={handleGoogleLogin}>Sign In With Google</Button>
    </div>
  );
};

export default LoginForm;
