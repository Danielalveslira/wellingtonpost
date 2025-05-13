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
                O deLiraMente existe pra publicar conteúdo que vale o seu tempo.
                Se não informar, inspirar ou pelo menos cutucar sua cabeça, não
                entra.
              </li>
              <li>
                “Conteúdo de valor” aqui significa qualquer coisa que agregue
                algo, informação, experiência, análise, visão pessoal. Ou tudo
                junto.
              </li>
              <li>
                Quantidade? Não é a meta. Qualidade é. Um texto bom &#62; cinco
                medianos.
              </li>
              <li>
                Nada de anúncios espertinhos, pop-ups invasivos ou “clique aqui
                pra saber o que aconteceu depois”. Navegação limpa. Sem truques.
              </li>
              <li>
                Seus dados? Não queremos. Não vendemos, não trocamos, não
                compartilhamos.
              </li>
              <li>
                Coletamos o mínimo necessário pra manter o site funcionando.
                Quanto menos a gente souber sobre você, melhor pra todo mundo.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre você &#40;o usuário&#41;
            </h2>

            <ol className="list-decimal list-inside">
              <li>
                Ao comentar ou interagir, espera-se o mínimo: bom senso,
                respeito e um cérebro funcionando.
              </li>
              <li>
                Comentários tóxicos, agressivos ou ironias destrutivas vão
                direto pro limbo.
              </li>
              <li>
                Spam, bots ou qualquer tentativa de manipular o sistema? Também
                não. Vai ser limado.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Direitos Autorais & Coisas Sérias
            </h2>

            <ol className="list-decimal list-inside">
              <li>
                Todo mundo que publica aqui &#40;incluindo quem vos escreve&#41;
                mantém os direitos sobre seus textos. Publicou? É seu. Mas
                também é sua responsabilidade.
              </li>
              <li>
                Se você enviar algo pra publicação, partimos do princípio de que
                você tem o direito de usar aquilo. Se não tiver, não envie.
              </li>
              <li>
                O domínio, identidade visual e toda a carinha do deLiraMente são
                propriedade do responsável pelo site. Não copie. Cria a sua.
              </li>
              <li>
                A infraestrutura pode usar código aberto, sempre respeitando as
                licenças dos projetos. Open source é amor.
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
