export interface Amenity {
  title: string;
  description: string;
  meta: string;
  icon: "kitchen" | "pool" | "restaurant" | "wifi";
}

export const amenities: Amenity[] = [
  {
    title: "Cocineta exterior",
    description:
      "Cocina completa al aire libre con barbacoa de alta gama, encimera amplia, fregadero doble y televisor. Ideal para preparar lo que pescaste durante la mañana.",
    meta: "Uso de huéspedes · Sin costo extra",
    icon: "kitchen",
  },
  {
    title: "Alberca elevada",
    description:
      'Piscina con escalón tipo "Baja" para descansar dentro del agua, ducha exterior y baño exclusivo. Rodeada de palmeras y bugambilias.',
    meta: "Abierta de 8:00 a 22:00 hrs",
    icon: "pool",
  },
  {
    title: "The Giggling Dolphin",
    description:
      "Nuestro restaurante en sitio. Lunes a viernes de 1 a 8 pm, sábados hasta las 10 pm con música en vivo. Cocina del Mar de Cortés sin salir del hotel.",
    meta: "Lun–Vie 13–20h · Sáb 13–22h",
    icon: "restaurant",
  },
  {
    title: "Starlink Wi-Fi",
    description:
      "Internet de alta velocidad vía satélite en todas las habitaciones y áreas comunes. Para los que necesitan trabajar de día y desconectarse de noche.",
    meta: "Cobertura total · Sin costo",
    icon: "wifi",
  },
];
