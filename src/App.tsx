import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import User from "./pages/Users";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/users" element={<User />} />
          <Route path="/users/:id" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
