import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import TabButtons from './components/TabButtons/TabButtons';
import {useState} from 'react';
import { EXAMPLES } from './data';

function App() {
  const [tabContent, setTabContent] = useState('components');
  const [selectedTopic, setSelectedTopic] = useState(false);

  const handleSelect= (selectedButton) => {
    setTabContent(selectedButton);
    setSelectedTopic(true)
  }
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item)=>{
            return(<CoreConcepts key={item.title} {...item}/>)
          })}
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButtons isSelected={tabContent === 'components'} onSelect={() => handleSelect('components')}>Components</TabButtons>
            <TabButtons isSelected={tabContent === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButtons>
            <TabButtons isSelected={tabContent === 'props'} onSelect={() => handleSelect('props')}>Props</TabButtons>
            <TabButtons isSelected={tabContent === 'state'} onSelect={() => handleSelect('state')}>States</TabButtons>
          </menu>
          
            {!selectedTopic && <p>Please select a topic.</p>}
            {selectedTopic && <div id='tab-content'>
               <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>
                {EXAMPLES[tabContent].code}
              </code>
            </pre>
            </div>}
         
        </section>
      </main>
    </div>
  );
}

export default App;
