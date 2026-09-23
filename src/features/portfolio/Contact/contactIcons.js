import emailIcon from "images/emailIcon.webp";
import gitHubIcon from "images/gitHubIcon.webp";
import linkedInIcon from "images/linkedInIcon.webp";
import whatsAppIcon from "images/whatsappIcon.webp";

export const icons = [
  {
    iconURL: whatsAppIcon,
    iconWidth: 72,
    iconHeight: 72,
    id: "whatsApp",
    link: "https://wa.me/003530862013944",
    name: "WhatsApp",
    label: {
      English: "Chat with me instantly",
      Polish: "Napisz do mnie od razu",
      Spanish: "Escríbeme al instante",
    },
    accent: "#25D366",
  },
  {
    iconURL: gitHubIcon,
    iconWidth: 72,
    iconHeight: 72,
    id: "gitHub",
    link: "https://github.com/BoosterTech",
    name: "GitHub",
    label: {
      English: "Check out my code",
      Polish: "Zobacz mój kod",
      Spanish: "Echa un vistazo a mi código",
    },
    accent: "#64748b",
  },
  {
    iconURL: linkedInIcon,
    iconWidth: 72,
    iconHeight: 72,
    id: "linkedIn",
    link: "https://www.linkedin.com/in/Dariusz-Podczasik",
    name: "LinkedIn",
    label: {
      English: "Let's connect professionally",
      Polish: "Nawiążmy kontakt zawodowy",
      Spanish: "Conectemos profesionalmente",
    },
    accent: "#0A66C2",
  },
  {
    iconURL: emailIcon,
    iconWidth: 72,
    iconHeight: 72,
    id: "email",
    link: "mailto:boostertech@mail.com",
    name: "Email",
    label: {
      English: "Drop me a message",
      Polish: "Wyślij mi wiadomość",
      Spanish: "Envíame un mensaje",
    },
    accent: "#f59e0b",
  },
];
