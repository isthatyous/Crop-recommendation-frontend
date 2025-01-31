import React from 'react';

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* Your page content here */}
        <main>
          {/* Your main content goes here */}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-400">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo and Description */}
            <div className="flex items-center space-x-4">
              <img
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
                className="h-8 w-auto"
              />
              <p className="text-sm text-gray-200">
                © {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.81v-9.294H9.692v-3.622h3.118V8.413c0-3.1 1.892-4.788 4.656-4.788 1.325 0 2.463.099 2.793.143v3.237l-1.916.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M23.643 4.937a9.55 9.55 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 9.75 9.75 0 0 1-3.127 1.196 4.917 4.917 0 0 0-8.384 4.482 13.941 13.941 0 0 1-10.117-5.134 4.822 4.822 0 0 0-.665 2.475c0 1.71.87 3.217 2.188 4.099a4.896 4.896 0 0 1-2.225-.616v.061c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 0 1-2.22.085 4.936 4.936 0 0 0 4.6 3.419A9.872 9.872 0 0 1 1.14 19.29a13.901 13.901 0 0 0 7.548 2.212c9.057 0 14.01-7.502 14.01-14.01 0-.213-.005-.426-.015-.637a10.012 10.012 0 0 0 2.46-2.561z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 20h-3v-12h3v12zm-1.5-13.57c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 13.57h-3v-6c0-1.1-.9-2-2-2s-2 .9-2 2v6h-3v-12h3v1.35c.88-1.27 2.5-2.35 4-2.35 2.33 0 4 1.67 4 4v9z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
