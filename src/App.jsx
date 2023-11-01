import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Routes
import { Home } from "./pages";

// Components
import { RootLayout } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
