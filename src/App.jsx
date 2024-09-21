import './App.css';
// import MyFirstComponent from './components/MyFirstComponent';
// import SecondComponent from './components/SecondComponent';
// import ThirdComponent from './components/ThirdComponent';
import { Child } from './components/Child';
import { useState } from 'react';
import FourthComponent from './components/FourthComponent';

function App() {

  const [name, setName] = useState("Mambo Gomez"); //hook de estado stname es un metodo para darle otro valor setearlo

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Fundamentos de React</h1>
          {/* <hr className='white-hr'/> */}
            {/* <MyFirstComponent/> */}
          {/* <hr className='white-hr'/> */}
            {/* <SecondComponent/> */}
          {/* <hr className='white-hr'/> */}
            {/* <ThirdComponent
              name="Ines"
              last_name="Pez"
              age= {20}
            /> */}
            <FourthComponent />
          <hr className='white-hr'/>
          <Child
            name={name}
            setName={setName}
          />
          <hr className='white-hr'/>
      </header>
    </div>
  )
};

export default App