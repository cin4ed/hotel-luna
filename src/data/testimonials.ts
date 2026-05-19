export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  initial: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Gran comunicación desde la reservación hasta la salida. Ubicación perfecta, justo cerca del puerto y del malecón.",
    name: "Katrina Fallkawi",
    location: "Estados Unidos",
    initial: "K",
  },
  {
    quote:
      "Excelente ubicación a unos pasos del malecón de Loreto. Muy limpias las habitaciones y la atención de primera.",
    name: "Mayra Ruelas",
    location: "Ciudad de México",
    initial: "M",
  },
  {
    quote:
      "Su excelente ubicación a unos pasos de la Dársena del Puerto en el Mar de Cortés lo convierte en el lugar perfecto.",
    name: "Ismael Trejo",
    location: "Monterrey",
    initial: "I",
  },
];
