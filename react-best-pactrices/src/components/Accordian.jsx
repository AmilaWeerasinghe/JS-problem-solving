import { createContext, useState, useContext } from 'react';

const AccordianContext = createContext();

export const useAccordianContext = () => {
    const ctx = useContext(AccordianContext);

    if(!ctx) {
        throw new Error('Accordian related components must be wrapped by <Accordian>')
    }

    return ctx;
}

const Accordian = ({children ,className}) => {
    const [openItemId, setOpenItemId] = useState();

    const openItem = (id) => {
        setOpenItemId(id)
    }

    const closeItem = () => {
        setOpenItemId(null)
    }
    const contextValue = {
        openItemId,
        openItem,
        closeItem
    }
    return (
        <AccordianContext.Provider value={contextValue}>
        <ul className={className}>
        {children}
        </ul>
    </AccordianContext.Provider>
    )
    
    
}

export default Accordian;