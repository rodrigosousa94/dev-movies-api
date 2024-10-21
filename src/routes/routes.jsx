import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import MovieDetail from "../components/MovieDetail";
import SerieDetail from "../components/SerieDetail";
import DefaultLayout from "../layout/DefaultLayout"

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/serie/:id" element={<SerieDetail />} />
        <Route path="/detalhe/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

export default Router;
