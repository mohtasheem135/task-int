"use client"


import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {

  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if(loading) return <p>Loading.....</p>
  
  if(user) {
    router.push("/dashboard");
    return null;
  }



  return (
    <div>
      <h1>HEllo</h1>
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
}
