import AboutContainer from "./components/about/container";
import FeaturesContainer from "./components/features/container";
import FooterContainer from "./components/footer/container";
import FutureContainer from "./components/future/container";
import HeaderContainer from "./components/header/container";
import PartnersContainer from "./components/partners/container";
import StrategyContainer from "./components/strategy/container";

function App() {
  return (
    <main className="finance__ui px-[10px]">
      <HeaderContainer />

      <FeaturesContainer />

      <AboutContainer />

      <FutureContainer />

      <PartnersContainer />

      <StrategyContainer />

      <FooterContainer />
    </main>
  );
}

export default App;
