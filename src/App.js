import { Route, Switch } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTopOnMount";
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutFundation from './pages/Fundation/AboutFundation';
import OurPlace from './pages/Fundation/OurPlace';
import Members from './pages/Fundation/Members';
import VolunteersAndFriends from './pages/Fundation/VolunteersAndFriends';
import Reports from './pages/Fundation/Reports';
import Adoption from './pages/OurDogs/Adoption';
import VirtualAdoption from './pages/OurDogs/VirtualAdoption';
import BehindTheRainbow from './pages/OurDogs/BehindTheRainbow';
import Jancio from './pages/OurDogs/Jancio';
import OurResidents from './pages/OurDogs/OurResidents';
import TheyFoundHome from './pages/OurDogs/TheyFoundHome';
import TheyHelpedUs from './pages/Support/TheyHelpedUs';
import HowToHelpUs from './pages/Support/HowToHelpUs';
import Dog from './pages/OurDogs/Dog';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navigation />
      <Header />
      <Switch>
        <Route path="/o-fundacji">
          <AboutFundation />
        </Route>
        <Route path="/czlonkowie">
          <Members />
        </Route>
        <Route path="/nasze-miejsce">
          <OurPlace />
        </Route>
        <Route path="/sprawozdania">
          <Reports/>
        </Route>
        <Route path="/wolontariusze-i-psijaciele">
          <VolunteersAndFriends />
        </Route>
        <Route path="/adoptuj">
          <Adoption />
        </Route>
        <Route path="/adoptuj-wirtualnie">
          <VirtualAdoption />
        </Route>
        <Route path="/po-drugiej-stronie-teczy">
          <BehindTheRainbow />
        </Route>
        <Route path="/jancio">
          <Jancio />
        </Route>
        <Route path="/nasi-rezydenci">
          <OurResidents />
        </Route>
        <Route path="/im-się-udalo">
          <TheyFoundHome />
        </Route>
        <Route path="/wsparcie">
          <HowToHelpUs />
        </Route>
        <Route path="/wsparli-nas">
          <TheyHelpedUs />
        </Route>
        <Route path={`/kontakt`}>
          <Contact />
        </Route>
        <Route path="/psy/:url">
          <Dog />
        </Route>
        <Route path="/">
          <HomePage />
        </Route> 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
