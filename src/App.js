import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';


function App() {
  // Perfect usage of the useState Hook
  const [role , setRole] = useState("dev")
  const isShowEmployee = true
  return (
    <div className='App'>
      
      { isShowEmployee ? <>
        <input type='text' placeholder="Enter Role" className='p-1' onChange={(e) => {
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
