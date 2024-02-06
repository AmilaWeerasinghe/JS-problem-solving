import { useAccordianContext } from "./Accordian";

const AccordianTitle = ({id,children,className}) =>{
    const { toggleItem} = useAccordianContext();
    return(
        <h3 className={ className} onClick={()=> toggleItem(id)}>{children}</h3>
    )
}

export default AccordianTitle;