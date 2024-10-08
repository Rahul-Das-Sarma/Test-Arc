"use client";

import { useSession } from "next-auth/react";
import WelcomePage from "./components/welcome-page";
import DashboardPage from "./components/dashboard-page";
// import { Session } from "next-auth";

export default function ProtectedPage() {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center w-[100vh] h-[100vh]">
        <div>Loading...</div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <WelcomePage />
      </div>
    );
  }

  return (
    <DashboardPage />
    // <div className="flex flex-col items-center justify-center min-h-screen">
    //   <h1 className="text-2xl font-bold">Welcome, {session?.user?.name}</h1>
    //   {session && (
    //     <>
    //       <p>Welcome, {session.user?.name}!</p>
    //       <p>Your email: {session.user?.email}</p>
    //       <img src={session.user?.image || ""} alt="Profile" />
    //     </>
    //   )}
    //   <button
    //     onClick={() => signOut()}
    //     className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
    //   >
    //     Sign Out
    //   </button>
    // </div>
  );
}
