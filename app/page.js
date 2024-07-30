"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  

  useEffect(() => {
    setMounted(true);
  },[]);

  if(!mounted) return null;


  return (
    <main className="">
      <div className="relative ml-20 bg-blue-400 min-w-max">
        <img
          src="/imgs/passport.png"
          alt="passport img"
          className=""
          width={500}
          height={650}
        />
        <form>
          <input name="signature" className="h-8 w-[20.8rem] absolute top-[18rem] left-[4.5rem] bg-yellow-300/35 pl-2 italic text-2xl font-semibold tracking-tighter"></input>
          <img
          src="/imgs/face.jpg"
          alt="face img"
          className="object-cover z-10 top-[26.6rem] left-[.9rem] h-[11.4rem] w-[8.4rem] bg-yellow-500/30 absolute "
          />
          <input name="passportNumber" className="h-4 w-[7rem] absolute top-[24.5rem] left-[22rem] bg-yellow-300/35 pl-1 text-sm font-medium uppercase tracking-normal"></input>
          <input name="lastName" className="h-4 w-[15rem] absolute top-[25.8rem] left-[10.5rem] bg-yellow-300/35 pl-1 text-sm font-medium uppercase tracking-normal"></input>
          <input name="firstName" className="h-4 w-[15rem] absolute top-[27.5rem] left-[10.5rem] bg-yellow-300/35 pl-1 text-sm font-medium uppercase tracking-normal"></input>
          <input name="date" className="h-4 w-[13.5rem] absolute top-[30.8rem] left-[10.5rem] bg-yellow-300/35 pl-1 text-sm font-medium uppercase tracking-normal"></input>
          <input name="birth" className="h-4 w-[13.5rem] absolute top-[32.4rem] left-[10.5rem] bg-yellow-300/35 pl-1 text-sm font-medium uppercase tracking-normal"></input>
          <input name="sex" className="h-4 w-[3rem] text-center absolute top-[32.4rem] left-[25.1rem] bg-yellow-300/35 text-sm font-medium uppercase tracking-normal"></input>
          <input name="dateIssued" className="h-4 w-[12rem] absolute top-[34rem] left-[10.5rem] bg-yellow-300/35 pl-1 text-sm font-medium uppercase tracking-normal"></input>
          <input name="dateExpiration" className="h-4 w-[12rem] absolute top-[35.6rem] left-[10.5rem] bg-yellow-300/35 pl-1 text-sm font-medium uppercase tracking-normal"></input>
        
          <input name="bottomLine1" className="h-5 w-[29.6rem] absolute top-[39.8rem] left-[.3rem] bg-yellow-300/35 pl-1 text-sm font-medium uppercase tracking-normal"></input>
          <input name="bottomLine2" className="h-5 w-[29.6rem] absolute top-[41.5rem] left-[.3rem] bg-yellow-300/35 pl-1 text-sm font-medium uppercase tracking-normal"></input>
        </form>
      </div>
    </main>
  );
}
