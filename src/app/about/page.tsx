export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-zinc-900 mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Olá, sou Wellington Lira, desenvolvedor de software
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ao longo da minha jornada na tecnologia, estou aprendendo a criar e
            inovar. Cada projeto é uma oportunidade de crescer, experimentar
            novas soluções e enfrentar desafios únicos! 💫
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No{" "}
              <span className="text-2xl text-blue-800 font-bold">
                {" "}
                deliramente
              </span>
              , Confira artigos publicados por mim e, mais importante, por
              grandes nomes do mercado. 🤝
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Bem-vindo! Este é o espaço onde tecnologia, crescimento pessoal e
              profissional se encontram. Aqui, você vai encontrar insights sobre
              as últimas inovações tecnológicas, dicas para aprimorar suas
              habilidades e estratégias para se tornar a melhor versão de si
              mesmo, tanto no trabalho quanto na vida pessoal. A ideia é evoluir
              sempre, explorar novos desafios e, claro, criar soluções que façam
              a diferença no seu dia a dia. Vamos juntos nessa jornada de
              aprendizado e evolução, porque o futuro já está acontecendo!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Adoro ouvir nossos leitores! seja um elogio, crítica, sugestão ou
              feedback.
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Aqui está como funcionam nossas respostas:
            </h3>

            <h4 className="text-1xl font-bold text-gray-900 dark:text-white mb-4">
              Para e-mails sobre conteúdo
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                seja elogios, críticas construtivas, mensagens de ódio (de boa
                índole), suas próprias reflexões sobre o mundo, uma piada
                engraçada, uma piada sem graça, suas metas de procrastinação ou
                qualquer outra coisa que queira compartilhar conosco. O que
                acontece aqui é o seguinte:
                <ul className="list-decimal list-inside pl-4 mt-2">
                  <li>
                    Envie-me um e-mail! Adoro receber suas mensagens, e prometo
                    uma coisa: vou ler sua mensagem, sempre. Às vezes, pode
                    demorar um pouco, mas ainda não cheguei ao ponto de arquivar
                    um e-mail sem ao menos dar uma olhada nele.
                  </li>
                  <li>
                    Você pode ou não receber uma resposta, dependendo de muitos
                    fatores.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              E-mail para contato
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:dnllira1@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-zinc-900 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-900 transition-colors no-underline"
              >
                E-mail 🤝
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
