export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "¿Tienen precios especiales por temporada?",
    answer:
      "Sí. Al momento de reservar verás reflejado el precio según la temporada correspondiente: invierno, verano, otoño, navideña, Semana Santa, etc. Si tienes una fecha específica en mente, te podemos enviar la cotización exacta por WhatsApp.",
  },
  {
    question: "¿Cómo realizo mi reservación?",
    answer:
      'Da clic al botón "Reservar" en la habitación de tu elección y completa el formulario. Posteriormente, envía un WhatsApp al administrador, quien te dará las instrucciones del depósito. Una vez recibida la copia de tu identificación y el recibo de transferencia, ¡tu habitación queda apartada!',
  },
  {
    question: "¿Tienen internet?",
    answer:
      "Sí. Contamos con un servicio Starlink de alta velocidad, disponible en todas las habitaciones y áreas comunes. Para nuestros huéspedes que trabajan en remoto o necesitan permanecer comunicados durante el viaje, la conexión no será un problema.",
  },
  {
    question: "¿Qué incluye la habitación?",
    answer:
      "Aire acondicionado, ropa de cama, baño privado, toallas, Wi-Fi Starlink, y acceso completo a las áreas comunes: alberca, cocineta exterior, ducha de piscina y baño exterior. Las salidas a tours se reservan por separado.",
  },
  {
    question: "¿Aceptan mascotas?",
    answer:
      "Por favor consúltanos al momento de reservar. Cada caso lo evaluamos en función del tipo de mascota y la temporada.",
  },
];
