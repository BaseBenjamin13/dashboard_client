
import './App.css';
import { Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Page404 from './pages/404';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<HomePage />} />


            <Route path="*" element={<Page404 />} />
        </Routes>
    </div>
  );
}

export default App;
