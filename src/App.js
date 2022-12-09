import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Typical from "react-typical";
import Header from "./components/header/Header";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";
import MyWorks from "./components/MyWorks/MyWorks";

function App() {
	return (
		<div className="bg-[#0B1224]">
			<Header />
			<HomeBanner></HomeBanner>
			<AboutMe></AboutMe>
			<Skills></Skills>
			<MyWorks></MyWorks>
		</div>
	);
}

export default App;
