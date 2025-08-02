import React, { useEffect, useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import "./Header.css";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ProjectContext } from "../../Contexts/ProjectProvider";

const Header = () => {
  const [theme, setTheme] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [shownavbar, setShowNavbar] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative");
  const [activeSection, setActiveSection] = useState("home");
  const { projects } = useContext(ProjectContext);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 10
        ? setStickyClass(
            "sticky top-0 left-0 z-50 border-b-[#64C59A] border-b-[1px] backdrop-blur-md bg-[#0B1224]/90"
          )
        : setStickyClass("relative");
    }
  };

  const handleScroll = () => {
    const sections = [
      "home",
      "about",
      "skills",
      "experience",
      "my-works",
      "contact",
    ];
    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sections[i]);
        break;
      }
    }
  };

  useEffect(() => {
    const themeFromStorage = localStorage.getItem("sina-theme");
    if (!themeFromStorage) {
      localStorage.setItem("sina-theme", "dark");
    } else {
      setTheme(themeFromStorage);
    }
    const root = window.document.documentElement;
    root.classList.add(themeFromStorage);
  }, [theme]);

  const changeTheme = () => {
    const root = window.document.documentElement;
    root.classList.remove(theme);
    const themeChange = theme === "dark" ? "light" : "dark";
    setTheme(themeChange);
    root.classList.remove(themeChange);
    localStorage.setItem("sina-theme", themeChange);
  };

  const getNavItemClass = (section) => {
    return `px-4 uppercase text-[14px] py-[10px] font-medium transition-all duration-300 ${
      activeSection === section
        ? "text-[#64C59A] bg-[#64C59A]/10 rounded-md"
        : "text-[#fafafa] hover:text-[#64C59A]"
    }`;
  };

  const getMobileNavItemClass = (section) => {
    return `px-4 uppercase text-[14px] py-[5px] font-medium transition-all duration-300 ${
      activeSection === section
        ? "text-[#64C59A] bg-[#64C59A]/10 rounded-md"
        : "text-[#fafafa] hover:text-[#64C59A]"
    }`;
  };

  return (
    <div className={`${stickyClass} header transition-all duration-300 ease`}>
      <nav
        className={`flex justify-between items-center md:px-10 px-5 bg-[#0B1224]`}
      >
        {/* responsive button */}
        {shownavbar ? (
          <button
            onClick={() => setShowNavbar((prev) => !prev)}
            className="sm:hidden flex hamburger-menu rounded bg-[rgba(100,197,154,0.1)] hover:bg-[rgba(100,197,154,0.2)] transition-colors duration-300"
          >
            <HiOutlineX className="h-10 w-10 p-2 rounded text-[#64C59A]"></HiOutlineX>
          </button>
        ) : (
          <button
            onClick={() => setShowNavbar((prev) => !prev)}
            className="sm:hidden flex hamburger-menu rounded bg-[rgba(100,197,154,0.1)] hover:bg-[rgba(100,197,154,0.2)] transition-colors duration-300"
          >
            <HiMenu className="h-10 w-10 p-2 rounded text-[#64C59A]"></HiMenu>
          </button>
        )}

        {/* logo icon */}
        <div className="logo-box flex items-center uppercase text-3xl py-2 text-[#64C59A] font-medium">
          <span className="logo-name">anis</span>
          <span className="text-3xl text-[#fafafa]">.</span>
        </div>

        {/* nav items */}
        <ul className="items-center justify-center hidden nav-link-items sm:flex">
          <li className={getNavItemClass("home")}>
            <a href="#home" className="sina">
              <span className="mr-[4px] text-[#64C59A] font-semibold">01.</span>
              Home
            </a>
          </li>
          <li className={getNavItemClass("about")}>
            <a href="#about" className="sina">
              <span className="mr-[4px] text-[#64C59A] font-semibold">02.</span>
              About
            </a>
          </li>
          <li className={getNavItemClass("skills")}>
            <a href="#skills" className="sina">
              <span className="mr-[4px] text-[#64C59A] font-semibold">03.</span>
              Skills
            </a>
          </li>
          <li className={getNavItemClass("experience")}>
            <a href="#experience" className="sina">
              <span className="mr-[4px] text-[#64C59A] font-semibold">04.</span>
              Experience
            </a>
          </li>
          <li className={getNavItemClass("my-works")}>
            <a href="#my-works" className="sina">
              <span className="mr-[4px] text-[#64C59A] font-semibold">05.</span>
              Works
            </a>
          </li>
          <li className="px-4 uppercase text-[14px] text-[#fafafa] py-[10px] font-medium hover:text-[#64C59A] transition-colors duration-300">
            <Link to="/blog" className="sina">
              <span className="mr-[4px] text-[#64C59A] font-semibold">06.</span>
              Blog
            </Link>
          </li>
          <li className={getNavItemClass("contact")}>
            <a href="#contact" className="sina">
              <span className="mr-[4px] text-[#64C59A] font-semibold">07.</span>
              Contact
            </a>
          </li>

          {/* Dropdown for smaller screens */}
          <li className="px-4 uppercase hidden dropdown relative items-start text-[14px] text-[#fafafa] py-[10px] font-medium">
            <button onClick={() => setDropdown((prev) => !prev)}>
              <MdMoreHoriz className="w-6 h-6 mr-[4px] text-[#64C59A] font-semibold"></MdMoreHoriz>
            </button>
            <ul
              className={`absolute transition-all duration-75 px-10 py-5 top-20 right-[-50%] translate-x-10 w-[200px] bg-[#0B1224] rounded-b-md border border-[#64C59A]/20 ${
                dropdown ? "flex-col" : "hidden"
              }`}
            >
              <li className="dropdown-items-4 uppercase py-2 text-[14px] text-[#fafafa] font-medium hover:text-[#64C59A] transition-colors duration-300">
                <a href="#experience" className="sina">
                  <span className="mr-[4px] text-[#64C59A] font-semibold">
                    04.
                  </span>
                  Experience
                </a>
              </li>
              <li className="dropdown-items-5 uppercase py-2 text-[14px] text-[#fafafa] font-medium hover:text-[#64C59A] transition-colors duration-300">
                <a href="#my-works" className="sina">
                  <span className="mr-[4px] text-[#64C59A] font-semibold">
                    05.
                  </span>
                  Works
                </a>
              </li>
              <li className="dropdown-items-6 uppercase py-2 text-[14px] text-[#fafafa] font-medium hover:text-[#64C59A] transition-colors duration-300">
                <Link to="/blog" className="sina">
                  <span className="mr-[4px] text-[#64C59A] font-semibold">
                    06.
                  </span>
                  Blog
                </Link>
              </li>
              <li className="py-2 dropdown-items-7 uppercase text-[14px] text-[#fafafa] font-medium hover:text-[#64C59A] transition-colors duration-300">
                <a href="#contact" className="sina">
                  <span className="mr-[4px] text-[#64C59A] font-semibold">
                    07.
                  </span>
                  Contact
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* hire button */}
        <a href="#contact">
          <button className="hire-me-btn font-medium text-black bg-[#64C59A] rounded-[5px] uppercase py-[5px] px-[20px] hover:bg-[#4ade80] transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Hire me
          </button>
        </a>
      </nav>

      {/* responsive nav items */}
      <ul
        className={`sm:hidden absolute transition-all duration-200 top-13 z-10 w-full text-left p-5 bg-[#0B1224]/95 backdrop-blur-md border-b border-[#64C59A]/20 ${
          shownavbar ? "block" : "hidden"
        }`}
      >
        <li
          onClick={() => setShowNavbar(false)}
          className={getMobileNavItemClass("home")}
        >
          <a href="#home" className="sina block">
            <span className="mr-[4px] text-[#64C59A] font-semibold">01.</span>
            Home
          </a>
        </li>
        <li
          onClick={() => setShowNavbar(false)}
          className={getMobileNavItemClass("about")}
        >
          <a href="#about" className="sina block">
            <span className="mr-[4px] text-[#64C59A] font-semibold">02.</span>
            About
          </a>
        </li>
        <li
          onClick={() => setShowNavbar(false)}
          className={getMobileNavItemClass("skills")}
        >
          <a href="#skills" className="sina block">
            <span className="mr-[4px] text-[#64C59A] font-semibold">03.</span>
            Skills
          </a>
        </li>
        <li
          onClick={() => setShowNavbar(false)}
          className={getMobileNavItemClass("experience")}
        >
          <a href="#experience" className="sina block">
            <span className="mr-[4px] text-[#64C59A] font-semibold">04.</span>
            Experience
          </a>
        </li>
        <li
          onClick={() => setShowNavbar(false)}
          className={getMobileNavItemClass("my-works")}
        >
          <a href="#my-works" className="sina block">
            <span className="mr-[4px] text-[#64C59A] font-semibold">05.</span>
            Works
          </a>
        </li>
        <li
          onClick={() => setShowNavbar(false)}
          className="px-4 uppercase text-[14px] text-[#fafafa] py-[5px] font-medium hover:text-[#64C59A] transition-colors duration-300"
        >
          <Link to="/blog" className="sina block">
            <span className="mr-[4px] text-[#64C59A] font-semibold">06.</span>
            Blog
          </Link>
        </li>
        <li
          onClick={() => setShowNavbar(false)}
          className={getMobileNavItemClass("contact")}
        >
          <a href="#contact" className="sina block">
            <span className="mr-[4px] text-[#64C59A] font-semibold">07.</span>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
