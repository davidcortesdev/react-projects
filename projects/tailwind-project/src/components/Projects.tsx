import { CardProject } from "./CardProject"

export const Projects = () => {

  return (
   <section id="projects" className="container py-40 flex justify-center items-center mx-auto">
    <div className="container max-w-[70rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:px-30 xl:px-0 gap-8 place-items-center">
      <CardProject title="Proyecto 1" image="https://plus.unsplash.com/premium_photo-1669867124806-f84dd1a9e87c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbGV6YSUyMHBhaXNhamV8ZW58MHx8MHx8fDA%3D" />
      <CardProject title="Proyecto 2" image="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" />
      <CardProject title="Proyecto 3" image="https://media.istockphoto.com/id/517188688/es/foto/paisaje-de-monta%C3%B1a.jpg?s=612x612&w=0&k=20&c=EnSd5sJdxih_svZHscQ5Hfzr3RSOdXO9MpdmKK4CMTs=" />
      <CardProject title="Proyecto 4" image="https://st2.depositphotos.com/2627989/5658/i/450/depositphotos_56584609-stock-photo-lovely-autumn-at-the-sea.jpg" />
      <CardProject title="Proyecto 5" image="https://cdn0.ecologiaverde.com/es/posts/9/2/0/los_10_paisajes_mas_bonitos_de_espana_1029_600.jpg" />
      <CardProject title="Proyecto 6" image="https://static.elnortedecastilla.es/www/multimedia/202107/06/media/MM-senderismo-asturias/oddle-1-ksRC--1350x900@El%20Comercio.jpg" />
    </div>
   </section>
  )
}