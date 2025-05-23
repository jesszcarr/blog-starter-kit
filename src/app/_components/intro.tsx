import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <>
      <section className="flex-col md:flex-row flex items-start md:items-end md:justify-between mt-16 mb-4 md:mb-2">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Where Are We?
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          A Weekly Conversation in AI, Society, Energy and Philosophy.
        </h4>
      </section>

      <p className="text-lg text-gray-900 dark:text-gray-300 mt-4 mb-4">
      {/*I decided to create this blog because there are a lot of topics that I would like to write about, in a slightly more formal setting, to better articulate my thoughts and more importantly, my queries and curiosities about these topics. I work in the field of AI, ML and technology and there are many things about this field that I would like to learn about, as even in a somewhat general role, I don’t have the time and space to explore all of them in my job or studies. I think a lot about how our society currently is, and how we can improve it, and I would like to explore rigorously, statistically and philosophically, where we are and where we can go. I want to go through solutions and problems. I am fascinated by energy, as the core of what makes our society function - agricultural prices are defined by energy markets, similarly with manufacturing, technology, if we cannot solve our technical and social problems with energy, we face a much darker future. This is a place for me to explore subjects I want to learn more about, and reflect on the world around me. I could have kept this private, but I think writing to an imaginary audience enforces a level of rigour that is otherwise hard to motivate. I hope that some of my writings may even help other people in their contemplations and curiosities about these topics. I hope you enjoy this journey as much as I am. */}
</p>
    </>
  );
}