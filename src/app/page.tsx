import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SessionProvider, UserInfo } from "./UserInfo";

export default async function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <form className="flex flex-col gap-4 w-full max-w-sm">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" placeholder="App Name" />
        <Textarea name="discription" placeholder="discription" />
        <Button type="submit">Submit</Button>
      </form>
      <SessionProvider>
        <UserInfo />
      </SessionProvider>
    </div>
  );
}
