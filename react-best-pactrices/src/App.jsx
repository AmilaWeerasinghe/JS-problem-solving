import Accordian from "./components/Accordian";

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>
      <Accordian className="accordion">
        <Accordian.item id="experience" className="accordion-item">
          <Accordian.title id="experience" className="accordion-item">We got 20 years of experience</Accordian.title>
          <Accordian.content id="experience">
          <article>
            <p>You can&apos;t go wrong with us</p>
            <p>
              We are in the business of planning highly individualised
              vacation trips for more than 20 years
            </p>
          </article>
          </Accordian.content>
        </Accordian.item>
        <Accordian.item id="local" className="accordion-item">
        <Accordian.title id="local" className="accordion-item">We are working with local guides</Accordian.title>
        <Accordian.content id="local">
        <article>
            <p>We are not doing along from our office</p>
            <p>
              We are working with local guides
            </p>
          </article>
        </Accordian.content>      
        </Accordian.item>
      </Accordian>
    </section>
  </main>
}

export default App;
