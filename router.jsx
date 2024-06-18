import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./src/components/layout/Layout";
import CardList from "./src/components/card-list/CardList";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <CardList></CardList>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
