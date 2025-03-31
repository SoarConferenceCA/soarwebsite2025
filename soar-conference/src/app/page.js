import Image from "next/image";
import {Navbar} from "@/components/navbar";
import classNames from "classnames";
import Footer from "@/components/footer";
import Accordion from "@/components/accordion";
import chairs from "../../public/home/soar_chair.png";
import arcade from "../../public/icons/arcade.png"
import motion from "motion/react"

export default function Home() {
  var list = [
    {
      question: "Why should students attend SOAR?",
      answer: "Transitioning to high school can be overwhelming, but SOAR makes it easier! Through engaging activities and mentorship from experienced high school students, SOAR provides Grade 7 and 8 students with the tools they need to feel confident and prepared for their high school journey."
    }, 
    {
      question: "Where and When is SOAR 2025?",
      answer: "SOAR 2025 will be taking place at Turner Fenton Secondary School’s South Building on June 14th, 2025! Our schedule can be found under “Conference Schedule”. "
    }, 
    {
      question: "Is SOAR free to attend?",
      answer: "No, all participants will be required to pay a fee that will cover things such as merchandise, lunch, ice cream, etc. "
    }, 
    {
      question: "What if I have dietary restrictions or accessibility needs?",
      answer: "We strive to make SOAR inclusive for all students! If you have dietary restrictions or require accommodations, let the SOAR team know in advance."
    }, 

  ]
  return (
    <div className="relative w-full bg-[image:url(/background.png)] bg-repeat bg-center" >
      <header className={classNames(`bg-[image:url(/pac_man_bg.png)]`, " relative h-screen w-full bg-cover bg-opacity-40 bg-center grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2")}>
      <div className="w-full h-full mx-auto right-0 left-0 absolute bg-black opacity-65 top-0 z-0"></div>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
        <h1 className="mx-auto text-center z-20 mt--4 grad bg-clip-text text-transparent w-fit place-self-center text-9xl lg:text-10xl lg:ps-10 bg-size-200 animate-moving_gradient my-auto block">SOARCADE</h1>
        </div>
      </header>
      <main className=" relative my-10">
      <h2 className="mx-auto text-center z-20 mb-4 text-white w-fit place-self-center text-4xl lg:text-6xl">Mission Statement</h2>

      <div className=" relative grid grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto">
      <div className="relative">
      <Image src={chairs} className="relative mx-auto w-5/6 md:w-96 lg:w-5/6 rounded-lg border-accent_yellow border-2" alt="Picture of SOAR Chairs of 2024"/>
      <Image src={arcade} className="absolute w-20 -rotate-6 -bottom-10 right-0" alt="Picture of SOAR Chairs of 2024"/>
      </div>
        <p className="mt-2 text-center place-self-center text-xl lg:text-3xl text-gray-300 px-30">SOAR aims to organise a successful leadership conference for middle school students in grades 7-8 with an aim to develop, culminate and offer core leadership skills and experiences that will prepare them for an effective high school career.</p>    
      </div>

      </main>
      <div className=" w-3/4 min-w-72 mx-auto">
      <h2 className="mx-auto text-center z-20 mb-4 text-white w-fit place-self-center text-4xl lg:text-6xl">FAQ</h2>
      
        <Accordion list={list}/>
      </div>

    </div>
  );
}
