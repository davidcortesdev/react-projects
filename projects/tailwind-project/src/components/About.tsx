export const About = () => {
  
   return (
   <section id="about" className="py-20 md:py-50 bg-gradient-to-b from-gray-900 to-gray-800 text-white mt-16 md:mt-20 border-gray-950">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-4">
         <div className="flex flex-col gap-12 md:gap-16 md:flex-row items-center sm:p-6 md:p-8 rounded-xl 2xl:text-[2rem] 2xl:p-20">
            <div className="flex flex-col flex-1 order-2 md:order-1 p-4 sm:p-6">
               <div className="mb-6">
                  <div className="bg-accent/10 backdrop-blur-lg py-3 rounded-lg inline-block">
                     <p className="font-display text-lg md:text-xl  text-white tracking-wide  2xl:text-[1.8rem]">Quién soy</p>
                  </div>
               </div>
            
               <h2 className="font-display text-4xl m-auto font-bold text-white text-center md:text-8xl md:text-left lg:text-7xl leading-tight tracking-tighter">
                  Desarrollador <span className="text-accent/90">con pasión</span> <br className="hidden md:block"/> por la IA y el diseño
               </h2>
            
               <div className="w-32 h-1 bg-accent/80 mt-10 mb-12 rounded-full hidden md:block">
               </div>
               
               <div className="mt-8 space-y-6 text-base sm:text-lg text-gray-200 font-medium">
                  <p>
                     Soy un desarrollador Frontend apasionado por crear experiencias digitales que sean tanto funcionales como estéticamente atractivas. Con un enfoque especial en la integración de tecnologías de Inteligencia Artificial, busco constantemente formas innovadoras de mejorar la interacción del usuario con las aplicaciones web.
                  </p>
               </div>
               
               <div className="mt-12 flex justify-center md:justify-start">
                  <a
                     href="#contact"
                     className="inline-flex h-16 items-center justify-center rounded-md bg-[#37536289] px-10 text-lg font-bold text-white tracking-wide transition-all hover:bg-accent/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-lg hover:shadow-white/30 backdrop-blur-md"
                  >
                     Hablemos sobre tu proyecto
                     <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="ml-3"
                     >
                     <path d="M5 12h14"></path>
                     <path d="m12 5 7 7-7 7"></path>
                     </svg>
                  </a>
               </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg border-2 border-gray-700 order-1 md:hidden xl:block xl:p-10">
               <img
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
               alt="Foto perfil"
               className="relative w-full h-full object-cover shadow-lg transition-transform duration-700 hover:scale-105"
               />
            </div>

         </div>
      </div>
   </section> 
  )
}
