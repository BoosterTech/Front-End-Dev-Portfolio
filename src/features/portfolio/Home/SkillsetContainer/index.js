import {
  SkillsetWrapper,
  ListContainer,
  ListItem,
  SkillsetHeader,
  Tooltip,
} from "./styled";
import { skillsets, toLearn } from "./skillsets";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../../Redux/languageSlice";

// Example skill descriptions (expand as needed)
const skillDescriptions = {
  "HTML - Semantic & accessible":
    "Write HTML that is both semantic and accessible for all users.",
  "Responsive Web design":
    "Create layouts that adapt to any device or screen size.",
  Teamwork: "Collaborate effectively with other developers and designers.",
  Markdown: "Use Markdown for documentation and content formatting.",
  Immutability: "Write code that avoids unwanted mutations for reliability.",
  "CSS BEM convention":
    "Organize CSS using the Block-Element-Modifier convention.",
  "CSS Grid": "Build complex layouts with CSS Grid.",
  "CSS Flexbox": "Align and distribute space with Flexbox.",
  "CSS: Animations/Keyframes": "Create smooth animations using CSS keyframes.",
  "React.js": "Build interactive UIs with React.",
  "React Router": "Handle navigation in React apps.",
  "Redux (Toolkit)": "Manage state efficiently with Redux Toolkit.",
  "React Hooks": "Use hooks for state and lifecycle in React.",
  "React Query": "Fetch, cache, and update data in React apps.",
  "React Suspense": "Handle async loading in React with Suspense.",
  "Styled-Components": "Style React components using CSS-in-JS.",
  "Error handling": "Catch and handle errors gracefully.",
  "Working with API (fetch, axios)":
    "Communicate with APIs using fetch and axios.",
  "JavaScript ES6+": "Write modern JavaScript using ES6+ features.",
  "Promises, Async/Await": "Handle async code with Promises and async/await.",
  "GitHub Pull Requests & Review": "Collaborate and review code on GitHub.",
  "GitHub Team Collaboration": "Work together using GitHub tools.",
  Trello: "Organize tasks and projects with Trello.",
  Figma: "Design and prototype with Figma.",
  Scrum: "Work in agile teams using Scrum methodology.",
  NPM: "Manage packages with NPM.",
  Git: "Version control your code with Git.",
  "Next.js App Router": "Route pages in Next.js apps.",
  "Next.js Static Generation & Server-Side Rendering":
    "Optimize performance and SEO with Next.js.",
  "Next.js API Routes": "Create backend endpoints in Next.js.",
  "React Context API": "Share state across React components.",
  TypeScript: "Write safer code with TypeScript.",
  "React DevTools": "Debug React apps with DevTools.",
  "CSS-in-JS": "Style components using CSS-in-JS libraries.",
  "Vercel Deployment": "Deploy apps easily with Vercel.",
  Supabase: "Use Supabase for backend and auth.",
  "Tailwind CSS": "Style apps quickly with Tailwind CSS.",
  "CI/CD for React Apps": "Automate builds and deployments.",
  "JWT Authentication": "Secure apps with JWT authentication.",
  "OAuth2 Integration": "Integrate OAuth2 for secure login.",
};
// Removed duplicate imports

export const SkillsetList = ({ skills }) => {
  const language = useSelector(selectLanguage);

  return (
    <ListContainer>
      {skills[language].map((skill, index) => (
        <div
          style={{ position: "relative", display: "inline-block" }}
          key={index}
        >
          <ListItem
            onMouseEnter={(e) => {
              const tooltip = e.currentTarget.querySelector(".tooltip");
              if (tooltip) tooltip.style.opacity = 1;
            }}
            onMouseLeave={(e) => {
              const tooltip = e.currentTarget.querySelector(".tooltip");
              if (tooltip) tooltip.style.opacity = 0;
            }}
          >
            {skill}
            <Tooltip className="tooltip">
              {skillDescriptions[skill] || "No description available."}
            </Tooltip>
          </ListItem>
        </div>
      ))}
    </ListContainer>
  );
};

export const SkillsetContainer = () => {
  const theme = useTheme();
  const language = useSelector(selectLanguage);

  return (
    <SkillsetWrapper>
      <SkillsetHeader>{theme[language].home.skillsetHeader} 🛠️</SkillsetHeader>
      <SkillsetList skills={skillsets} />
      <SkillsetHeader>
        {theme[language].home.learnNextHeader} 🚀{" "}
      </SkillsetHeader>
      <SkillsetList skills={toLearn} />
    </SkillsetWrapper>
  );
};
