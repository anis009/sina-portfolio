import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Typical from "react-typical";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Skills from "./components/Skills/Skills";

function App() {
	return (
		<div className="">
			<Header />
			<HomeBanner></HomeBanner>
			<Skills></Skills>
		</div>
	);
}

export default App;
