import { useAccordianContext } from "./Accordian";

const AccordianContent = ({id,children}) => {
    const { openItemId } = useAccordianContext();

    const isOpen = openItemId === id;

    return (
        <div className={isOpen ? 'accordion-item-content open' : 'accordion-item-content'}>{children}</div>
    )
}

export default AccordianContent;