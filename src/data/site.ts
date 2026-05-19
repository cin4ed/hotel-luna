export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#experiencias", label: "Experiencias" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#diario", label: "Diario" },
  { href: "#contacto", label: "Contacto" },
];

export const contact = {
  phone: "+52 613 128 1700",
  email: "contacto@hotellunaloreto.com",
  whatsapp: "https://wa.me/526131281700",
  addressLines: [
    "Calle Benito Juárez 122",
    "Centro, 23880 Loreto",
    "Baja California Sur · México",
  ],
} as const;

export const images = {
  hero: "/images/hero.png",
  reserve:
    "https://hotellunaloreto.com/assets/img/hero/img_69ceb01ac2386.jpeg",
} as const;
