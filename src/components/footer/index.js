import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-blue-400 py-8">
      <div className="container-fluid mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Logo</h2>
            <p className="text-sm">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
            <div className="flex space-x-4"></div>
          </div>

          <div className="footer-links">
            {/* About */}
            <div className="d-flex">
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-300">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Featured
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Business Relation
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Invite a friend
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; 2022 Company Name. All rights reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-blue-300">
              Privacy & Policy
            </a>
            <a href="#" className="text-sm hover:text-blue-300">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
