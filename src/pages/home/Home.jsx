import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import MyWorks from "../../components/MyWorks/MyWorks";
import ContactMe from "../../components/ContactMe/ContactMe";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Experience></Experience>
      <MyWorks></MyWorks>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
