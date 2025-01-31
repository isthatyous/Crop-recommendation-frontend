import Image from 'next/image';

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
              <Image
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
                width={32} // Set the width and height for the image
                height={32}
              />
              <p className="text-sm text-gray-200">
                © {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {/* Social media links here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
