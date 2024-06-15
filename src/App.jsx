import Card from "./components/card/Card"
import WidgetCard from "./components/widget-card/WidgetCard";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Filter from "./components/filter/Filter";

function App() {
  return (
    <div class="layout">
      <div class="sidebar"><Sidebar></Sidebar></div>
      <div class="topbar"><Topbar></Topbar></div>
      <div class="filter"><Filter></Filter></div>
      <main class="main">
        <div class="content">
          <Card></Card>
        </div>
      </main>
      <div class="widget"><WidgetCard></WidgetCard></div>
    </div>
  );
}

export default App
