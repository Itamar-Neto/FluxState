import './App.css'
import Dashboard from './components/Layout/Dashboard';
import Navbar from './components/Layout/Navbar';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';

function App() {

  return (
    <>
      <Dashboard>
        <Navbar />
        <Main />
      </Dashboard>
      <Footer />
    </>
  )
}

export default App
