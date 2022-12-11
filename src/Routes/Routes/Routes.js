import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../../components/AboutMe/AboutMe";
import ContactMe from "../../components/ContactMe/ContactMe";
import Footer from "../../components/Footer/Footer";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import MyWorks from "../../components/MyWorks/MyWorks";
import ProjectDetailsPage from "../../components/ProjectDetailsPage/ProjectDetailsPage";
import Skills from "../../components/Skills/Skills";
import Main from "../../Layout/Main/Main";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: (
					<div>
						<HomeBanner></HomeBanner>
						<AboutMe></AboutMe>
						<Skills></Skills>
						<MyWorks></MyWorks>
						<ContactMe></ContactMe>
						<Footer></Footer>
					</div>
				),
			},
		],
	},
	{
		path: "/project/:id",
		loader: () => axios.get("http://localhost:3000/projects.json"),
		element: <ProjectDetailsPage></ProjectDetailsPage>,
	},
]);

export default router;
