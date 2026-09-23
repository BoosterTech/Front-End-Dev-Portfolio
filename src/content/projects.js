import currencyConverterImage from "images/projects/CurrencycalculatorProject.webp";
import eatNsplitmage from "images/projects/EatNSplitProject.webp";
import fastReactPizzaImage from "images/projects/FastPizzaProject.webp";
import movieBrowserImage from "images/projects/MoviebrowserProject.webp";
import paradiselodgeImage from "images/projects/ParadiseLodgeProject.webp";
import plasmaLibraryImage from "images/projects/PlasmaLibraryProject.webp";
import reactQuizImage from "images/projects/ReactQuizProject.webp";
import tasksListImage from "images/projects/TaskListProject.webp";
import wtmMusicAIImage from "images/projects/WTMMusicProject.webp";

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
    GitHubPagesURL: "https://wtm-music-ai-gen.vercel.app",
    GitHubRepoURL: "https://github.com/BoosterTech/WTM-Music-AI-Gen.git",
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
      English: `<p>&nbsp&nbsp The Movie Browser is an intuitive web application designed to enhance your movie-watching experience
                by allowing users to search for movies, cast, and crew members effortlessly.</p>
                <p>This four-week project was developed as the final group project during "YouCode" Front-End Development course and it was based on a professional graphic design.</p>
                 &nbspOur team of three developers collaborated to create a sleek and user-friendly interface that provides detailed information on a wide array of movies and their associated personnel. <br>
                <p>The application is designed for optimal performance on different devices and is under constant development and improvement.</p>`,
      Polish: `<p>&nbsp&nbsp Przeglądarka filmów to intuicyjna aplikacja internetowa zaprojektowana w celu usprawnienia Twojego doświadczenia z oglądaniem filmów, 
                pozwalająca użytkownikom na łatwe wyszukiwanie filmów, obsady i ekipy.</p>
               <p>Ten czterotygodniowy projekt został opracowany jako projekt końcowy podczas kursu "YouCode" z programowania front-endu i oparty był na profesjonalnym projekcie graficznym.</p>
                 Zespół trzech programistów współpracował, aby stworzyć elegancki i przyjazny interfejs użytkownika, który zapewnia szczegółowe informacje na temat szerokiej gamy filmów i związanej z nim obsady. <br>
                <p>Aplikacja jest zaprojektowana z utrzymaniem optymalnej wydajności dla różnych urządzeń i jest stale rozwijana i ulepszana.</p>
  `,
      Spanish: `<p>&nbsp&nbsp El Navegador de Películas es una aplicación web intuitiva diseñada para mejorar tu experiencia de ver películas,
                permitiendo a los usuarios buscar películas, elenco y miembros del equipo fácilmente.</p>
                <p>Este proyecto de cuatro semanas se desarrolló como el proyecto final grupal durante el curso de Desarrollo Front-End "YouCode" y se basó en un diseño gráfico profesional.</p>
                &nbspNuestro equipo de tres desarrolladores colaboró para crear una interfaz elegante y fácil de usar que proporciona información detallada sobre una amplia variedad de películas y su personal asociado. <br>
               <p>La aplicación está diseñada para un rendimiento óptimo en diferentes dispositivos y está en constante desarrollo y mejora.</p>
  `,
    },
    imageURL: `${movieBrowserImage}`,
    technologies: ["React", "Redux", "Axios", "Styled Components"],
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
      English: `<p>&nbsp&nbsp The "Tasks List" application is a robust and user-friendly task management tool designed to enhance productivity and organization. 
                This project allows users to seamlessly add tasks to a dynamic list, track their completion status, and manage them with ease.
                Key features include:</p>
                The "Tasks List" application is built with a clean, intuitive design, prioritizing user experience and productivity. 
                 Whether for personal use or team project management, this tool provides a seamless way to keep track of tasks and ensure nothing falls through the cracks.`,
      Polish: `<p>&nbsp&nbsp Aplikacja "Lista Zadań" to solidne i przyjazne użytkownikowi narzędzie do zarządzania zadaniami, zaprojektowane w celu zwiększenia produktywności i organizacji. 
                Projekt pozwala użytkownikom płynnie dodawać zadania do dynamicznej listy, śledzić ich stan wykonania i łatwo nimi zarządzać.
                </p>
                Aplikacja "Lista Zadań" została stworzona z czystym, intuicyjnym designem, priorytetowo traktującym doświadczenie użytkownika i produktywność.
                Czy to do użytku osobistego czy do zarządzania projektami zespołowymi, to narzędzie zapewnia płynny sposób śledzenia zadań i zapewnienia, że nic nie umknie uwadze.`,

      Spanish: `<p>&nbsp&nbsp La aplicación "Lista de Tareas" es una herramienta robusta y fácil de usar para la gestión de tareas, diseñada para mejorar la productividad y la organización. 
                Este proyecto permite a los usuarios agregar tareas a una lista dinámica de forma fluida, realizar un seguimiento de su estado de finalización y gestionarlas con facilidad.
                Las características clave incluyen:</p>
                La aplicación "Lista de Tareas" está construida con un diseño limpio e intuitivo, priorizando la experiencia del usuario y la productividad.
                Ya sea para uso personal o para la gestión de proyectos en equipo, esta herramienta proporciona una forma fluida de realizar un seguimiento de las tareas y garantizar que nada se escape.
  `,
    },
    imageURL: `${tasksListImage}`,
    technologies: ["React", "Redux", "LocalStorage"],
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
      English: `<p>&nbsp&nbsp This comprehensive currency converter is powered by data sourced directly from the European Central Bank.</p>
                Seamlessly integrated, it provides real-time exchange rates, ensuring accuracy and reliability in currency conversions.
                <p> Whether you're planning a trip abroad, managing international transactions, or simply curious about currency values,
                this platform empowers you to effortlessly convert any currency to another with confidence.</p> 
                With a user-friendly interface and access to a wide range of currencies, that currency converter is your go-to tool for navigating the global economy. `,
      Polish: `<p>&nbsp&nbsp Ten wszechstronny kalkulator walut korzysta z danych bezpośrednio pobieranych z Europejskiego Banku Centralnego.</p>
               Zintegrowany na zasadzie ciągłości, zapewnia aktualne kursy wymiany, gwarantując precyzję i niezawodność w przeliczeniach walutowych.
               <p>Niezależnie od tego, czy planujesz podróż za granicę, zarządzasz transakcjami międzynarodowymi, czy po prostu jesteś ciekawy wartości walut,
               ta platforma umożliwia Ci bezproblemową konwersję dowolnej waluty na inną z pełnym zaufaniem.</p> 
               Z przyjaznym interfejsem użytkownika i dostępem do szerokiej gamy walut, ten kalkulator walut jest Twoim podstawowym narzędziem do poruszania się po globalnej gospodarce.
      `,
      Spanish: `<p>&nbsp&nbsp Este completo conversor de divisas está alimentado por datos obtenidos directamente del Banco Central Europeo.</p>
               Integrado de manera transparente, proporciona tipos de cambio en tiempo real, asegurando precisión y confiabilidad en las conversiones de divisas.
               <p>Ya sea que estés planeando un viaje al extranjero, gestionando transacciones internacionales o simplemente curioso sobre los valores de las monedas,
               esta plataforma te permite convertir cualquier divisa en otra con confianza y sin esfuerzo.</p> 
               Con una interfaz de usuario fácil de usar y acceso a una amplia gama de monedas, este conversor de divisas es tu herramienta principal para navegar por la economía global.
      `,
    },
    imageURL: `${currencyConverterImage}`,
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
      English: `<p>&nbsp&nbsp Welcome to my React Quiz App! </p>
                          <p>The React Quiz App is a quiz with 30 questions focused on React concepts. Built using React and the useReducer hook, the app tracks user answers, moves through questions, and calculates the final score. The use of useReducer efficiently manages the state of the quiz, making it easy to scale.</p>
                          `,
      Polish: `<p>&nbsp&nbsp Witaj w mojej aplikacji React Quiz! </p>
                         <p>React Quiz App to quiz składający się z 30 pytań związanych z koncepcjami React. Aplikacja została stworzona przy użyciu React i hooka useReducer, który zarządza odpowiedziami użytkownika, umożliwia przechodzenie przez pytania i oblicza ostateczny wynik. Zastosowanie useReducer efektywnie zarządza stanem quizu, co sprawia, że aplikacja jest łatwa do skalowania.</p>
                        `,
      Spanish: `<p>&nbsp&nbsp ¡Bienvenido a mi React Quiz App! </p>
                          <p>React Quiz App es una aplicación de preguntas con 30 preguntas centradas en conceptos de React. Construida con React y el hook useReducer, la aplicación realiza un seguimiento de las respuestas del usuario, avanza a través de las preguntas y calcula la puntuación final. El uso de useReducer gestiona eficientemente el estado del quiz, lo que facilita su escalabilidad.</p>
                          `,
    },
    available: "web & mob",
    imageURL: `${reactQuizImage}`,
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
      English: `<p>&nbsp&nbsp Welcome to my very first web development project 🙂</p>
                <p>Marking the beginning of my journey into web development, this project is a testament to my early learning and growth. 
                <p>The Plasma Library is a simple yet informative site primarily built using HTML and CSS, with a touch of JavaScript,
                dedicated to the fascinating field of plasma physics.</p>
                It includes links to three major books available for purchase as well as an array of publications.
                <p>Despite having gained more knowledge and skills since then, I have chosen to preserve the original code of this project.
                It remains untouched and as originally written, holding sentimental value as a reminder of my early steps into the world of web application development.
                <p>Explore the Plasma Library and enjoy a glimpse into the beginnings of my coding journey🚀</p>`,
      Polish: `<p>&nbsp&nbsp Witaj w moim pierwszym projekcie związanym z tworzeniem stron internetowych 🙂</p>
               <p>Wyznacza on początek mojej drogi w rozwijaniu umiejętności związanych z tworzeniem stron internetowych. Ten projekt jest świadectwem mojego wczesnego uczenia się i rozwoju.</p>
               <p>"Biblioteka Plazma" to prosta, ale informacyjna strona internetowa, zbudowana głównie przy użyciu HTML i CSS, z odrobiną JavaScriptu,
               poświęcona fascynującej dziedzinie fizyki plazmowej.</p>
               Zawiera ona linki do trzech głównych książek dostępnych do zakupu, a także szereg publikacji.
               <p>Mimo, że zdobyłem więcej wiedzy i umiejętności od tamtego czasu, zdecydowałem się zachować oryginalny kod tego projektu.
               Pozostaje on nietknięty i zgodny z oryginalnymi założeniami, co ma dla mnie wartość sentymentalną jako przypomnienie o moich początkowych krokach w świecie tworzenia aplikacji internetowych.</p>
               <p>Zapraszam do eksploracji "Biblioteki Plazma" i cieszenia się wglądem w początki mojej przygody z kodowaniem 🚀</p>
      `,
      Spanish: `<p>&nbsp&nbsp Bienvenido a mi primer proyecto de desarrollo web 🙂</p>
                <p>Marcando el comienzo de mi viaje en el desarrollo web, este proyecto es un testimonio de mi aprendizaje y crecimiento temprano.</p>
                <p>La Biblioteca de Plasma es un sitio web simple pero informativo, construido principalmente con HTML y CSS, con un toque de JavaScript,
                dedicado al fascinante campo de la física de plasma.</p>
                Incluye enlaces a tres libros principales disponibles para su compra, así como a una variedad de publicaciones.
                <p>A pesar de haber adquirido más conocimientos y habilidades desde entonces, he elegido conservar el código original de este proyecto.
                Permanece intacto y tal como fue escrito originalmente, teniendo un valor sentimental como un recordatorio de mis primeros pasos en el mundo del desarrollo de aplicaciones web móviles.</p>
                <p>Explora la Biblioteca de Plasma y disfruta de un vistazo a los inicios de mi viaje en la programación 🚀</p>
                `,
    },
    available: "web & mob",
    imageURL: `${plasmaLibraryImage}`,
    technologies: ["React", "Redux", "Styled Components"],
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
      English: `<p>&nbsp&nbsp Welcome to Eat-N-Split! </p>
                <p>Eat-N-Split is a user-friendly web application designed to simplify the process of splitting bills among friends or group members. Whether you're dining out, sharing a meal, or participating in any group activity with shared costs, this app ensures that everyone pays their fair share with ease.</p>
                <p>The app allows users to enter the total amount of a bill, specify the number of people splitting it, and automatically calculates how much each person owes. Built using React.js for a dynamic, responsive experience and Styled Components for a sleek, customizable interface, Eat-N-Split makes managing group payments quick, hassle-free, and enjoyable.</p>
                <p>Ideal for group outings, dinners, or any situation where multiple people share expenses, Eat-N-Split eliminates the need for manual calculations and ensures fairness for everyone involved.</p>`,
      Polish: `<p>&nbsp&nbsp Witaj w Eat-N-Split! </p>
               <p>Eat-N-Split to aplikacja internetowa zaprojektowana w celu uproszczenia procesu dzielenia rachunków wśród przyjaciół lub członków grupy. Niezależnie od tego, czy jesz na mieście, dzielisz posiłek, czy bierzesz udział w grupowej aktywności, aplikacja zapewnia, że każdy płaci swoją sprawiedliwą część.</p>
               <p>Aplikacja umożliwia użytkownikom wpisanie całkowitej kwoty rachunku, określenie liczby osób dzielących rachunek, a następnie automatycznie oblicza, ile każda osoba ma do zapłacenia. Zbudowana przy użyciu React.js dla dynamicznego, responsywnego doświadczenia i Styled Components, aby stworzyć elegancki, łatwy do dostosowania interfejs, Eat-N-Split sprawia, że zarządzanie płatnościami grupowymi jest szybkie, bezproblemowe i przyjemne.</p>
               <p>Idealna na wspólne wyjścia, kolacje lub wszelkie sytuacje, w których kilka osób dzieli wydatki, Eat-N-Split eliminuje potrzebę ręcznych obliczeń i zapewnia sprawiedliwość dla wszystkich zaangażowanych.</p>`,
      Spanish: `<p>&nbsp&nbsp ¡Bienvenido a Eat-N-Split! </p>
                <p>Eat-N-Split es una aplicación web fácil de usar diseñada para simplificar el proceso de dividir las cuentas entre amigos o miembros de un grupo. Ya sea que estés comiendo fuera, compartiendo una comida o participando en cualquier actividad grupal con gastos compartidos, esta aplicación asegura que todos paguen su parte justa con facilidad.</p>
                <p>La aplicación permite a los usuarios ingresar el monto total de la cuenta, especificar la cantidad de personas que la dividirán y automáticamente calcula cuánto debe pagar cada persona. Construido con React.js para una experiencia dinámica y receptiva y Styled Components para una interfaz elegante y personalizable, Eat-N-Split hace que administrar pagos grupales sea rápido, sin complicaciones y agradable.</p>
                <p>Ideal para salidas en grupo, cenas o cualquier situación en la que varias personas compartan gastos, Eat-N-Split elimina la necesidad de cálculos manuales y asegura que todos paguen de manera justa.</p>`,
    },
    available: "web",
    imageURL: `${eatNsplitmage}`,
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
      English: `<p>&nbsp&nbsp Welcome to The Pizza Order App! </p>
                <p>The Pizza Order App is a web application that allows users to order their favorite pizzas quickly and efficiently. Users can browse a selection of pizzas and proceed to checkout seamlessly.</p>
                <p>Built with a focus on user experience, the app provides a smooth and intuitive interface for placing orders. Craving a classic Margherita or others, The Pizza App ensures a hassle-free ordering process.</p>
                <p>Ideal for pizza lovers who want a convenient way to satisfy their cravings, this app makes ordering pizza as easy as a few clicks.</p>`,
      Polish: `<p>&nbsp&nbsp Witaj w The Pizza Order App! </p>
               <p>The Pizza Order App to aplikacja internetowa, która umożliwia użytkownikom szybkie i efektywne zamawianie swoich ulubionych pizz. Użytkownicy mogą przeglądać dostępne pizze i przechodzić do płatności bezproblemowo.</p>
               <p>Zbudowana z myślą o wygodzie użytkownika, aplikacja oferuje płynny i intuicyjny interfejs do składania zamówień. Marzysz o klasycznej Marghericie lub innych? The Pizza App zapewnia bezproblemowy proces zamawiania.</p>
               <p>Idealna dla miłośników pizzy, którzy chcą wygodnie zaspokoić swoje zachcianki, ta aplikacja sprawia, że zamawianie pizzy jest tak proste, jak kilka kliknięć.</p>`,
      Spanish: `<p>&nbsp&nbsp ¡Bienvenido a The Pizza Order App! </p>
                <p>The Pizza Order App es una aplicación web que permite a los usuarios pedir sus pizzas favoritas de manera rápida y eficiente. Los usuarios pueden explorar una selección de pizzas y proceder al pago sin problemas.</p>
                <p>Diseñada con un enfoque en la experiencia del usuario, la aplicación ofrece una interfaz fluida e intuitiva para realizar pedidos. ¿Antojo de una clásica Margarita u otras? The Pizza App garantiza un proceso de pedido sin complicaciones.</p>
                <p>Ideal para los amantes de la pizza que buscan una forma conveniente de satisfacer sus antojos, esta aplicación hace que pedir pizza sea tan fácil como unos pocos clics.</p>`,
    },
    available: "web & mob",
    imageURL: `${fastReactPizzaImage}`,
    technologies: ["React", "Redux Toolkit", "Tailwind CSS"],
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
