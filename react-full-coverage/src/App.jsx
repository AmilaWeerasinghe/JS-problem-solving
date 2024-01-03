import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';

function App() {
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
        

      </main>
    </div>
  );
}

export default App;
