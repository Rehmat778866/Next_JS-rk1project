import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">

      <h1 className="h-60 w-60 rounded-lg flex justify-center items-center text-2xl drop-shadow-md hover:drop-shadow-2xl bg-red-300  border-2 border-white hover:animate-bounce text-center">Hello World! My Name is Rehmat khalid</h1>

      <h1 className="mt-2 text-md bg-white text-red-700  p-2 rounded border-2 border-red-700">Congratulation! I am starting Next_Js</h1>
    </main>
  );
}
