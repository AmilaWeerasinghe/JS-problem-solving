import { CORE_CONCEPTS } from "../../data";
import CoreConcepts from "../CoreConcepts/CoreConcepts";
import Section from "../Section/Section";

const CoreConceptsSection = ()=>{
    return (
        <Section title='Core Concepts' id='core-concepts'>
            <ul>
          {CORE_CONCEPTS.map((item)=>{
            return(<CoreConcepts key={item.title} {...item}/>)
          })}
        </ul>
        </Section>
    )
}

export default CoreConceptsSection;