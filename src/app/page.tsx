import Formnewpost from "@/components/form-new-post";
// import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  // const user = await getCurrentUser();
  // console.log(user);
  return (
    <div>
      <main className=" max-w-4xl mx-auto my-5">
        <Formnewpost />
      </main>
    </div>
  );
}
