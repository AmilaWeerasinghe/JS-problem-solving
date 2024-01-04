import TabButtons from "../TabButtons/TabButtons";
import { useState } from "react";
import { EXAMPLES } from "../../data";
import Section from "../Section/Section";

const ExampplesSection = () => {
    const [tabContent, setTabContent] = useState('components');
  const [selectedTopic, setSelectedTopic] = useState(false);

  const handleSelect= (selectedButton) => {
    setTabContent(selectedButton);
    setSelectedTopic(true)
  }
    return (
        <Section title='Examples' id='examples'>
             <menu>
            <TabButtons isSelected={tabContent === 'components'} onClick={() => handleSelect('components')}>Components</TabButtons>
            <TabButtons isSelected={tabContent === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButtons>
            <TabButtons isSelected={tabContent === 'props'} onClick={() => handleSelect('props')}>Props</TabButtons>
            <TabButtons isSelected={tabContent === 'state'} onClick={() => handleSelect('state')}>States</TabButtons>
          </menu>
          
            {!selectedTopic && <p>Please select a topic.</p>}
            {selectedTopic && <div id='tab-content'>
               <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>
                {EXAMPLES[tabContent].code}
              </code>
            </pre>
            </div>}
        </Section>
    )
}

export default ExampplesSection;