import { useState } from 'react';
import Modal from 'react-modal';
import ButtonModal from './components/Modals/ButtonModal';

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () =>{
      setModalIsOpen(true)
  }
  const setModalIsOpenToFalse = () =>{
      setModalIsOpen(false)
  }

  return(
    <div className="container">
      <p>Homepage</p>
      <button className="btn" onClick={setModalIsOpenToTrue}>Open Modal</button>

      <Modal isOpen={modalIsOpen}>
        <ButtonModal/>
          <button className="btn" onClick={setModalIsOpenToFalse}>Close</button>
      </Modal>

    </div>
  )
}

export default App;


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>Edit <code>src/App.js</code> and save to reload.</p>

  //       <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
  //         Learn React
  //       </a>
  //     </header>
  //     <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button>
  //     <ButtonModal isOpen={modalIsOpen}>
  //       <button onClick={setModalIsOpenToFalse}>x</button>
  //     </ButtonModal>
  //   </div>
  // );