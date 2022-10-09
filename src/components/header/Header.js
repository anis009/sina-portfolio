import React, { useEffect, useState } from "react";
import {
	SunIcon,
	UserIcon,
	CommandLineIcon,
	BookOpenIcon,
	BriefcaseIcon,
	ChatBubbleLeftEllipsisIcon,
	MoonIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
	const [theme, setTheme] = useState("");
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
		<header className="bg-white dark:bg-[#0A192F] shadow-md fixed w-full top-0 left-0 py-5">
			<nav className="flex justify-between items-center px-14 ">
				{/* Logo */}
				<div className="text-2xl text-[#58E1C4]  font-semibold capitalize ">
					anis molla
				</div>
				<ul className="flex uppercase">
					<li className="px-4 hover:text-[#58E1C4] transition dark:text-[#CCD6F6] dark:hover:text-[#58E1C4] text-gray-600 duration-150 ease-linear">
						<a href="" className="text-xl flex items-center">
							<UserIcon className="w-6 h-6 mr-3" />

							<span>about</span>
						</a>
					</li>
					<li className="px-4 hover:text-[#58E1C4] transition dark:text-[#CCD6F6] dark:hover:text-[#58E1C4] text-gray-600 duration-150 ease-linear">
						<a href="" className="text-xl flex items-center">
							<CommandLineIcon className="w-6 h-6 mr-3" />
							<span>skills </span>
						</a>
					</li>
					<li className="px-4 hover:text-[#58E1C4] transition dark:text-[#CCD6F6] dark:hover:text-[#58E1C4] text-gray-600 duration-150 ease-linear">
						<a href="" className="text-xl flex items-center">
							<BookOpenIcon className="w-6 h-6 mr-3" />
							<span>education</span>
						</a>
					</li>
					<li className="px-4 hover:text-[#58E1C4] transition dark:text-[#CCD6F6] dark:hover:text-[#58E1C4] text-gray-600 duration-150 ease-linear">
						<a href="" className="text-xl flex items-center">
							<BriefcaseIcon className="w-6 h-6 mr-3" />

							<span>projects</span>
						</a>
					</li>
					<li className="px-4 hover:text-[#58E1C4] transition dark:text-[#CCD6F6] dark:hover:text-[#58E1C4] text-gray-600 duration-150 ease-linear">
						<a href="#" className="text-xl flex items-center">
							<ChatBubbleLeftEllipsisIcon className="w-6 h-6 mr-3" />

							<span>contact</span>
						</a>
					</li>
				</ul>
				<div>
					{theme === "light" ? (
						<SunIcon
							onClick={changeTheme}
							className="h-10 w-10 cursor-pointer transition duration-200 text-[#58E1C4]"
						/>
					) : (
						<MoonIcon
							onClick={changeTheme}
							className="h-10 w-10 cursor-pointer transition duration-200 text-[#58E1C4]"
						/>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
