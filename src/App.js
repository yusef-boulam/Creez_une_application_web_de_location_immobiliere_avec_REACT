import './styles/App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import FicheLogement from './Pages/FicheLogement';
import APropos from './Pages/APropos';
import Error404 from './Pages/Error404';

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
