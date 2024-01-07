import React from 'react'
function InLine() {
    const [color, setColor] = React.useState('white');
    
    const handleClick = (button) => {
        
        if(button==='Yes'){
            setColor('green')
        }
        if(button==='No'){
            setColor('red')
        }
    }
    
    console.log(color)
    return (
    <div id="app">
      <h1 style={{
          color:color
      }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={()=>handleClick('Yes')}>Yes</button>
        </li>
        <li>
          <button onClick={()=>handleClick('No')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default InLine;
