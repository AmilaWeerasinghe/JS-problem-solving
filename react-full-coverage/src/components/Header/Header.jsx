import "./Header.css"
import reactImg from '../../assets/react-core-concepts.png';
const reactLevels = ["Fundamental", "Crucial" , "Core"]

const generateRandInt = (max) => {
  return Math.floor(Math.random() * max+1)
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

export default Header;