import './App.css';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Queries from './components/Queries/Queries';
// for toast 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Courses></Courses>
      <Queries></Queries>
    </div>
  );
}

export default App;
