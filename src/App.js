import './App.css';
import About from'./about'
import Header from'./header'
import Contact from'./contact'
import Work from'./work'
function App() {
  return (
    <div className="home">
      <Header/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
