import img from '../assets/investment-calculator-logo.png';
const Header = ()=> {
    return(
        <div id='header'>
             <h1>React Investment Calculator</h1>
             <img src={img} alt='image with a money bag'/>
        </div>
    )
}

export default Header;