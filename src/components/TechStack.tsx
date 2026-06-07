export default function TechStack() {
  const stack = [
    { category: "Backend", techs: ["PHP & Symfony", "Python & Django"] },
    { category: "Frontend", techs: ["Vue.js", "Next.js", "TypeScript"] },
    { category: "CMS", techs: ["WordPress"] },
    { category: "Data", techs: ["MySQL & ORM"] },
    { category: "Tools", techs: ["Git & GitHub"] },
  ];

  return (
    <section className="py-20 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10">
          <h2 className="text-sm text-zinc-400 uppercase tracking-widest font-semibold mb-2">Tecnologías</h2>
          <div className="w-12 h-1 bg-sky-500"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stack.map((item, index) => (
            <div key={index} className="bg-[#0a0a0a] p-6 rounded-lg border border-zinc-800 hover:border-zinc-600 transition-colors">
              <h3 className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-4">{item.category}</h3>
              <div className="flex flex-wrap gap-2">
                {item.techs.map((tech) => (
                  <span key={tech} className="bg-zinc-900 text-zinc-200 text-sm px-3 py-1 rounded border border-zinc-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}