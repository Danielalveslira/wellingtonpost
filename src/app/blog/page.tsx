import { getSortedPostsData, formatTopicDisplay } from "@/lib/posts";
import Link from "next/link";
import TopicTags from "@/components/TopicTags";

export default function BlogPage() {
  const posts = getSortedPostsData();

  // Coletando todas as tags únicas
  const allTopics = Array.from(
    new Set(posts.flatMap((post) => post.topics))
  ).sort();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Seção dedicada às etiquetas */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Explore os Tópicos
          </h2>
          <div className="flex flex-wrap gap-4">
            {allTopics.map((topic) => (
              <Link
                key={topic}
                href={`/topics/${topic}`}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                {topic.charAt(0).toUpperCase() +
                  topic.slice(1).replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </section>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => {
            const { visibleTopics, hiddenTopics, hasHidden } =
              formatTopicDisplay(post.topics);

            return (
              <article
                key={post.id}
                className="flex flex-col bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <TopicTags
                    visibleTopics={visibleTopics}
                    hiddenTopics={hiddenTopics}
                    hasHidden={hasHidden}
                  />
                  <Link href={`/posts/${post.id}`}>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.description}
                  </p>
                  <Link
                    href={`/posts/${post.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    Ler mais
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
