import FaqsSection from "../components/FaqsSection";
import Footer from "../components/Footer";
import AboutUsSection from "../components/AboutUsSection";
import WhyShouldYouPlaySection from "../components/WhyShouldYouPlaySection";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      {/* paste your page component below here */}

      <Navbar />
      <WhyShouldYouPlaySection />
      <FaqsSection />
      <AboutUsSection />
      <Footer />
      {/* paste your page component above here */}
    </>
  );
};

export default Home;
