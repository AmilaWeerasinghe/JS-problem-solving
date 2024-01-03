import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import TabButtons from './components/TabButtons/TabButtons';
import {useState} from 'react'

function App() {
  let tabContent = 'Please select a tab';
  const handleSelect= (selectedButton) => {
    console.log('Handle Select',selectedButton)
  }
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item)=>{
            return(<CoreConcepts {...item}/>)
          })}
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={() => handleSelect('components')}>Components</TabButtons>
            <TabButtons onSelect={() => handleSelect('jsx')}>JSX</TabButtons>
            <TabButtons onSelect={() => handleSelect('props')}>Props</TabButtons>
            <TabButtons onSelect={() => handleSelect('states')}>States</TabButtons>
          </menu>
        </section>
        
        

      </main>
    </div>
  );
}

export default App;
