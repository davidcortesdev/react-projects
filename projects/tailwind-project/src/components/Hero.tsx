import { Navigation } from "./Navigation"

export const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row bg-[#272727] w-full h-[calc(100vh-5rem)]">
      
      <div className="bg-blue-200 text-white h-screen flex-1/2 order-2 md:order-2 xl:order-1 hidden xl:block">
         <img 
            src="../public/hero-image.jpg" 
            alt="Hero Image"
            className="object-cover w-full h-full"
         />
      </div>
      
      <div className="bg-white text-black flex-1/2 order-1 md:order-1 xl:order-2 h-screen">
         <Navigation />
         <div className="flex flex-col items-center justify-center h-full md:p-0">
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold text-center">Frontend</h1>
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold text-center">Developer</h1>
            <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold text-center mt-5 text-pink-900">Portfolio David Cortés</h2>
         </div>
         
      </div>

    </div>
  )
}
