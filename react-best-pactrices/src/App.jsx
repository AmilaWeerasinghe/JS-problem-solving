import Accordian from "./components/Accordian";

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>
      <Accordian className="accordion">
        <Accordian.item id="experience" className="accordion-item" title="we got 20 years of experience">
          <article>
            <p>You can&apos;t go wrong with us</p>
            <p>
              We are in the business of planning highly individualised
              vacation trips for more than 20 years
            </p>
          </article>
        </Accordian.item>
        <Accordian.item id="local" className="accordion-item" title="We are working with local guides">
          <article>
            <p>We are not doing along from our office</p>
            <p>
              We are working with local guides
            </p>
          </article>
        </Accordian.item>
      </Accordian>
    </section>
  </main>
}

export default App;
