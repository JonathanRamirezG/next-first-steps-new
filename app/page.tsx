import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-24">
      <span className="text-5xl">Hola mundo {1 +1 }</span>
      <a href="/about">About Page</a>
    </div>
  );
}
