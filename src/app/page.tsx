import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/db";

export default async function Home() {
  const users = (await db).query.Users.findMany();

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <form className="flex flex-col gap-4 w-full max-w-sm">
        <h1 className="text-center text-2xl font-bold">Create App</h1>
        <Input name="name" placeholder="App Name" />
        <Textarea name="discription" placeholder="discription" />
        <Button type="submit">Submit</Button>
      </form>
      {(await users).map((user) => (
        <div key={user.id}>User: {user.name}</div>
      ))}
    </div>
  );
}
