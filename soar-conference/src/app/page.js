import Image from "next/image";
import {Navbar} from "@/components/navbar";
import classNames from "classnames";
import Footer from "@/components/footer";

export default function Home() {
  return (
  
    <div className="w-full bg-black">
      <header className={classNames(`bg-[image:url(/pac_man_bg.png)]`, "h-screen w-full bg-cover bg-opacity-40 bg-center grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2")}>
        <h1 className=" mx-auto text-center z-10 mt--4 grad bg-clip-text text-transparent w-fit place-self-center text-9xl lg:text-10xl lg:ps-10 bg-size-200 animate-moving_gradient">SOARCADE</h1>
        <img src="/soar_logo.png" className="z-10 mx-auto place-self-center text-right mt--12 lg:mt-0"/>
        <div className="w-full h-full absolute bg-black opacity-65"></div>
      </header>

      <Footer />
      
    </div>
  );
}
