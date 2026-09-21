import emailIcon from "images/emailIcon.png";
import gitHubIcon from "images/gitHubIcon.png";
import linkedInIcon from "images/linkedInIcon.png";
import whatsAppIcon from "images/whatsappIcon.png";

export const icons = [
  {
    iconURL: whatsAppIcon,
    iconWidth: 256,
    iconHeight: 256,
    id: "whatsApp",
    link: "https://wa.me/003530862013944",
    name: "WhatsApp",
    label: "Chat with me instantly",
    accent: "#25D366",
  },
  {
    iconURL: gitHubIcon,
    iconWidth: 560,
    iconHeight: 560,
    id: "gitHub",
    link: "https://github.com/BoosterTech",
    name: "GitHub",
    label: "Check out my code",
    accent: "#64748b",
  },
  {
    iconURL: linkedInIcon,
    iconWidth: 256,
    iconHeight: 256,
    id: "linkedIn",
    link: "https://www.linkedin.com/in/Dariusz-Podczasik",
    name: "LinkedIn",
    label: "Let's connect professionally",
    accent: "#0A66C2",
  },
  {
    iconURL: emailIcon,
    iconWidth: 224,
    iconHeight: 225,
    id: "email",
    link: "mailto:boostertech@mail.com",
    name: "Email",
    label: "Drop me a message",
    accent: "#f59e0b",
  },
];
