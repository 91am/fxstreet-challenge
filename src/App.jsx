import Card from "./components/card/Card"
import WidgetCard from "./components/widget-card/WidgetCard";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div class="layout">
      <div class="sidebar"><Sidebar></Sidebar></div>
      <div class="topbar"><Topbar></Topbar></div>
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
