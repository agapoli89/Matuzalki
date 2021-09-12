import './App.scss';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
