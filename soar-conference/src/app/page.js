import Image from "next/image";
import {Navbar} from "@/components/navbar";
import classNames from "classnames";

export default function Home() {
  return (
  
    <div className="w-full bg-black">
      <header className={classNames(`bg-[image:url(/pac_man_bg.png)]`, "h-screen w-full bg-cover bg-opacity-40 bg-center grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2")}>
        <h1 className=" mx-auto text-center z-10 mt--4 grad bg-clip-text text-transparent w-fit place-self-center text-9xl lg:text-10xl lg:ps-10 bg-size-200 animate-moving_gradient">SOARCADE</h1>
        <img src="/soar_logo.png" className="z-10 mx-auto place-self-center text-right mt--12 lg:mt-0"/>
        <div className="w-full h-full absolute bg-black opacity-65"></div>
      </header>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
