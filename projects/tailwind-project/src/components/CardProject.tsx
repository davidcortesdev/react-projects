interface CardProjectProps {
  title: string;
  image: string;
}

export const CardProject = ({ title, image }: CardProjectProps) => {

  return (
    <div id="card" className="relative bg-black min-w-60 w-90 h-70 rounded-2xl hover:scale-105 transition-transform" >
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-center rounded-2xl" />
        <div className="absolute p-5 top-40 inset-0 bg-black/70 text-white rounded-2xl">
          {title}
        </div>
      </div>
  )
}
