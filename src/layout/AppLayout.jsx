// import { Outlet } from "react-router"
// import { Header } from "./Header"
// import { Footer } from "./Footer"
// import { useEffect, useState } from "react"

// export const AppLayout = () => {
//     const images = [
//         "home_background1.jpg",
//         "home_background2.jpg",
//         "home_background3.jpg",
//         "home_background4.jpg",
//         "home_background5.jpg",
//     ];

//     const [imageIndex, setImageIndex] = useState(0);
//     setTimeout(()=> {
//         setImageIndex((prev) => (prev + 1) % images.length);
//     }, 1000)
//     return <>
//     <div className={`relative min-h-screen overflow-hidden homeImage absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
//             i === currentIndex ? "opacity-100" : "opacity-0"
//           }`} style={{backgroundImage: `url(/src/assets/${images[imageIndex]})`}}>
//         <Header />
//         <Outlet />
//     </div>
//     <Footer />
//     </>
// }


import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";

export const AppLayout = () => {
    const images = [
        "home_background3.jpg",
    ];
    const cacheCurrentIndex = parseInt(localStorage.currentIndex);
    const [currentIndex, setCurrentIndex] = useState(cacheCurrentIndex || 0);

    useEffect(()=> {
        const timer = setTimeout(() => {
        setCurrentIndex((prev) => {
            const index = (prev + 1) % images.length;
            localStorage.currentIndex = index;
            return index;
        });
        }, 10000);

        return () => clearTimeout(timer);
    }, [currentIndex])


  return (
    <div className="relative min-h-screen overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(/images/${img})` }}
        ></div>
      ))}

      <div className="relative z-10 flex flex-col min-h-screen text-white">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>

      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};
