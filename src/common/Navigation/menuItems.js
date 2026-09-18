const offsetHome = -120;
const offsetAbout = -120;
const offsetProjects = -100;
const offsetContact = 0;

export const menuItems = {
  English: [
    { name: "Home", slug: "home", offset: offsetHome },
    { name: "About me", slug: "about", offset: offsetAbout },
    { name: "Projects", slug: "projects", offset: offsetProjects },
    { name: "Contact", slug: "contact", offset: offsetContact },
  ],
  Polish: [
    { name: "Strona główna", slug: "home", offset: offsetHome },
    { name: "O mnie", slug: "about", offset: offsetAbout },
    { name: "Projekty", slug: "projects", offset: offsetProjects },
    { name: "Kontakt", slug: "contact", offset: offsetContact },
  ],
  Spanish: [
    { name: "Inicio", slug: "home", offset: offsetHome },
    { name: "Acerca de", slug: "about", offset: offsetAbout },
    { name: "Proyectos", slug: "projects", offset: offsetProjects },
    { name: "Contacto", slug: "contact", offset: offsetContact },
  ],
};
