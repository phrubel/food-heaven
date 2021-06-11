import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";


function App() {

  const [isAnimated, setIsAnimated] = useState(false)

  // animated call
  useEffect(() => {
    setIsAnimated(true)
  }, [])


  return (
    <>
    <Navbar></Navbar>
    <div
  
      // height and bg-color
      className="min-h-screen bg-red-50 w-screen flex justify-center items-center flex-col-reverse lg:flex-row lg:justify-around">
      <div className=
      // conditional animated
      {`${isAnimated ? "sacle-y-100" : "scale-y-0"} mt-10 text-center text-left transform transition duration-1000 ease-in-out`}>
        <h2 className="font-black font-serif  text-4xl lg:text-5xl">Fresh Healthy Foods</h2>
        <h5 className="font-black font-serif text-2xl text-base">We made fresh & Healthy Food for you... </h5>
        <span style={{ cursor: "pointer" }} className="inline-block text-2xl font-black bg-yellow-400 px-10 py-3 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5">Explore</span>
      </div>

      <div>
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBnkOYNZaTlWYMwRnP2DdjVlAPycnC34c_A&usqp=CAU'} alt="food"
        // conditional animated
          className={`${isAnimated ? "scale-150" : "translate-x-full translate-y-full"} w-screen object-contain md:object-scale-down lg:max-w-xl transform transition duration-1000 ease-in-out`} />
      </div>

    </div>
    </>
  );
}

export default App;
