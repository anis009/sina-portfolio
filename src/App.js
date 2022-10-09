import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Typical from "react-typical";
import Header from "./components/header/Header";

function App() {
	return (
		<div className="">
			<Header />
			<FontAwesomeIcon icon={faEnvelope} />

			<Typical
				loop={Infinity}
				steps={["Software Engineer", 2500, "Fullstack Engineer", 2000]}
				wrapper="p"
				className="text-[30px] mt-10"
			/>
		</div>
	);
}

export default App;
