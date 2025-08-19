"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Team", href: "/team" },
  { name: "Directorates", href: "/directorates" },
  { name: "Mandate", href: "/mandate" },
  { name: "Projects", href: "/projects" },
  { name: "Secretariat", href: "/secretariat" },
  { name: "Contact", href: "/contact" },
];

const projectsDropdownItems = [
  { name: "Solar Project", href: "/projects/solar-project", featured: true },
  { name: "NUSAF 3", href: "/projects/nusaf-3" },
  { name: "DRDIP", href: "/projects/drdip" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      {/* Top Contact Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4 text-red-500" />
                <span>
                  Nakasero Hill Road, Nakasero Kampala P.O Box 762176 Kampala
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4 text-red-500" />
                <span className="hidden sm:inline">
                  info@nationalprojectsimplemention.org
                </span>
                <span className="sm:hidden">Contact Us</span>
              </div>
            </div>
            <div className="hidden md:block">
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="relative h-16 w-16">
                  <Image
                    src="/logo.png"
                    alt="National Projects Implementation"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-8">
                {navigationItems.map((item) => {
                  if (item.name === "Projects") {
                    return (
                      <div
                        key={item.name}
                        className="relative"
                        onMouseEnter={() => setIsProjectsDropdownOpen(true)}
                        onMouseLeave={() => setIsProjectsDropdownOpen(false)}
                      >
                        <Link
                          href={item.href}
                          className={`relative px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                            isActiveLink(item.href)
                              ? "text-red-600"
                              : "text-gray-600 hover:text-gray-900"
                          }`}
                        >
                          {item.name}
                          <ChevronDown className="h-4 w-4" />
                          {isActiveLink(item.href) && (
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                              layoutId="activeTab"
                              initial={false}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                              }}
                            />
                          )}
                        </Link>

                        {/* Projects Dropdown */}
                        <motion.div
                          className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{
                            opacity: isProjectsDropdownOpen ? 1 : 0,
                            y: isProjectsDropdownOpen ? 0 : -10,
                          }}
                          transition={{ duration: 0.2 }}
                          style={{
                            pointerEvents: isProjectsDropdownOpen
                              ? "auto"
                              : "none",
                          }}
                        >
                          <div className="py-2">
                            {projectsDropdownItems.map((project) => (
                              <Link
                                key={project.name}
                                href={project.href}
                                className={`flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                                  project.featured
                                    ? "bg-gray-50 text-gray-900 font-medium hover:bg-gray-100"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                              >
                                <span>{project.name}</span>
                                {project.featured && (
                                  <ArrowRight className="h-4 w-4 text-red-500" />
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                        isActiveLink(item.href)
                          ? "text-red-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {item.name}
                      {isActiveLink(item.href) && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                          layoutId="activeTab"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className="lg:hidden"
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div className="px-4 pt-2 pb-6 space-y-1 bg-gray-50 border-t border-gray-200">
            {navigationItems.map((item) => {
              if (item.name === "Projects") {
                return (
                  <div key={item.name} className="space-y-1">
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between px-3 py-2 text-base font-medium rounded-md transition-colors ${
                        isActiveLink(item.href)
                          ? "text-red-600 bg-red-50"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    <div className="pl-4 space-y-1">
                      {projectsDropdownItems.map((project) => (
                        <Link
                          key={project.name}
                          href={project.href}
                          className={`flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                            project.featured
                              ? "text-gray-900 bg-gray-100 font-medium"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {project.name}
                          {project.featured && (
                            <ArrowRight className="h-3 w-3 text-red-500" />
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActiveLink(item.href)
                      ? "text-red-600 bg-red-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
