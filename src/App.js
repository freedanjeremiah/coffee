/* This example requires Tailwind CSS v2.0+ */

import { Disclosure } from "@headlessui/react";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound/Index";

const navigation = [
  { name: "Home", to: "/", current: true },
  { name: "About", to: "/about", current: true },
  { name: "Contact", to: "/contact", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  return (
    <div className="min-h-full">
      <div className="bg-black pb-32">
        <Disclosure as="nav" className="bg-black">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="border-b border-white">
                  <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                    <div className="flex items-center">
                      <div className="text-white flex-shrink-0">
                        <span className="font-bold">Any time Tea</span>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              to={item.to}
                              className={classNames(
                                item.current
                                  ? "bg-black text-white"
                                  : "text-gray-300 hover:bg-black hover:text-white",
                                "px-3 py-2 rounded-md text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        <button
                          type="button"
                          className="bg-black p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          <span className="sr-only">Dark Mode</span>
                          <MoonIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="ml-3">
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">Dark Mode</span>
                      <MoonIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      <main className="-mt-32 ">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <footer className="w-full max-w-container mx-auto border-t py-10 text-center text-sm text-gray-500 sm:flex sm:items-center sm:justify-center">
        <p>© 2023 - Any time tea. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 sm:ml-3 sm:border-l sm:border-gray-200 sm:pl-3">
          <a className="hover:text-teal-600" href="/privacy-policy">
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
