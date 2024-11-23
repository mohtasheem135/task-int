"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOut } from "../../../lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const page = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const handleLogout = async () => {
    await logOut();
    router.push("/login");
  };

  if (loading) return <p>Loading.....</p>;

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div>
      <h1>Welcome!!!</h1>
      <img src={user.photoURL} alt="User Profile" />
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default page;
