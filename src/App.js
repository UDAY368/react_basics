import { useState } from 'react';
import './App.css';
import Employee from './components/Employee';


function App() {
  // Perfect usage of the useState Hook
  const [role , setRole] = useState("dev")
  const isShowEmployee = true
  return (
    <div>
      
      { isShowEmployee ? <>
        <input type='text' onChange={(e) => {
          setRole(e.target.value)
        }}/>
       <Employee name = "Uday Kumar" role = "Product Engineer"/>
       <Employee name = "Srinu" role = {role}/>
       <Employee name = "Shakeel"/>
      </> : <p>There is no Employee to Display</p>}
    </div>
  );
}
export default App;
