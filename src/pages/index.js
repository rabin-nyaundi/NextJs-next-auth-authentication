import { Inter } from "next/font/google";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    data: { session, token },
    status,
  } = useSession();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Session: {session?.user?.name}</h1>
    </main>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(
    context?.req,
    context?.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
