const Footer = () => {
  return (
    <footer className="relative z-20 bg-gradient-to-b from-gray-900 to-black text-white py-12">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-pattern opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* About Section */}
          <div className="backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Us
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed hover:text-gray-300 transition-colors duration-300">
              We are a non-profit organization dedicated to making a positive
              impact in society by supporting various social causes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quick Links
            </h2>
            <ul className="text-gray-400 text-sm space-y-3">
              {[
                { name: "Home", link: "/" },
                { name: "Press Release", link: "/media" },
                { name: "Contact", link: "/contact" },
                { name: "Donate", link: "/donate" },
              ].map(({ name, link }) => (
                <li key={name}>
                  <a
                    href={link}
                    className="hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 transform hover:-translate-y-1">
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <div className="space-y-3">
              {[
                {
                  icon: "📧",
                  text: "info@ngo.org",
                  href: "mailto:info@ngo.org",
                  ariaLabel: "Send us an email",
                },
                {
                  icon: "📞",
                  text: "+123 456 7890",
                  href: "tel:+1234567890",
                  ariaLabel: "Call us",
                },
                {
                  icon: "📍",
                  text: "123 NGO Street, City, Country",
                  href: "https://maps.google.com/?q=123+NGO+Street,+City,+Country",
                  ariaLabel: "Find us on Google Maps",
                  target: "_blank",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.target}
                  rel={
                    item.target === "_blank" ? "noopener noreferrer" : undefined
                  }
                  aria-label={item.ariaLabel}
                  className="group block"
                >
                  <p className="text-gray-400 text-sm flex items-center hover:text-gray-300 transition-colors p-2 rounded-lg hover:bg-gray-800/30 transform hover:scale-105  duration-300 relative overflow-hidden">
                    {/* Hover Effect Background */}
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>

                    {/* Icon with Animation */}
                    <span className="mr-3 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 relative">
                      {item.icon}
                    </span>

                    {/* Text Content */}
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                      {item.text}
                    </span>

                    {/* Animated Arrow */}
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 text-pink-400">
                      →
                    </span>
                  </p>
                </a>
              ))}
            </div>

            {/* Animated Border Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-[-2px] rounded-lg bg-gradient-to-r from-pink-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Add these styles */}
            <style jsx>{`
              @keyframes pulse {
                0%,
                100% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.05);
                }
              }

              @keyframes float {
                0%,
                100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-5px);
                }
              }

              .contact-item-hover {
                position: relative;
                overflow: hidden;
              }

              .contact-item-hover::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: linear-gradient(to right, #ec4899, #ef4444);
                transform: scaleX(0);
                transform-origin: left;
                transition: transform 0.3s ease;
              }

              .contact-item-hover:hover::after {
                transform: scaleX(1);
              }
            `}</style>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-6">
              {/* Social Media Icons */}
              {[
                {
                  name: "facebook",
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                  href: "https://facebook.com",
                },
                {
                  name: "twitter",
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  ),
                  href: "https://twitter.com",
                },
                {
                  name: "instagram",
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  ),
                  href: "https://instagram.com",
                },
                {
                  name: "linkedin",
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                  href: "https://linkedin.com",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                  {/* Icon Container */}
                  <div className="relative text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>

                  {/* Hover Effect Ring */}
                  <div className="absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-full border-2 border-pink-500 animate-spin-slow"></div>
                  </div>
                </a>
              ))}
            </div>

            {/* Copyright Text */}
            <p className="hover:text-gray-300 transition-colors duration-300 relative group">
              <span className="relative z-10">
                &copy; {new Date().getFullYear()} NGO Name. All Rights Reserved.
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </p>
          </div>

          {/* Add these styles */}
          <style jsx>{`
            @keyframes spin-slow {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            .animate-spin-slow {
              animation: spin-slow 8s linear infinite;
            }
          `}</style>
        </div>
      </div>

      {/* Add these styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;