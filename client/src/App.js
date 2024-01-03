import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import appPages from "./pages";

// Styles
import "./styles/App.css";
import "./styles/pages";
import "./styles/components";

// Template
const AppTemplate = () => {
  return (
    <div className="apps-page">
      <Header />
      <Outlet />
    </div>
  );
};

// Render App Pages
function AppsPages() {
  return appPages.map((element) => {
    return (
      <Route
        path={element.path}
        Component={element.component}
        key={element.path}
      />
    );
  });
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/apps" element={<AppTemplate />}>
          {AppsPages()}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
