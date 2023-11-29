import React, {useRef, useState} from 'react';

const MyRefComponent = () => {
    const [name, setName] = useState('');
    const myRef = useRef();

    const focus = ()=>{
        myRef.current.focus();
    }
    return (
        <>
        <input value={name} onChange={e => setName(e.target.value)} ref={myRef}/>
        <pre>My Name is {name}</pre>
        <button onClick={focus}>Focus</button>
        </>
    )
}

export default MyRefComponent;