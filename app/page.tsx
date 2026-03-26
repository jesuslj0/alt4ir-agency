import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Alt4ir Solutions
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          The future of web development is here.
          <Button variant="default" className="ms-2">
            Get started
          </Button>
        </p>
      </main>
    </div>
  );
}
