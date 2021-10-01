import { Route, Switch } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTopOnMount";
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import AboutFundation from './Pages/Fundation/AboutFundation';
import Members from './Pages/Fundation/Members';
import VolunteersAndFriends from './Pages/Fundation/VolunteersAndFriends';
import Reports from './Pages/Fundation/Reports';
import Adoption from './Pages/OurDogs/Adoption';
import VirtualAdoption from './Pages/OurDogs/VirtualAdoption';
import BehindTheRainbow from './Pages/OurDogs/BehindTheRainbow';
import Jancio from './Pages/OurDogs/Jancio';
import OurResidents from './Pages/OurDogs/OurResidents';
import TheyFoundHome from './Pages/OurDogs/TheyFoundHome';
import TheyHelpedUs from './Pages/Support/TheyHelpedUs';
import HowToHelpUs from './Pages/Support/HowToHelpUs';
import Dog from './Pages/OurDogs/Dog';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';

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
