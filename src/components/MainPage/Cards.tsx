import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Cundinamarca",
      src: "/cundinamarca.jpg", //Catedral de Sal de Zipaquirá
      description: "Una de las maravillas escondidas en Cundinamarca.",
    },
    {
      title: "Bolivar",
      src: "/bolivar.jpeg", //Cartagena de Indias
      description: "Sumérgete en la historia y el encanto de Bolívar.",
    },
    {
      title: "Choco",
      src: "/choco.jpg", //Cascada
      description: "Descubre la magia natural que fluye en el corazón de Chocó.",
    },
    {
      title: "Amazonas",
      src: "/amazonas.jpg", //Mono
      description: "La biodiversidad te espera en el exuberante Amazonas.",
    },
    {
      title: "Meta",
      src: "/meta.jpg", //Rio con colores
      description: "Los colores vibrantes del Meta te invitan a una aventura inolvidable.",
    },
    {
      title: "Providencia",
      src: "/providencia.jpg", //Barco estructura
      description: "Explora los misterios y la tranquilidad de Providencia.",
    },
  ];

  return <FocusCards cards={cards} />;
}