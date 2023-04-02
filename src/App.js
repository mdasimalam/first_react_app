import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <> 
    
<Navbar title="Menu" about="About"/>
{/* <Navbar/> */}
<div className="container">  
<Textform heading="Enter your content for uppercase or lowercase" />
{/* <About/> */}
</div>

    </>
  );
}

export default App;
