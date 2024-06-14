import Card from "./components/card/Card"

function App() {
  return (
    <div class="layout">
      <div class="sidebar">sidebar</div>
      <div class="topbar">topbar</div>
      <div class="filter">filters</div>
      <main class="main">
        main
        <div class="content">
          <Card></Card>
        </div>
      </main>
      <div class="widget">widgets</div>
    </div>
  );
}

export default App
