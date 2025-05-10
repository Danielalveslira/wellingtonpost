import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wellington Lira - Software Developer",
  description: "Explorador de Ideias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <nav className="sticky top-0 bg-white dark:bg-zinc-900 shadow-sm z-50">
            {" "}
            {/* Background color header */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Mobile Header (Two Lines) */}
              <div className="md:hidden">
                {/* First Line: Logo, Title, and Hamburger */}
                <div className="flex items-center justify-between h-20">
                  <Link href="/" className="flex items-center space-x-3">
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                        <h1>
                          <span className="text-2xl text-zinc-800 font-bold dark:text-zinc-100">
                            deliramente
                          </span>
                        </h1>
                      </span>
                      <span className="text-sm text-gray-900 dark:text-gray-300">
                        Explorador de Ideias.
                      </span>
                    </div>
                  </Link>

                  <label
                    htmlFor="mobile-menu"
                    className="flex items-center p-2 rounded-md text-gray-400 hover:text-gray-500  cursor-pointer space-x-2"
                  >
                    <span className="sr-only">Open menu</span>

                    <ThemeToggle />

                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </label>
                </div>

                {/* Second Line: Social Links / No links */}
                {/* <div className="flex justify-end items-center space-x-4 py-3 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href="https://github.com/Danielalveslira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dnllira/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5C4.98 4.88071 3.88071 6 2.5 6C1.11929 6 0 4.88071 0 3.5C0 2.11929 1.11929 1 2.5 1C3.88071 1 4.98 2.11929 4.98 3.5ZM0.679993 7.56006H4.29V24H0.679993V7.56006ZM8.91003 7.56006H12.42V10.08H12.49C13.09 8.74 14.9 7.35 17.33 7.35C22.01 7.35 23 9.89 23 14.14V24H19.39V14.89C19.39 12.47 18.78 11.03 16.99 11.03C15.23 11.03 14.4 12.28 14.4 14.89V24H10.79V7.56006H14.32V10.44H14.39C14.99 9.04998 16.34 7.35 18.97 7.35C22.6 7.35 23 9.89 23 14.14V24H19.39V14.89C19.39 12.47 18.78 11.03 16.99 11.03C15.23 11.03 14.4 12.28 14.4 14.89V24H10.79V7.56006Z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">YouTube</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div> */}

                <input
                  type="checkbox"
                  id="mobile-menu"
                  className="hidden peer"
                />

                {/* Mobile Menu */}
                <div className="hidden peer-checked:block border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-row flex-wrap space-x-4 px-2 py-4">
                    <Link
                      href="/about"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 100 100"
                      >
                        <path
                          d="M9.5,98c-1.989,0-3.841-0.892-5.082-2.447c-1.239-1.551-1.698-3.555-1.257-5.494 c0.038-0.166,3.836-16.838,8.592-33.358c4.404-15.3,8.134-25.433,11.401-30.979C25.931,21.01,28.726,19,32.5,19 c1.164,0,2.282,0.197,3.351,0.589C40.591,5.979,44.687,3,49.5,3c4.897,0,9.505,2.354,18.83,29.481C70.042,30.969,72.068,30,74.5,30 c7.751,0,12.944,8.766,19.161,32.343c3.628,13.763,6.21,27.86,6.235,27.999c0.345,1.897-0.167,3.839-1.404,5.322 C97.252,97.148,95.434,98,93.5,98H9.5z"
                          opacity=".35"
                        ></path>
                        <path
                          fill="#f2f2f2"
                          d="M7.5,96c-1.989,0-3.841-0.892-5.082-2.447c-1.239-1.551-1.698-3.555-1.257-5.494 c0.038-0.166,3.836-16.838,8.592-33.358c4.404-15.3,8.134-25.433,11.401-30.979C23.931,19.01,26.726,17,30.5,17 c1.164,0,2.282,0.197,3.351,0.589C38.591,3.979,42.687,1,47.5,1c4.897,0,9.505,2.354,18.83,29.481C68.042,28.969,70.068,28,72.5,28 c7.751,0,12.944,8.766,19.161,32.343c3.628,13.763,6.21,27.86,6.235,27.999c0.345,1.897-0.167,3.839-1.404,5.322 C95.252,95.148,93.434,96,91.5,96H7.5z"
                        ></path>
                        <path
                          fill="#4ED7F1"
                          d="M35,36c0,0-1.566-3.973-1-6c0.249-0.892,2.434,0.756,2.771-0.375C39.233,21.362,43.855,8,48,8 c3.426,0,11.984,23.373,17.055,38.158c0.339,0.99,2.64-0.062,2.945,0.842c1.806,5.338,1,11,1,11L57,72L30,59L35,36z"
                        ></path>
                        <path
                          fill="#2f8ffb"
                          d="M9.375,88c1.09-4.799,2.875-16.544,6.625-30c8.883-31.873,14.095-32.958,14.505-33 C37,25,43.467,56.999,43.467,56.999l0.033,0c0,0,2.5-10,7-10s8.986,18,8.986,18s0.009,0,0.014,0c0.692,0,8.5-29,12.916-28.996 C78,36,86,62,89.616,88H9.375z"
                        ></path>
                        <path
                          fill="none"
                          stroke="#40396e"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeWidth="3"
                          d="M72.5,34.5c-2.643,0-5.48,5.63-7.828,11.928C60.878,34.145,52.117,7.5,47.5,7.5c-3.876,0-8.166,13.347-10.72,22.802 c-1.794-3.969-3.903-6.802-6.28-6.802c-8,0-23,66-23,66h84C91.5,89.5,81.5,34.5,72.5,34.5z"
                        ></path>
                        <path
                          fill="#40396e"
                          d="M66,88H32c0-13.255,7.611-22,17-22S66,74.745,66,88z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Desktop Header */}
              <div className="hidden md:flex items-center justify-between h-20">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <span className="text-2xl text-zinc-800 font-bold dark:text-zinc-100">
                      deliramente
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Explorador de Ideias.
                    </span>
                  </div>
                </Link>

                <div className="flex items-center space-x-8">
                  <Link
                    href="/about"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M9.5,98c-1.989,0-3.841-0.892-5.082-2.447c-1.239-1.551-1.698-3.555-1.257-5.494 c0.038-0.166,3.836-16.838,8.592-33.358c4.404-15.3,8.134-25.433,11.401-30.979C25.931,21.01,28.726,19,32.5,19 c1.164,0,2.282,0.197,3.351,0.589C40.591,5.979,44.687,3,49.5,3c4.897,0,9.505,2.354,18.83,29.481C70.042,30.969,72.068,30,74.5,30 c7.751,0,12.944,8.766,19.161,32.343c3.628,13.763,6.21,27.86,6.235,27.999c0.345,1.897-0.167,3.839-1.404,5.322 C97.252,97.148,95.434,98,93.5,98H9.5z"
                        opacity=".35"
                      ></path>
                      <path
                        fill="#f2f2f2"
                        d="M7.5,96c-1.989,0-3.841-0.892-5.082-2.447c-1.239-1.551-1.698-3.555-1.257-5.494 c0.038-0.166,3.836-16.838,8.592-33.358c4.404-15.3,8.134-25.433,11.401-30.979C23.931,19.01,26.726,17,30.5,17 c1.164,0,2.282,0.197,3.351,0.589C38.591,3.979,42.687,1,47.5,1c4.897,0,9.505,2.354,18.83,29.481C68.042,28.969,70.068,28,72.5,28 c7.751,0,12.944,8.766,19.161,32.343c3.628,13.763,6.21,27.86,6.235,27.999c0.345,1.897-0.167,3.839-1.404,5.322 C95.252,95.148,93.434,96,91.5,96H7.5z"
                      ></path>
                      <path
                        fill="#4ED7F1"
                        d="M35,36c0,0-1.566-3.973-1-6c0.249-0.892,2.434,0.756,2.771-0.375C39.233,21.362,43.855,8,48,8 c3.426,0,11.984,23.373,17.055,38.158c0.339,0.99,2.64-0.062,2.945,0.842c1.806,5.338,1,11,1,11L57,72L30,59L35,36z"
                      ></path>
                      <path
                        fill="#2f8ffb"
                        d="M9.375,88c1.09-4.799,2.875-16.544,6.625-30c8.883-31.873,14.095-32.958,14.505-33 C37,25,43.467,56.999,43.467,56.999l0.033,0c0,0,2.5-10,7-10s8.986,18,8.986,18s0.009,0,0.014,0c0.692,0,8.5-29,12.916-28.996 C78,36,86,62,89.616,88H9.375z"
                      ></path>
                      <path
                        fill="none"
                        stroke="#40396e"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="3"
                        d="M72.5,34.5c-2.643,0-5.48,5.63-7.828,11.928C60.878,34.145,52.117,7.5,47.5,7.5c-3.876,0-8.166,13.347-10.72,22.802 c-1.794-3.969-3.903-6.802-6.28-6.802c-8,0-23,66-23,66h84C91.5,89.5,81.5,34.5,72.5,34.5z"
                      ></path>
                      <path
                        fill="#40396e"
                        d="M66,88H32c0-13.255,7.611-22,17-22S66,74.745,66,88z"
                      ></path>
                    </svg>
                  </Link>
                  <div className="flex items-center space-x-4">
                    {/* <a
                      href="https://github.com/Danielalveslira"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a> */}

                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <main className="flex-grow">{children}</main>

          <footer>
            <div>
              <div className="border-t border-gray-200 dark:border-gray-700 p-5">
                <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                  © {new Date().getFullYear()} Dnllira
                  <span className="">
                    <Link
                      href="/termos-de-uso"
                      className="text-blue-700 dark:text-blue-400 hover:underline"
                    >
                      Termos de Uso
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
