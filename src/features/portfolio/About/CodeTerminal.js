import {
  CodeTerminalWindow,
  CodeTerminalHeader,
  CodeDots,
  CodeDot,
  CodeTerminalTitle,
  CodeTerminalBody,
} from "./styled";

const code = `<span class="comment">// Journey: From Electronics to Full-Stack</span>
<span class="keyword">class</span> <span class="type">Derek</span> {
  <span class="comment">// Foundation</span>
  <span class="property">foundation</span>: <span class="type">string</span>[] = [
    <span class="string">'Electronics'</span>, <span class="string">'C++'</span>, <span class="string">'OpenGL'</span>,
    <span class="string">'Embedded Systems'</span>
  ];

  <span class="comment">// Current Stack</span>
  <span class="property">stack</span>: <span class="type">string</span>[] = [
    <span class="string">'React'</span>, <span class="string">'Next.js'</span>, <span class="string">'TypeScript'</span>,
    <span class="string">'Supabase'</span>, <span class="string">'Cloud Technologies'</span>
  ];

  <span class="comment">// Philosophy</span>
  <span class="property">philosophy</span> = {
    <span class="variable">fullStack</span>: <span class="boolean">true</span>,
    <span class="variable">aiPartner</span>: <span class="boolean">true</span>,
    <span class="variable">qualityFocused</span>: <span class="boolean">true</span>
  };
}`;

const CodeTerminal = () => (
  <CodeTerminalWindow>
    <CodeTerminalHeader>
      <CodeDots>
        <CodeDot />
        <CodeDot />
        <CodeDot />
      </CodeDots>
      <CodeTerminalTitle>
        <span>{" >"}</span>
        Code Terminal
      </CodeTerminalTitle>
    </CodeTerminalHeader>
    <CodeTerminalBody dangerouslySetInnerHTML={{ __html: code }} />
  </CodeTerminalWindow>
);

export default CodeTerminal;
