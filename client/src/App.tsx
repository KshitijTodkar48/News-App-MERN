import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import Createpost from './components/Createpost';

function App() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/createPost" element={<Createpost />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App
