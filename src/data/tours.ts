export interface Tour {
  num: string;
  title: string;
  description: string;
  image: string;
}

export const tours: Tour[] = [
  {
    num: "N° 01",
    title: "Tour de Ballena Azul",
    description:
      "Encuentro con el ser vivo más grande que ha habitado la Tierra. Temporada de invierno, en aguas del Parque Nacional Bahía de Loreto.",
    image:
      "https://hotellunaloreto.com/assets/img/tours/tour_69d55891ac85b9.13447031.png",
  },
  {
    num: "N° 02",
    title: "Pesca Deportiva",
    description:
      "Dorado, marlín, jurel. Embarcaciones diseñadas por pescadores locales. Salidas desde el muelle del puerto.",
    image:
      "https://hotellunaloreto.com/assets/img/tours/tour_69d55811a8e7a2.56426864.png",
  },
  {
    num: "N° 03",
    title: "Isla Coronado · Snorkel",
    description:
      "Playa de arena blanca, delfines y un agua turquesa que parece de otro planeta. El acuario del mundo, en una sola jornada.",
    image:
      "https://hotellunaloreto.com/assets/img/tours/tour_69d557ff967e77.28106672.png",
  },
];
