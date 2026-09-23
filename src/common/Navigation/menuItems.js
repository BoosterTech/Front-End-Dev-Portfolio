const offsetHome = -120;
const offsetAbout = -25;
const offsetProjects = -40;
const offsetProjectsMobile = -180;
const offsetContact = -90;

export const menuItems = {
  English: [
    { name: "Home", slug: "home", offset: offsetHome },
    { name: "About me", slug: "about", offset: offsetAbout },
    {
      name: "Projects",
      slug: "projects",
      offset: offsetProjects,
      offsetMobile: offsetProjectsMobile,
    },
    { name: "Contact", slug: "contact", offset: offsetContact },
  ],
  Polish: [
    { name: "Strona główna", slug: "home", offset: offsetHome },
    { name: "O mnie", slug: "about", offset: offsetAbout },
    {
      name: "Projekty",
      slug: "projects",
      offset: offsetProjects,
      offsetMobile: offsetProjectsMobile,
    },
    { name: "Kontakt", slug: "contact", offset: offsetContact },
  ],
  Spanish: [
    { name: "Inicio", slug: "home", offset: offsetHome },
    { name: "Acerca de", slug: "about", offset: offsetAbout },
    {
      name: "Proyectos",
      slug: "projects",
      offset: offsetProjects,
      offsetMobile: offsetProjectsMobile,
    },
    { name: "Contacto", slug: "contact", offset: offsetContact },
  ],
};
