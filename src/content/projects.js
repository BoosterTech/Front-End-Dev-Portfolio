import currencyConverterImage from "images/projects/CurrencycalculatorProject.webp";
import eatNsplitmage from "images/projects/EatNSplitProject.webp";
import fastReactPizzaImage from "images/projects/FastPizzaProject.webp";
import movieBrowserImage from "images/projects/MoviebrowserProject.webp";
import paradiselodgeImage from "images/projects/ParadiseLodgeProject.webp";
import plasmaLibraryImage from "images/projects/PlasmaLibraryProject.webp";
import reactQuizImage from "images/projects/ReactQuizProject.webp";
import tasksListImage from "images/projects/TaskListProject.webp";
import wtmMusicAIImage from "images/projects/WTMMusicProject.webp";
import currencyConverterModalImage from "images/projects_modal/currency_converter_modal.webp";
import eatNsplitModalImage from "images/projects_modal/eat_n_split_modal.webp";
import fastPizzaModalImage from "images/projects_modal/fast_pizza_co_modal.webp";
import movieBrowserModalImage from "images/projects_modal/movie_browser_modal.webp";
import paradiseLodgeModalImage from "images/projects_modal/paradise_lodge_modal.webp";
import plasmaLibraryModalImage from "images/projects_modal/plasma_library_modal.webp";
import reactQuizModalImage from "images/projects_modal/react_quiz_modal.webp";
import tasksListModalImage from "images/projects_modal/tasks_list_modal.webp";

export const PROJECT_IMAGE_WIDTH = 1200;
export const PROJECT_IMAGE_HEIGHT = 675;

