export default function ProfilePage() {
  return (
    <div className="dark:bg-zinc-900 min-h-screen pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CABEÇALHO DO PERFIL*/}
        <header className="flex flex-col items-center text-center mb-24 pt-10">
          {/* FOTO REDONDA NO MEIO COM BOLINHA DE STATUS */}
          {/* Adicionamos a classe 'group' aqui para que o tooltip funcione ao passar o mouse na área da foto */}
          <div className="relative mb-8 group inline-block">
            <img
              src="/img/profile.png"
              alt="Foto de Perfil de Wellington Daniel"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-zinc-800 shadow-xl object-cover ring-1 ring-zinc-200 dark:ring-zinc-700"
            />

            {/* CONTAINER DA BOLINHA DE STATUS */}
            {/* (h-5 w-5 com border-2) */}
            <div className="absolute bottom-1 right-1 flex h-5 w-5">
              {/* Camada que faz o efeito de "pulso" / "brilho" */}
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              {/* Esta é a bolinha sólida que fica no centro */}
              <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white dark:border-zinc-900"></span>
            </div>

            {/* Posicionado no topo, centralizado horizontalmente em relação à foto */}
            <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none px-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg shadow-xl w-max max-w-[260px] sm:max-w-xs text-center translate-y-2 group-hover:translate-y-0 z-10">
              Transformando café em código neste exato momento... ☕
              {/* Triângulozinho apontando para baixo */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 dark:bg-white rotate-45"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-3 cursor-default">
            Wellington Daniel
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl font-light">
            Desenvolvedor Full Stack
          </p>
        </header>

        {/* CORPO DO PERFIL*/}
        <div className="space-y-16">
          {/* Seção: Sobre Mim */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-500 pl-4">
              Sobre mim
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
              1 ano de experiência como desenvolvedor, o suficiente pra já saber
              que 1 ano em programação, é... pouco. 🚶‍♂️
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
              Construo sites responsivos, com SEO decente e funcionalidade de
              verdade em JS! não só botão bonito. Sou apaixonado por tecnologia.
              Gosto tanto desse ambiente que espero que quem trabalhe comigo
              também goste! porque, sendo direto: não é fácil. 🤝
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
              Programação é boa exatamente porque é difícil. Se fosse simples,
              não pagava bem e não filtrava ninguém. Como já disseram vários
              profissionais experientes da área: “aprender a programar é fácil,
              difícil é se tornar bom”.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
              Entenda melhor o que faço, é só rolar a tela pra baixo.
            </p>
          </section>

          {/* Seção: Habilidades */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-500 pl-4">
              O que eu estudo (Tech Stack)
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Python",
                "Figma",
                "Git",
                "Rest API",
                "MongoDB",
                "UI Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm border border-zinc-200 dark:border-zinc-700 transition hover:bg-zinc-200 dark:hover:bg-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Seção: Contato */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-500 pl-4">
              Vamos conversar?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Me encontre nas redes ou me mande uma mensagem:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-lg font-semibold">
              <a
                href="https://linkedin.com/in/dnllira"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline underline-offset-4"
              >
                LinkedIn 👨‍🚀
              </a>
              <a
                href="https://github.com/Danielalveslira"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-900 dark:text-white hover:underline underline-offset-4"
              >
                GitHub 👨‍💻
              </a>
              <a
                href="mailto:dnllira1@gmail.com"
                className="flex items-center gap-2 text-rose-600 dark:text-rose-400 hover:underline underline-offset-4"
              >
                E-mail 👋
              </a>
            </div>

            <div className="pt-2 sm:pt-0 sm:ml-auto">
              <a
                href="/curriculo_wellington_daniel.pdf" // Nome do seu arquivo lá na pasta public
                download="Wellington_Daniel_Curriculo.pdf" // Nome que o arquivo terá quando a pessoa baixar
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold rounded-full shadow-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-all active:scale-95"
              >
                {/* Ícone de Download em SVG */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Baixar CV
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
