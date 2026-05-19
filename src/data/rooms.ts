export type RoomVariant = "feature" | "side" | "full";

export interface Room {
  id: string;
  variant: RoomVariant;
  tag?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  price: number;
}

export const rooms: Room[] = [
  {
    id: "doble-1",
    variant: "feature",
    tag: "Más solicitada",
    title: "Habitación Doble · I",
    description:
      "Para dos adultos y un niño. Amplia cama king size, escritorio, baño privado y vista al jardín de palmeras. La habitación que más eligen las parejas que llegan por primera vez a Loreto.",
    image:
      "https://hotellunaloreto.com/assets/img/rooms/img_6945a28eae6d5.png",
    imageAlt: "Habitación Doble 1",
    features: [
      "2 adultos + 1 niño",
      "Cama King Size",
      "Aire acondicionado",
      "Starlink Wi-Fi",
    ],
    price: 1500,
  },
  {
    id: "doble-2",
    variant: "side",
    title: "Habitación Doble · II",
    description:
      "Misma capacidad, con detalles cálidos y luz natural durante la mañana.",
    image:
      "https://hotellunaloreto.com/assets/img/rooms/img_6945b06de4eb9.jpeg",
    imageAlt: "Habitación Doble 2",
    features: [
      "2 adultos + 1 niño",
      "Cama King Size",
      "Aire acondicionado",
      "Starlink Wi-Fi",
    ],
    price: 1500,
  },
  {
    id: "familiar-3",
    variant: "full",
    tag: "Familiar",
    title: "Habitación Familiar · III",
    description:
      "La más espaciosa. Para 4 adultos y 2 niños, con cama king size más zona adicional. Ideal para familias o grupos de amigos que vienen a pescar, navegar o simplemente desconectarse durante varios días.",
    image:
      "https://hotellunaloreto.com/assets/img/rooms/img_6945a4b49e8fd.png",
    imageAlt: "Habitación Doble 3",
    features: [
      "4 adultos + 2 niños",
      "Cama King + zona extra",
      "Aire acondicionado",
      "Starlink Wi-Fi",
      "Acceso directo a alberca",
      "Cocineta cercana",
    ],
    price: 1500,
  },
];
