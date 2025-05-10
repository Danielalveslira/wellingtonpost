export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-zinc-900 mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Termos de Uso
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ao acessar e utilizar o deLiraMente você está de acordo com os
            seguintes termos:
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              deLiraMente
            </h2>
            <ol className="list-decimal list-inside">
              <li>
                O deLiraMente existe com o objetivo de oferecer conteúdos de
                valor real,
                <b>textos que informam, inspiram ou provocam reflexão</b>.
              </li>
              <li>
                Consideramos “conteúdo de valor” qualquer texto que traga algum
                tipo de contribuição útil, seja em forma de informação,
                experiência, análise ou visão pessoal.
              </li>
              <li>
                Damos prioridade à qualidade e não à quantidade. O objetivo é
                simples:
                <strong>que cada leitura aqui faça valer seu tempo</strong>.
              </li>
              <li>
                Não usamos práticas abusivas de marketing, anúncios ocultos ou
                manipulação de engajamento. Aqui, você navega com tranquilidade
                e clareza.
              </li>
              <li>
                O deLiraMente nunca venderá seus dados e nunca os compartilhará
                com terceiros.
              </li>
              <li>
                Coletamos apenas o mínimo necessário para que o site funcione.
                <b>
                  Quanto menos dados sobre você tivermos, melhor para nós dois
                </b>
                .
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Usuário
            </h2>

            <ol className="list-decimal list-inside">
              <li>
                Ao navegar, comentar ou colaborar, você está entrando em um
                espaço que valoriza o bom senso, a empatia e o diálogo.
              </li>
              <li>
                Comentários ou interações que desrespeitem outras pessoas, que
                sejam agressivos, irônicos de forma destrutiva ou ofensivos,
                poderão ser removidos.
              </li>
              <li>
                Manipulação de interações, spam, uso de bots ou qualquer forma
                de interferência artificial não são permitidos.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Direitos Autorais e Propriedade Intelectual
            </h2>

            <ol className="list-decimal list-inside">
              <li>
                Os autores que publicam no deLiraMente, sejam eles o titular do
                blog ou colaboradores convidados,
                <b>
                  mantêm os direitos autorais sobre seus textos e são
                  responsáveis pelo conteúdo que compartilham.
                </b>
              </li>
              <li>
                Ao submeter qualquer material para publicação, o autor declara
                possuir os direitos sobre o conteúdo ou garantir que seu uso
                está de acordo com exceções legais, como o &quot;uso justo&quot;
                &#40;Fair Use&#41; previsto na legislação aplicável.
              </li>
              <li>
                O domínio <b>deLiraMente.com.br</b> e a identidade visual do
                blog são propriedades intelectuais do responsável pelo site.
              </li>
              <li>
                A estrutura técnica utilizada para hospedar e manter o blog pode
                incluir recursos de código aberto, respeitando sempre as
                licenças dos projetos utilizados.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Alterações nos Termos de Uso
            </h2>
            <p>
              Os termos de uso do deLiraMente podem ser atualizados sempre que
              necessário. Quando isso acontecer,
              <b>
                informaremos diretamente aqui no blog, de forma clara e em
                linguagem simples, explicando o que mudou e por quê.
              </b>{" "}
              Nosso compromisso é garantir que você sempre saiba exatamente onde
              está pisando.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Histórico de Alterações
            </h2>
            <ul className="list-disc list-inside">
              <li>
                2025-05-10 – Criação deste documento e publicação da versão
                inicial dos Termos de Uso.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
