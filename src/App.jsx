import Card from "./components/card/Card"

function App() {
  return(
    <div className="layout">
      <section className="sidebar">
        <ul>
          <li>a</li>
          <li>s</li>
          <li>2</li>
        </ul>
      </section>
      <main className="main">
        <nav className="topbar"></nav>
        <div className="feed-layout">
          <section className="feed">
            <div className="filters"></div>
            <div className="timeline">
          <Card></Card>
            </div>
          </section>
          <section className="widgets"></section>
          {/* <h1>papas</h1> */}
        </div>
      </main>
    </div>
  )
}

export default App
