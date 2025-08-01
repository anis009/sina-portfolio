import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import MyWorks from "../../components/MyWorks/MyWorks";
import ContactMe from "../../components/ContactMe/ContactMe";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <MyWorks></MyWorks>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
