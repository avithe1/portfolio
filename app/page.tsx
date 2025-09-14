import { Github, SquareArrowOutUpRight } from "lucide-react";
import { websiteData } from "./data";

export default function Home() {
  function getExpertise(key: keyof typeof websiteData.myexpertise) {
    return websiteData.myexpertise[key];
  }

  function underLineStyle() {
    return "underline underline-offset-6";
  }

  return (
    <div className="flex flex-col items-center mt-15 gap-10 p-4">
      <div className="flex w-full items-center gap-2 justify-center">
        <div>
          Hello 👋, I am{" "}
          <span className="text-3xl text-blue-400 font-bold">Avinash</span>
        </div>
        <div>
          <a target="_blank" href="https://www.github.com/avithe1">
            <Github />
          </a>
        </div>
      </div>
      <p className="w-full text-center">
        I develop frontend web applications with{" "}
        <span className={underLineStyle()}>React/NextJS</span> and{" "}
        <span className={underLineStyle()}>
          Tailwind / MaterialUI / Bootstrap CSS
        </span>
        .
      </p>
      <h2 className={`text-2xl font-bold`}>Projects</h2>
      <ul className="-mt-8">
        {websiteData.projects.map((project) => (
          <li key={project.id}>
            <a
              target="_blank"
              href={project.link}
              className="flex items-center gap-1 hover:text-blue-500"
            >
              <div>{project.title}</div>
              <div>
                <SquareArrowOutUpRight size={12} />
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Object.keys(websiteData.myexpertise).map((key, idx) => {
          return (
            <div
              className="border border-gray-800 min-w-[300px] min-h-[200px] rounded p-5 hover:border-gray-400 cursor-pointer transition-all duration-500"
              key={idx}
            >
              <h3 className="text-xl font-bold">{key.toUpperCase()}</h3>
              <ul className="p-3">
                {getExpertise(key as keyof typeof websiteData.myexpertise).map(
                  (item, idx) => (
                    <li key={idx} className="list-disc">
                      <p>{item}</p>
                    </li>
                  )
                )}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="w-full text-center"><a target="_blank" href="https://docs.google.com/document/d/10Qj-yX2ILS4x7s_v3GYov2pTdWt1tra8nXNbk2f6DzA/edit?usp=sharing">Resume</a></div>
    </div>
  );
}
