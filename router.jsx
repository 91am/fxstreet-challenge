import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./src/components/layout/Layout";
import CardList from "./src/components/card-list/CardList";
import NotFound from "./src/components/not-found/NotFound";

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
        <Route
        path="*"
        element={
          <NotFound/>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}
