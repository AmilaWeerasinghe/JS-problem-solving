import { createContext, useState, useContext } from 'react';
import AccordianItem from './AccordianItem';
import AccordianTitle from './AccordianTitle';
import AccordianContent from './AccordianContent';

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

    const toggleItem = (id) => {
        setOpenItemId((previd) => previd === id ? null : id)
    }
    const contextValue = {
        openItemId,
        toggleItem
    }
    return (
        <AccordianContext.Provider value={contextValue}>
        <ul className={className}>
        {children}
        </ul>
    </AccordianContext.Provider>
    )
    
    
}

Accordian.item = AccordianItem;
Accordian.title = AccordianTitle;
Accordian.content = AccordianContent;
export default Accordian;