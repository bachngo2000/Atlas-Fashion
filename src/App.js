import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';

const Navigation = () => {
  return (
    <div>
      <div>
        <h1></h1>
      </div>
    </div>
  )
}
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default App;