/** @type {import("../types").Project[]} */
const projects = [
  {
    title: {
      English: "🎵 WTM AI Music Generation Website",
      Polish: "🎵 WTM AI Music Generation - Strona Generowania Muzyki AI",
      Spanish:
        "🎵 WTM AI Music Generation - Sitio Web de Generación de Música con IA",
    },
    available: "web",
    description: {
      English: `<p>WTM is a production-grade SaaS platform for generating and managing AI-generated music, built with Next.js 16, React 19, and TypeScript on managed cloud infrastructure.</p>
              <p>Users queue generation jobs, monitor progress in real time, and manage their track library through a full-stack architecture designed for production workloads.</p>
              <ul>
                <li><strong>Async generation pipeline</strong> — BullMQ + Redis workers for long-running AI jobs</li>
                <li><strong>Full-stack</strong> — Next.js App Router, React Server Components, Server Actions</li>
                <li><strong>Auth & security</strong> — NextAuth, protected routes, Zod validation, access control</li>
                <li><strong>Data</strong> — Supabase/PostgreSQL for users, metadata, and storage</li>
                <li><strong>Observability</strong> — Sentry monitoring + Pino structured logging</li>
              </ul>`,
      Polish: `<p>WTM to platforma SaaS klasy produkcyjnej do generowania muzyki AI i zarządzania nią, zbudowana w Next.js 16, React 19 i TypeScript na zarządzanej infrastrukturze chmurowej.</p>
             <p>Użytkownicy kolejkują zadania generowania, śledzą postęp w czasie rzeczywistym i zarządzają biblioteką utworów w architekturze full-stack zaprojektowanej pod realne obciążenia produkcyjne.</p>
             <ul>
               <li><strong>Asynchroniczny pipeline generowania</strong> — workery BullMQ + Redis do długotrwałych zadań AI</li>
               <li><strong>Full-stack</strong> — Next.js App Router, React Server Components, Server Actions</li>
               <li><strong>Uwierzytelnianie i bezpieczeństwo</strong> — NextAuth, chronione trasy, walidacja Zod, kontrola dostępu</li>
               <li><strong>Dane</strong> — Supabase/PostgreSQL dla użytkowników, metadanych i plików</li>
               <li><strong>Obserwowalność</strong> — monitoring Sentry + logi strukturalne Pino</li>
             </ul>`,
      Spanish: `<p>WTM es una plataforma SaaS de nivel producción para generar y gestionar música con IA, construida con Next.js 16, React 19 y TypeScript sobre infraestructura cloud gestionada.</p>
              <p>Los usuarios encolan trabajos de generación, monitorizan el progreso en tiempo real y gestionan su biblioteca de pistas a través de una arquitectura full-stack diseñada para cargas de producción.</p>
              <ul>
                <li><strong>Pipeline de generación asíncrono</strong> — workers BullMQ + Redis para trabajos de IA de larga duración</li>
                <li><strong>Full-stack</strong> — Next.js App Router, React Server Components, Server Actions</li>
                <li><strong>Autenticación y seguridad</strong> — NextAuth, rutas protegidas, validación con Zod, control de acceso</li>
                <li><strong>Datos</strong> — Supabase/PostgreSQL para usuarios, metadatos y almacenamiento</li>
                <li><strong>Observabilidad</strong> — monitorización con Sentry + logs estructurados con Pino</li>
              </ul>`,
    },
    imageURL: `${wtmMusicAIImage}`,
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "BullMQ",
      "Redis",
    ],
    GitHubPagesURLTag: {
      English: "Go to the Website",
      Polish: "Przejdź do Strony",
      Spanish: "Ir al Sitio Web",
    },
    GitHubRepoURLTag: {
      English: "Go to the GitHub Repository",
      Polish: "Przejdź do Repozytorium GitHub",
      Spanish: "Ir al Repositorio de GitHub",
    },
    inverted: true,
    border: false,
    variant: "comingSoon",
  },
  {
    title: {
      English: `🏡 The Paradise Lodge - Luxury Cabin Booking Website`,
      Polish: `🏡 The Paradise Lodge - Luksusowa Strona Rezerwacji Domków`,
      Spanish: `🏡 The Paradise Lodge - Sitio Web de Reservas de Cabañas de Lujo`,
    },
    available: "web",
    description: {
      English: `<p>Cabin booking platform built with Next.js App Router and Supabase. Users browse cabins, check real-time availability, and create and manage reservations through authenticated accounts.</p>
                <ul>
                  <li><strong>Full-stack</strong> — Next.js App Router and React Server Components</li>
                  <li><strong>Authentication</strong> — NextAuth: sign-in, protected routes, per-user bookings</li>
                  <li><strong>Data</strong> — Supabase/PostgreSQL for cabins, users, and reservations + image storage</li>
                  <li><strong>Booking system</strong> — availability checking, reservation creation, guest management</li>
                  <li><strong>UI</strong> — Tailwind CSS, desktop-optimised booking experience</li>
                </ul>`,
      Polish: `<p>Platforma rezerwacji domków zbudowana z Next.js App Router i Supabase. Użytkownicy przeglądają domki, sprawdzają dostępność w czasie rzeczywistym oraz tworzą i zarządzają rezerwacjami przez uwierzytelnione konta.</p>
               <ul>
                 <li><strong>Full-stack</strong> — Next.js App Router i React Server Components</li>
                 <li><strong>Uwierzytelnianie</strong> — NextAuth: logowanie, chronione trasy, rezerwacje per użytkownik</li>
                 <li><strong>Dane</strong> — Supabase/PostgreSQL dla domków, użytkowników i rezerwacji + przechowywanie zdjęć</li>
                 <li><strong>System rezerwacji</strong> — sprawdzanie dostępności, tworzenie rezerwacji, zarządzanie gośćmi</li>
                 <li><strong>Interfejs</strong> — Tailwind CSS, zoptymalizowany pod desktop</li>
               </ul>`,
      Spanish: `<p>Plataforma de reservas de cabañas construida con Next.js App Router y Supabase. Los usuarios exploran cabañas, verifican disponibilidad en tiempo real y crean y gestionan reservas mediante cuentas autenticadas.</p>
                <ul>
                  <li><strong>Full-stack</strong> — Next.js App Router y React Server Components</li>
                  <li><strong>Autenticación</strong> — NextAuth: inicio de sesión, rutas protegidas, reservas por usuario</li>
                  <li><strong>Datos</strong> — Supabase/PostgreSQL para cabañas, usuarios y reservas + almacenamiento de imágenes</li>
                  <li><strong>Sistema de reservas</strong> — verificación de disponibilidad, creación de reservas, gestión de huéspedes</li>
                  <li><strong>Interfaz</strong> — Tailwind CSS, experiencia optimizada para escritorio</li>
                </ul>`,
    },

    imageURL: `${paradiselodgeImage}`,
    modalImageURL: `${paradiseLodgeModalImage}`,
    modalImageWidth: 1920,
    modalImageHeight: 942,
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Supabase",
      "NextAuth",
      "Tailwind CSS",
    ],
    GitHubPagesURLTag: {
      English: "Go to the Website",
      Polish: "Przejdź do Strony",
      Spanish: "Ir al Sitio Web",
    },
    GitHubRepoURLTag: {
      English: "Go to the GitHub Repository",
      Polish: "Przejdź do Repozytorium GitHub",
      Spanish: "Ir al Repositorio de GitHub",
    },
    GitHubPagesURL: "https://paradise-lodge-web.vercel.app",
    GitHubRepoURL: "https://github.com/BoosterTech/ParadiseLodge-website.git",
    inverted: true,
    border: false,
  },

  {
    title: {
      English: `🎥 Movies Browser`,
      Polish: `🎥 Przeglądarka Filmów `,
      Spanish: `🎥 Navegador de Películas `,
    },
    available: "web & mob",
    description: {
      English: `<p>Movie discovery app built with React, Redux, and React Router on the TMDb API — browse films, actors, and crew with detailed views. Final team project of the YouCode Front-End program: three developers, four weeks, professional Git workflow.</p>
                <ul>
                  <li><strong>Architecture</strong> — reusable React components, Redux state for movies, actors, and UI</li>
                  <li><strong>Data</strong> — TMDb REST API via Axios for movies, cast, and crew details</li>
                  <li><strong>Routing</strong> — React Router navigation between list and detail views</li>
                  <li><strong>Team workflow</strong> — feature branches, pull requests, code reviews, shared task planning</li>
                  <li><strong>UI</strong> — styled-components implementing a professional design, desktop and mobile</li>
                </ul>`,
      Polish: `<p>Aplikacja do odkrywania filmów zbudowana z React, Redux i React Router na API TMDb — przeglądanie filmów, aktorów i ekipy ze szczegółowymi widokami. Końcowy projekt zespołowy programu YouCode Front-End: trzech programistów, cztery tygodnie, profesjonalny workflow Git.</p>
               <ul>
                 <li><strong>Architektura</strong> — komponenty React wielokrotnego użytku, stan Redux dla filmów, aktorów i UI</li>
                 <li><strong>Dane</strong> — integracja REST API TMDb przez Axios dla filmów, obsady i ekipy</li>
                 <li><strong>Routing</strong> — nawigacja React Router między widokami list i szczegółów</li>
                 <li><strong>Praca zespołowa</strong> — feature branches, pull requesty, code review, wspólne planowanie zadań</li>
                 <li><strong>Interfejs</strong> — styled-components według profesjonalnego projektu graficznego, desktop i mobile</li>
               </ul>`,
      Spanish: `<p>Aplicación de descubrimiento de películas construida con React, Redux y React Router sobre la API de TMDb — explora películas, actores y equipo con vistas detalladas. Proyecto final en equipo del programa YouCode Front-End: tres desarrolladores, cuatro semanas, flujo de trabajo Git profesional.</p>
                <ul>
                  <li><strong>Arquitectura</strong> — componentes React reutilizables, estado Redux para películas, actores y UI</li>
                  <li><strong>Datos</strong> — integración de la API REST de TMDb vía Axios para películas, reparto y equipo</li>
                  <li><strong>Routing</strong> — navegación React Router entre vistas de lista y detalle</li>
                  <li><strong>Trabajo en equipo</strong> — feature branches, pull requests, code reviews, planificación compartida</li>
                  <li><strong>Interfaz</strong> — styled-components implementando un diseño profesional, desktop y móvil</li>
                </ul>`,
    },
    imageURL: `${movieBrowserImage}`,
    modalImageURL: `${movieBrowserModalImage}`,
    modalImageWidth: 1766,
    modalImageHeight: 912,
    technologies: [
      "React",
      "Redux",
      "React Router",
      "Axios",
      "Styled Components",
    ],
    GitHubPagesURLTag: {
      English: "Go to the Website",
      Polish: "Przejdź do Strony",
      Spanish: "Ir al Sitio Web",
    },
    GitHubRepoURLTag: {
      English: "Go to the GitHub Repository",
      Polish: "Przejdź do Repozytorium GitHub",
      Spanish: "Ir al Repositorio de GitHub",
    },
    GitHubPagesURL: "https://boostertech.github.io/MovieBrowser/#/movies",
    GitHubRepoURL: "https://github.com/BoosterTech/MovieBrowser.git",
    inverted: false,
  },
  {
    title: {
      English: `📝Tasks List`,
      Polish: `📝Lista Zadań`,
      Spanish: `📝Lista de Tareas`,
    },
    description: {
      English: `<p>Task manager built with React, Redux Toolkit, and Redux-Saga — create, complete, hide, and remove tasks with detail views and localStorage persistence.</p>
                <ul>
                  <li><strong>State</strong> — Redux Toolkit store with Redux-Saga handling asynchronous workflows</li>
                  <li><strong>Tasks</strong> — create, toggle, hide completed, remove, and per-task detail pages</li>
                  <li><strong>Routing</strong> — React Router navigation between list and detail views</li>
                  <li><strong>UI</strong> — styled-components, responsive desktop and mobile layouts</li>
                </ul>`,
      Polish: `<p>Aplikacja do zarządzania zadaniami zbudowana z React, Redux Toolkit i Redux-Saga — tworzenie, ukończanie, ukrywanie i usuwanie zadań z widokami szczegółów i zapisem w localStorage.</p>
               <ul>
                 <li><strong>Stan</strong> — store Redux Toolkit z Redux-Saga obsługującą operacje asynchroniczne</li>
                 <li><strong>Zadania</strong> — tworzenie, oznaczanie, ukrywanie ukończonych, usuwanie i strony szczegółów</li>
                 <li><strong>Routing</strong> — nawigacja React Router między listą a widokami szczegółów</li>
                 <li><strong>Interfejs</strong> — styled-components, responsywne układy desktop i mobile</li>
               </ul>`,

      Spanish: `<p>Gestor de tareas construido con React, Redux Toolkit y Redux-Saga — crea, completa, oculta y elimina tareas con vistas de detalle y persistencia en localStorage.</p>
                <ul>
                  <li><strong>Estado</strong> — store de Redux Toolkit con Redux-Saga para los flujos asíncronos</li>
                  <li><strong>Tareas</strong> — crear, marcar, ocultar completadas, eliminar y páginas de detalle</li>
                  <li><strong>Routing</strong> — navegación React Router entre la lista y las vistas de detalle</li>
                  <li><strong>Interfaz</strong> — styled-components, diseños responsivos para escritorio y móvil</li>
                </ul>`,
    },
    imageURL: `${tasksListImage}`,
    modalImageURL: `${tasksListModalImage}`,
    modalImageWidth: 1920,
    modalImageHeight: 945,
    technologies: [
      "React",
      "Redux Toolkit",
      "Redux-Saga",
      "React Router",
      "Styled Components",
    ],
    GitHubPagesURLTag: {
      English: "Go to the Website",
      Polish: "Przejdź do Strony",
      Spanish: "Ir al Sitio Web",
    },
    GitHubRepoURLTag: {
      English: "Go to the GitHub Repository",
      Polish: "Przejdź do Repozytorium GitHub",
      Spanish: "Ir al Repositorio de GitHub",
    },
    GitHubPagesURL:
      "https://boostertech.github.io/To-Do-List-Redux-Saga-Module-14/#/todo-list-module-14/tasks",
    GitHubRepoURL:
      "https://github.com/BoosterTech/To-Do-List-Redux-Saga-Module-14.git",
    inverted: true,
    border: true,
  },
  {
    title: {
      English: `💱Currency Converter`,
      Polish: `💱Kalkulator Walut`,
      Spanish: `💱Conversor de Divisas`,
    },
    available: "web & mob",
    description: {
      English: `<p>Currency converter built with React and styled-components, powered by live exchange rates from the European Central Bank API.</p>
                <ul>
                  <li><strong>Data</strong> — async fetching of ECB rates via Axios, loading and error states handled</li>
                  <li><strong>Logic</strong> — conversion math across a wide currency set, driven by controlled inputs</li>
                  <li><strong>UI</strong> — styled-components, clean responsive layout</li>
                </ul>`,
      Polish: `<p>Kalkulator walut zbudowany z React i styled-components, oparty na aktualnych kursach z API Europejskiego Banku Centralnego.</p>
               <ul>
                 <li><strong>Dane</strong> — asynchroniczne pobieranie kursów EBC przez Axios, z obsługą stanów ładowania i błędów</li>
                 <li><strong>Logika</strong> — przeliczanie walut z szerokiego zestawu, sterowane kontrolowanymi polami</li>
                 <li><strong>Interfejs</strong> — styled-components, czysty responsywny układ</li>
               </ul>`,
      Spanish: `<p>Conversor de divisas construido con React y styled-components, alimentado por tipos de cambio en vivo de la API del Banco Central Europeo.</p>
                <ul>
                  <li><strong>Datos</strong> — obtención asíncrona de tipos del BCE vía Axios, con estados de carga y error</li>
                  <li><strong>Lógica</strong> — cálculo de conversiones sobre un amplio conjunto de divisas, con inputs controlados</li>
                  <li><strong>Interfaz</strong> — styled-components, diseño limpio y responsivo</li>
                </ul>`,
    },
    imageURL: `${currencyConverterImage}`,
    modalImageURL: `${currencyConverterModalImage}`,
    modalImageWidth: 1920,
    modalImageHeight: 942,
    technologies: ["React", "Axios", "Styled Components"],
    GitHubPagesURLTag: {
      English: "Go to the Website",
      Polish: "Przejdź do Strony",
      Spanish: "Ir al Sitio Web",
    },
    GitHubRepoURLTag: {
      English: "Go to the GitHub Repository",
      Polish: "Przejdź do Repozytorium GitHub",
      Spanish: "Ir al Repositorio de GitHub",
    },
    GitHubPagesURL:
      "https://boostertech.github.io/Currency-Converter-Fetch-Module-12/",
    GitHubRepoURL:
      "https://github.com/BoosterTech/Currency-Converter-Fetch-Module-12.git",
    inverted: false,
    border: true,
  },
  {
    title: {
      English: `❓React Quiz App`,
      Polish: `❓React Quiz App`,
      Spanish: `❓React Quiz App`,
    },
    description: {
      English: `<p>Interactive React quiz — 30 questions on components, hooks, and state, tracking progress and scoring each run.</p>
                <ul>
                  <li><strong>State</strong> — useReducer state machine driving quiz phases, answers, and score</li>
                  <li><strong>UI</strong> — styled-components, conditional rendering per quiz phase</li>
                  <li><strong>Fundamentals</strong> — functional components, hooks, derived state</li>
                </ul>`,
      Polish: `<p>Interaktywny quiz o React — 30 pytań o komponenty, hooki i stan, ze śledzeniem postępu i punktacją każdej rozgrywki.</p>
               <ul>
                 <li><strong>Stan</strong> — maszyna stanów na useReducer sterująca fazami quizu, odpowiedziami i wynikiem</li>
                 <li><strong>Interfejs</strong> — styled-components, renderowanie warunkowe dla każdej fazy</li>
                 <li><strong>Podstawy</strong> — komponenty funkcyjne, hooki, stan pochodny</li>
               </ul>`,
      Spanish: `<p>Quiz interactivo de React — 30 preguntas sobre componentes, hooks y estado, con seguimiento del progreso y puntuación de cada intento.</p>
                <ul>
                  <li><strong>Estado</strong> — máquina de estados con useReducer que controla las fases del quiz, las respuestas y la puntuación</li>
                  <li><strong>Interfaz</strong> — styled-components, renderizado condicional por fase del quiz</li>
                  <li><strong>Fundamentos</strong> — componentes funcionales, hooks, estado derivado</li>
                </ul>`,
    },
    available: "web & mob",
    imageURL: `${reactQuizImage}`,
    modalImageURL: `${reactQuizModalImage}`,
    modalImageWidth: 656,
    modalImageHeight: 545,
    technologies: ["React", "useReducer", "Styled Components"],
    GitHubPagesURLTag: {
      English: "Go to the Website",
      Polish: "Przejdź do Strony",
      Spanish: "Ir al Sitio Web",
    },
    GitHubRepoURLTag: {
      English: "Go to the GitHub Repository",
      Polish: "Przejdź do Repozytorium GitHub",
      Spanish: "Ir al Repositorio de GitHub",
    },
    GitHubPagesURL: "https://boostertech.github.io/react-quiz/",
    GitHubRepoURL: "https://github.com/BoosterTech/react-quiz.git",
    inverted: true,
    border: true,
  },
  {
    title: {
      English: `⚛️Plasma Library`,
      Polish: `⚛️Biblioteka Plazma`,
      Spanish: `⚛️Biblioteca de Plasma`,
    },
    description: {
      English: `<p>Informational site on plasma physics — my first web project, built with plain HTML, CSS, and JavaScript and preserved as originally written.</p>
                <ul>
                  <li><strong>Foundations</strong> — semantic HTML structure, hand-written CSS, vanilla JS interactivity</li>
                  <li><strong>Responsive</strong> — fluid layout adapting across screen sizes</li>
                  <li><strong>Content</strong> — curated books and publications on plasma physics</li>
                </ul>`,
      Polish: `<p>Strona informacyjna o fizyce plazmy — mój pierwszy projekt webowy, zbudowany w czystym HTML, CSS i JavaScript i zachowany w oryginalnej postaci.</p>
               <ul>
                 <li><strong>Podstawy</strong> — semantyczna struktura HTML, ręcznie pisany CSS, interakcje w vanilla JS</li>
                 <li><strong>Responsywność</strong> — płynny układ dostosowujący się do różnych ekranów</li>
                 <li><strong>Treść</strong> — wyselekcjonowane książki i publikacje o fizyce plazmy</li>
               </ul>`,
      Spanish: `<p>Sitio informativo sobre física de plasmas — mi primer proyecto web, construido con HTML, CSS y JavaScript puros y conservado tal como fue escrito.</p>
                <ul>
                  <li><strong>Fundamentos</strong> — estructura HTML semántica, CSS escrito a mano, interactividad en JS vanilla</li>
                  <li><strong>Responsivo</strong> — diseño fluido que se adapta a distintas pantallas</li>
                  <li><strong>Contenido</strong> — libros y publicaciones seleccionados sobre física de plasmas</li>
                </ul>`,
    },
    available: "web & mob",
    imageURL: `${plasmaLibraryImage}`,
    modalImageURL: `${plasmaLibraryModalImage}`,
    modalImageWidth: 1903,
    modalImageHeight: 942,
    technologies: ["HTML", "CSS", "JavaScript"],
    GitHubPagesURLTag: {
      English: "Go to the Website",
      Polish: "Przejdź do Strony",
      Spanish: "Ir al Sitio Web",
    },
    GitHubRepoURLTag: {
      English: "Go to the GitHub Repository",
      Polish: "Przejdź do Repozytorium GitHub",
      Spanish: "Ir al Repositorio de GitHub",
    },
    GitHubPagesURL: "https://boostertech.github.io/Plasma-Library/",
    GitHubRepoURL: "https://github.com/BoosterTech/Plasma-Library.git",
    inverted: false,
    border: true,
  },
  {
    title: {
      English: `🍴Eat-n-split💶`,
      Polish: `🍴Eat-n-split💶`,
      Spanish: `🍴Eat-n-split💶`,
    },
    description: {
      English: `<p>Bill-splitting app built with React and styled-components — add friends, enter expenses, and see what each person owes calculated live from shared state.</p>
                <ul>
                  <li><strong>State</strong> — controlled forms and lifted state driving per-person balances</li>
                  <li><strong>UI</strong> — styled-components for a consistent, responsive interface</li>
                  <li><strong>Fundamentals</strong> — props, component composition, conditional rendering</li>
                </ul>`,
      Polish: `<p>Aplikacja do dzielenia rachunków zbudowana z React i styled-components — dodawaj znajomych, wprowadzaj wydatki i zobacz na żywo, ile każda osoba ma do zapłacenia.</p>
               <ul>
                 <li><strong>Stan</strong> — kontrolowane formularze i współdzielony stan wyliczający salda poszczególnych osób</li>
                 <li><strong>Interfejs</strong> — styled-components zapewniające spójny, responsywny wygląd</li>
                 <li><strong>Podstawy</strong> — propsy, kompozycja komponentów, renderowanie warunkowe</li>
               </ul>`,
      Spanish: `<p>Aplicación para dividir cuentas construida con React y styled-components — agrega amigos, ingresa gastos y ve lo que debe cada persona calculado en vivo desde el estado compartido.</p>
                <ul>
                  <li><strong>Estado</strong> — formularios controlados y estado elevado que calcula los saldos por persona</li>
                  <li><strong>Interfaz</strong> — styled-components para una interfaz consistente y responsiva</li>
                  <li><strong>Fundamentos</strong> — props, composición de componentes, renderizado condicional</li>
                </ul>`,
    },
    available: "web",
    imageURL: `${eatNsplitmage}`,
    modalImageURL: `${eatNsplitModalImage}`,
    modalImageWidth: 906,
    modalImageHeight: 371,
    technologies: ["React", "Styled Components"],
    GitHubPagesURLTag: {
      English: "Go to the Website",
      Polish: "Przejdź do Strony",
      Spanish: "Ir al Sitio Web",
    },
    GitHubRepoURLTag: {
      English: "Go to the GitHub Repository",
      Polish: "Przejdź do Repozytorium GitHub",
      Spanish: "Ir al Repositorio de GitHub",
    },
    GitHubPagesURL: "https://boostertech.github.io/eat-n-split/",
    GitHubRepoURL: "https://github.com/BoosterTech/eat-n-split.git",
    inverted: true,
    border: true,
  },
  {
    title: {
      English: `🍕 Fast React Pizza Co. `,
      Polish: `🍕 Fast React Pizza Co.`,
      Spanish: `🍕 Fast React Pizza Co.`,
    },
    description: {
      English: `<p>Pizza ordering app built with React, Redux Toolkit, and React Router — browse the API-loaded menu, build a cart, and place orders with priority pricing and order tracking.</p>
                <ul>
                  <li><strong>Routing &amp; data</strong> — React Router loaders and actions for menu fetching and order submission</li>
                  <li><strong>State</strong> — Redux Toolkit cart with derived totals and priority pricing</li>
                  <li><strong>UI</strong> — Tailwind CSS utility styling, responsive across screen sizes</li>
                  <li><strong>Tooling</strong> — Vite build, deployed to GitHub Pages</li>
                </ul>`,
      Polish: `<p>Aplikacja do zamawiania pizzy zbudowana z React, Redux Toolkit i React Router — przeglądaj menu ładowane z API, składaj koszyk i zamawiaj z ceną priorytetową oraz śledzeniem zamówień.</p>
               <ul>
                 <li><strong>Routing i dane</strong> — loadery i akcje React Router do pobierania menu i składania zamówień</li>
                 <li><strong>Stan</strong> — koszyk w Redux Toolkit z wyliczanymi sumami i ceną priorytetową</li>
                 <li><strong>Interfejs</strong> — stylowanie utility Tailwind CSS, responsywne na różnych ekranach</li>
                 <li><strong>Narzędzia</strong> — build Vite, wdrożenie na GitHub Pages</li>
               </ul>`,
      Spanish: `<p>Aplicación de pedidos de pizza construida con React, Redux Toolkit y React Router — explora el menú cargado desde la API, arma un carrito y realiza pedidos con precio prioritario y seguimiento.</p>
                <ul>
                  <li><strong>Routing y datos</strong> — loaders y actions de React Router para obtener el menú y enviar pedidos</li>
                  <li><strong>Estado</strong> — carrito en Redux Toolkit con totales derivados y precio prioritario</li>
                  <li><strong>Interfaz</strong> — estilos utility de Tailwind CSS, responsiva en distintas pantallas</li>
                  <li><strong>Herramientas</strong> — build con Vite, desplegada en GitHub Pages</li>
                </ul>`,
    },
    available: "web & mob",
    imageURL: `${fastReactPizzaImage}`,
    modalImageURL: `${fastPizzaModalImage}`,
    modalImageWidth: 573,
    modalImageHeight: 847,
    technologies: ["React", "Redux Toolkit", "React Router", "Tailwind CSS"],
    GitHubPagesURLTag: {
      English: "Go to the Website",
      Polish: "Przejdź do Strony",
      Spanish: "Ir al Sitio Web",
    },
    GitHubRepoURLTag: {
      English: "Go to the GitHub Repository",
      Polish: "Przejdź do Repozytorium GitHub",
      Spanish: "Ir al Repositorio de GitHub",
    },
    GitHubPagesURL: "https://boostertech.github.io/Fast-Pizza-Co/",
    GitHubRepoURL: "https://github.com/BoosterTech/Fast-Pizza-Co.git",
    inverted: false,
    border: false,
  },
];

export default projects;
