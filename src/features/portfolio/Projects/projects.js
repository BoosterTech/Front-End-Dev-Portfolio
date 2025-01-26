import movieBrowserImage from "../../../images/movieBrowserProject.png";
import tasksListImage from "../../../images/tasksListProject.png";
import currencyConverterImage from "../../../images/currencyConverterProject.png";
import plasmaLibraryImage from "../../../images/plasmaLibraryProject.png";
import reactQuizImage from "../../../images/react-quiz-project.png";
import eatNsplitmage from "../../../images/eat-n-split-project.png";

const projects = [
  {
    title: {
      English: `🎥 Movies Browser `,
      Polish: `🎥 Przeglądarka Filmów `,
      Spanish: `🎥 Navegador de Películas `,
    },
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
  },
  {
    title: {
      English: `💱Currency Converter`,
      Polish: `💱Kalkulator Walut`,
      Spanish: `💱Conversor de Divisas`,
    },
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
    imageURL: `${reactQuizImage}`,
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
    inverted: false,
    border: false,
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
    imageURL: `${plasmaLibraryImage}`,
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
    inverted: true,
    border: false,
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
    imageURL: `${eatNsplitmage}`,
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
    inverted: false,
    border: false,
  },
];

export default projects;
