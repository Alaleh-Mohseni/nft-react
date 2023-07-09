import HeroSection from "../../components/HeroSection";
import LiveAuction from "../../components/LiveAuction";
import SellerSection from "../../components/SellerSection";
import Trending from "../../components/TrendingSection";
import StepSection from "../../components/StepSection";
import AboutSection from "../../components/AboutSection";


const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <AboutSection />
      <SellerSection />
      <Trending />
      <StepSection />
    </>
  );
};

export default Home;
