import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';

const reactLevels = ["Fundamental", "Crucial" , "Core"]

const generateRandInt = (max) => {
  return Math.floor(Math.random() * max+1)
}

const CoreConcepts = ({image,title,description})=> {
  return(
    <li>
      <img src={image} alt=''/>
      <h3>{title}</h3>
      <p>{description}</p>
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
            return(<CoreConcepts {...item}/>)
          })}
        </ul>
        </section>
        

      </main>
    </div>
  );
}

export default App;
