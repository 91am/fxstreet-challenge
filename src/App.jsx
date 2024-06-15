import Card from "./components/card/Card"
import WidgetCard from "./components/widget-card/WidgetCard";

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
      <div class="widget"><WidgetCard></WidgetCard></div>
    </div>
  );
}

export default App
