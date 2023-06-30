import './App.css';
import Employee from './components/Employee';

function App() {
  const isShowEmployee = true
  return (
    <div>
      { isShowEmployee ? <>
       <Employee />
       <Employee />
       <Employee />
      </> : <p>There is no Employee to Display</p>}
    </div>
  );
}
export default App;
