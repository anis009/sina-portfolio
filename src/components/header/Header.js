import React, { useEffect, useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import "./Header.css";
const Header = () => {
	const [theme, setTheme] = useState("");
	const [dropdown, setDropdown] = useState(false);
	const [shownavbar, setShowNavbar] = useState(false);
	const [stickyClass, setStickyClass] = useState("relative");

	useEffect(() => {
		window.addEventListener("scroll", stickNavbar);

		return () => {
			window.removeEventListener("scroll", stickNavbar);
		};
	}, []);

	const stickNavbar = () => {
		console.log("anis molla");
		if (window !== undefined) {
			let windowHeight = window.scrollY;
			windowHeight > 100
				? setStickyClass(
						"sticky top-0 left-0 z-50 border-b-[#64C59A] border-b-[1px]"
				  )
				: setStickyClass("relative");
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
	return (
		<div className={`${stickyClass} transition-all duration-100 ease`}>
			<nav
				className={`flex justify-between items-center md:px-10 px-5 bg-[#0B1224] `}
			>
				{/* responsive button */}
				{shownavbar ? (
					<button
						onClick={() => setShowNavbar((prev) => !prev)}
						className="sm:hidden flex hamburger-menu rounded bg-[rgba(100,197,154,0.1)]"
					>
						<HiOutlineX className="h-10 w-10 p-2 rounded text-[#64C59A]"></HiOutlineX>
					</button>
				) : (
					<button
						onClick={() => setShowNavbar((prev) => !prev)}
						className="sm:hidden flex hamburger-menu rounded bg-[rgba(100,197,154,0.1)]"
					>
						<HiMenu className="h-10 w-10 p-2 rounded text-[#64C59A]"></HiMenu>
					</button>
				)}
				{/* logo icon */}
				<div className="logo-box flex items-center uppercase text-5xl py-5  text-[#64C59A] font-medium">
					<span className="logo-name">anis</span>
					<span className="text-5xl text-[#fafafa]">.</span>
				</div>
				{/* nav items */}
				<ul className="nav-link-items sm:flex hidden items-center justify-center ">
					<li className="px-4  uppercase text-[14px] text-[#fafafa]  py-[24px] font-medium">
						<a href="#" className="sina">
							<span className="mr-[4px] text-[#64C59A] font-semibold">01.</span>
							Home
						</a>
					</li>
					<li className="px-4 uppercase text-[14px] text-[#fafafa] py-[24px] font-medium">
						<a href="#" className="sina">
							{" "}
							<span className="mr-[4px] text-[#64C59A] font-semibold">
								02.
							</span>{" "}
							about
						</a>
					</li>
					<li className="px-4 uppercase text-[14px] text-[#fafafa] py-[24px] font-medium">
						<a href="#" className="sina">
							<span className="mr-[4px] text-[#64C59A] font-semibold">03.</span>
							resume
						</a>
					</li>
					<li className="px-4 uppercase text-[14px] nav-items-4 text-[#fafafa] py-[24px] font-medium">
						<a href="#" className="sina">
							<span className="mr-[4px] text-[#64C59A] font-semibold">04.</span>
							works
						</a>
					</li>
					<li className="px-4 uppercase nav-items-5 text-[14px] text-[#fafafa] py-[24px] font-medium">
						<a href="#" className="sina">
							<span className="mr-[4px] text-[#64C59A] font-semibold">05.</span>
							blog
						</a>
					</li>
					<li className="px-4 uppercase nav-items-6 text-[14px] text-[#fafafa] py-[24px] font-medium">
						<a href="#" className="sina">
							{" "}
							<span className="mr-[4px] text-[#64C59A] font-semibold">06.</span>
							contact
						</a>
					</li>
					<li className="px-4 uppercase hidden dropdown  relative  items-start text-[14px] text-[#fafafa] py-[24px] font-medium">
						<button onClick={() => setDropdown((prev) => !prev)}>
							<MdMoreHoriz className="w-6 h-6 mr-[4px] text-[#64C59A] font-semibold"></MdMoreHoriz>
						</button>
						<ul
							className={`absolute  transition-all duration-75 px-10 py-5  top-20 right-[-50%] translate-x-10 w-[200px]  bg-[#0B1224] rounded-b-md ${
								dropdown ? "flex-col" : "hidden"
							}`}
						>
							<li className=" dropdown-items-4 uppercase  py-2 text-[14px] text-[#fafafa] font-medium">
								<a href="#" className="sina">
									<span className="mr-[4px] text-[#64C59A] font-semibold">
										04.
									</span>
									works
								</a>
							</li>
							<li className=" dropdown-items-5 uppercase py-2 text-[14px] text-[#fafafa]  font-medium">
								<a href="#" className="sina">
									<span className="mr-[4px] text-[#64C59A] font-semibold">
										05.
									</span>
									blog
								</a>
							</li>
							<li className="  py-2 dropdown-items-6 uppercase text-[14px] text-[#fafafa]  font-medium">
								<a href="#" className="sina">
									{" "}
									<span className="mr-[4px] text-[#64C59A] font-semibold">
										06.
									</span>
									contact
								</a>
							</li>
						</ul>
					</li>
				</ul>
				{/* hire button */}
				<button className="hire-me-btn font-medium text-black bg-[#64C59A] rounded-[5px] uppercase py-[10px] px-[20px] ">
					Hire me
				</button>
			</nav>
			{/* reponsive nav items */}
			<ul
				className={`sm:hidden absolute transition-all duration-200  top-20 z-10 w-full text-left p-5 bg-[#0B1224] ${
					shownavbar ? "block" : "hidden"
				}`}
			>
				<li className="px-4 uppercase text-[14px] text-[#fafafa]  py-[10px] font-medium">
					<a href="#" className="sina">
						<span className="mr-[4px] text-[#64C59A] font-semibold">01.</span>
						Home
					</a>
				</li>
				<li className="px-4 uppercase text-[14px] text-[#fafafa] py-[10px] font-medium">
					<a href="#" className="sina">
						{" "}
						<span className="mr-[4px] text-[#64C59A] font-semibold">
							02.
						</span>{" "}
						about
					</a>
				</li>
				<li className="px-4 uppercase text-[14px] text-[#fafafa] py-[10px] font-medium">
					<a href="#" className="sina">
						<span className="mr-[4px] text-[#64C59A] font-semibold">03.</span>
						resume
					</a>
				</li>
				<li className="px-4 uppercase text-[14px] text-[#fafafa] py-[10px] font-medium">
					<a href="#" className="sina">
						<span className="mr-[4px] text-[#64C59A] font-semibold">04.</span>
						works
					</a>
				</li>
				<li className="px-4 uppercase text-[14px] text-[#fafafa] py-[10px] font-medium">
					<a href="#" className="sina">
						<span className="mr-[4px] text-[#64C59A] font-semibold">05.</span>
						blog
					</a>
				</li>
				<li className="px-4 uppercase text-[14px] text-[#fafafa] py-[10px] font-medium">
					<a href="#" className="sina">
						{" "}
						<span className="mr-[4px] text-[#64C59A] font-semibold">06.</span>
						contact
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Header;
