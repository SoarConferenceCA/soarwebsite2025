import classNames from "classnames";

export default function About(){

  return(
    <div className="">
      <header className={classNames(`bg-[image:url(/pac_man_bg.png)]`, " relative h-screen w-full bg-cover bg-opacity-40 bg-center grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2")}>
      <div className="w-full h-full mx-auto right-0 left-0 absolute bg-black opacity-65 top-0 z-0"></div>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center">
        <h1 className="mx-auto text-center z-20 mt--10 text-accent_pink w-fit place-self-center text-9xl lg:text-10xl my-auto block">About</h1>
        </div>
      </header>    
    </div>
  )
}