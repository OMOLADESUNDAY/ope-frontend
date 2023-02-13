import "./App.css";
import Login from "./component/Login";
// import Lon from './component/Lon';
import {Routes,Route} from 'react-router-dom'
import Lon from "./component/Lon";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Lon />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* <Lon/> */}
    </div>
  );
}

export default App;
