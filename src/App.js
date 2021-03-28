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
            I am a front-end focused <strong>JavaScript engineer</strong> based
            in the Portland area.
          </h2>
          <p>
            My passion is building fast, user-focused web applications that feel
            intuitive and add value to people’s lives.
          </p>
          <p>
            <em>
              (Currently, I am working on the Subscriber UX team at{" "}
              <a
                className="text-scribd"
                href="https://scribd.com"
                target="_blank"
                rel="noreferrer"
              >
                Scribd
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
