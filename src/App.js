import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <aside className="portrait">
        <div className="photo-by">
          Photo by
          <a
            className="text-matthew-thogerson"
            href="http://www.badtactic.com/"
            target="_blank"
            rel="noreferrer"
          >
            Matthew Thogerson
          </a>
        </div>
      </aside>
      <main className="content">
        <div>
          <h1>
            Hi there, I'm <span>Alex</span>!
          </h1>
          <h2>
            I am a <strong>React</strong> / <strong>Node.js</strong> developer
            based in the Portland area.
          </h2>
          <p>
            My game is building fast, user-focused web applications that make
            life easier.
          </p>
          <p>
            <em>
              (Currently, I am working on an e-commerce project at{" "}
              <a
                className="text-nike"
                href="https://nike.com"
                target="_blank"
                rel="noreferrer"
              >
                Nike
              </a>
              .)
            </em>
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
