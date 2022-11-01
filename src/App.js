import './styles/App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/Pages/Home';
import FicheLogement from './components/Pages/FicheLogement';
import APropos from './components/Pages/APropos';
import Error404 from './components/Error404';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
