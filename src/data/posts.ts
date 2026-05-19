export interface Post {
  meta: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}

export const posts: Post[] = [
  {
    meta: "20 Mar 2026 · Vivencias",
    title:
      "Despertar frente a la Marina: el encanto de hospedarte junto al mar de Loreto",
    excerpt:
      "Imagina abrir la ventana de tu habitación y contemplar cómo el sol nace sobre los yates de la dársena. Una historia sobre por qué la ubicación lo cambia todo en este pueblo.",
    image:
      "https://hotellunaloreto.com/assets/img/blog/69044b0659d96-photo-12.jpg",
    imageAlt: "Despertar frente a la Marina",
  },
  {
    meta: "20 Mar 2026 · Tours",
    title: "Snorkel en Loreto: colores, vida y tranquilidad bajo el agua",
    excerpt:
      "El Parque Nacional Bahía de Loreto resguarda algunos de los ecosistemas marinos más diversos del Pacífico mexicano.",
    image:
      "https://hotellunaloreto.com/assets/img/blog/69044be899618-1543775906_snorkeling1.png",
    imageAlt: "Snorkel en Loreto",
  },
  {
    meta: "20 Mar 2026 · Naturaleza",
    title: "Ballenas Azules en Loreto: un espectáculo natural de invierno",
    excerpt:
      "Cada invierno, Loreto recibe a visitantes muy especiales: las majestuosas ballenas azules eligen estas aguas para alimentarse y descansar.",
    image:
      "https://hotellunaloreto.com/assets/img/blog/69051e0ed99c5-blog-171696347349.jpg",
    imageAlt: "Ballenas Azules",
  },
];
