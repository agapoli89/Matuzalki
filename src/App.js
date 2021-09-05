import './App.scss';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
