import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import EvaMats from './components/EvaMats';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import MyModal from './components/modal/MyModal';
import Navbar from './components/Navbar';
export const ModalContext = React.createContext(null);

function App() {
  const [modal, setModal] = useState(false);
  return (
    <ModalContext.Provider value={{modal, setModal}}>
      <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Header/>
        <EvaMats/>
        <Feedback/>
        <Footer/>
        <MyModal/>
      </BrowserRouter>
    </div>
    </ModalContext.Provider>
  );
}

export default App;
