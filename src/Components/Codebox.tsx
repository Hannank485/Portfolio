import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { useEffect, useState } from "react";

function Codebox() {
  hljs.registerLanguage("javascript", javascript);
  const text = `const developer = {
  name: "Abdul Hannan Khan",
  title: "Front-End Developer",
  focus: "React & UI Engineering",
  skills: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Motion"
  ],
  likes: [
    "Coffee that's stronger than my WiFi",
    "Clean layouts",
    "Well-structured UI"
  ],
  availability: "Open to opportunities"
};`;

  const [typed, setTyped] = useState<string>("");
  useEffect(() => {
    let i = 0;
    let Interval: ReturnType<typeof setInterval> | null = null;
    const Timeout = setTimeout(() => {
      const Interval = setInterval(() => {
        setTyped(text.slice(0, i + 1));
        i++;

        if (i >= text.length) {
          clearInterval(Interval);
        }
      }, 20);
    }, 2500);

    return () => {
      clearTimeout(Timeout);
      if (Interval) clearInterval(Interval);
    };
  }, [text]);
  const lines = typed.split("\n");

  const highlightedCode = hljs.highlight(typed, {
    language: "javascript",
  }).value;
  return (
    <>
      <div className="border-border border-b-2 py-3">
        <div className="flex gap-2 items-center">
          <div className="rounded-full bg-red-600 w-3  h-3"></div>
          <div className="rounded-full bg-yellow-300 w-3  h-3"></div>
          <div className="rounded-full bg-green-600 w-3  h-3"></div>
          <p className="text-sm ml-2 text-muted">Portfolio.jsx</p>
        </div>
      </div>
      <div className="flex font-mono text-xs md:text-sm  leading-7 items-center">
        {/* Line numbers */}
        <div className="select-none pr-4 text-right text-slate-400">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* Code */}
        <pre className="whitespace-pre ">
          <code
            className=""
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
    </>
  );
}

export default Codebox;
