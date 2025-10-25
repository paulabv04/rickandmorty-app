import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import LocationsPage from "./pages/LocationsPage";
import SearchPage from "./pages/SearchPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="sticky top-0 z-50 flex justify-center gap-10 bg-indigo-900 text-white p-6 shadox-lg">
        <div className="flex items-center gap-10">
          
          <NavLink
          to="/"
          className={({isActive}) =>
            `text-lg font-semibold transition-colors duration-200 ${
              isActive ? "text-green-300 underline" : "hover:text-green-300"
            }`
          }
          >
            Home
          </NavLink>

          <NavLink
          to="/about"
          className={({isActive}) =>
            `text-lg font-semibold transition-colors duration-200 ${
              isActive ? "text-green-300 underline" : "hover:text-green-300"
            }`
          }
          >
            About
          </NavLink>

          <NavLink
          to="/characters"
          className={({isActive}) =>
            `text-lg font-semibold transition-colors duration-200 ${
              isActive ? "text-green-300 underline" : "hover:text-green-300"
            }`
          }
          >
            Characters
          </NavLink>

          <NavLink
          to="/locations"
          className={({isActive}) =>
            `text-lg font-semibold transition-colors duration-200 ${
              isActive ? "text-green-300 underline" : "hover:text-green-300"
            }`
          }
          >
            Locations
          </NavLink>

          <NavLink
          to="/search"
          className={({isActive}) =>
            `text-lg font-semibold transition-colors duration-200 ${
              isActive ? "text-green-300 underline" : "hover:text-green-300"
            }`
          }
          >
            Search
          </NavLink>
          </div>
          </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

