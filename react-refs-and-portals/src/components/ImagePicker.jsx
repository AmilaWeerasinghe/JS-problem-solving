import React from 'react';

function ImagePicker() {
    const imageInput = React.useRef();
    
    const handleClick = ()=>{
        imageInput.current.click();
    }
    
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input ref={imageInput} data-testid="file-picker" type="file" accept="image/*" />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default ImagePicker;
