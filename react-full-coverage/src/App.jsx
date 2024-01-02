import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';

const reactLevels = ["Fundamental", "Crucial" , "Core"]

const generateRandInt = (max) => {
  return Math.floor(Math.random() * max+1)
}

const CoreConcepts = (props)=> {
  return(
    <li>
      <img src={props.image} alt=''/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
    

  )
}

const Header = () => {
  const description = reactLevels[generateRandInt(2)];
  return(<header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
           {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>)
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item)=>{
            return(<CoreConcepts image={item.image} title={item.title} description={item.description}/>)
          })}
        </ul>
        </section>
        

      </main>
    </div>
  );
}

export default App;
