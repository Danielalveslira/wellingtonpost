export default function AboutPage() {
  return (
    <div className="dark:bg-zinc-900 mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Perguntas que você talvez nem tenha feito (mas a gente responde
            mesmo assim)
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Esse site é um blog? Ou é um site de verdade?
            </h2>
            <p>
              Boa pergunta. A resposta é sim. Ou não. Enfim, depende de como
              você vende ele pros outros. Se você falar “olha esse blog”, parece
              que é só um dev solitário escrevendo entre um café e um burnout.
              Mas se você disser “dá uma olhada nesse site”, soa mais como algo
              sério, tipo: “nossa, será que tem uma equipe por trás?”. Não tem.
              Mas finge que tem. Ajuda.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Quem escreve isso aqui?
            </h2>
            <p>
              Alguém com teclado, opinião e tempo demais nas mãos. Ou de menos.
              A gente ainda tá decidindo.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Mas esse site é sobre o quê exatamente?
            </h2>
            <p>
              Tecnologia, sociedade, ideias boas, questionamentos incômodos, e
              umas reflexões que talvez façam sentido. Às vezes até tudo isso ao
              mesmo tempo. Prometemos tentar não ser chatos.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Mais alguma coisa?
            </h2>
            <p>
              Não. Mas se você quiser continuar aqui lendo por mais tempo, não
              vamos te impedir. Só não reclama depois que perdeu a hora.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Tá bom, então fui.
            </h2>
            <p>
              Vai lá. Só não esquece de voltar, ou compartilhar o site
              &#40;lembra? site&#41;.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
