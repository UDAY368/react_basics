import { useState } from "react";
import "./index.css";
import Employee from "./components/Employee";
import { v4 as uuidv4 } from "uuid";

function App() {
  // Perfect usage of the useState Hook
  const [employees, setemployees] = useState([
    {
      name: "uday kumar",
      role: "product Engineer",
      img: "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg",
    },
    {
      name: "srinu Uppati",
      role: "Product Marketing",
      img: "https://images.pexels.com/photos/756484/pexels-photo-756484.jpeg",
    },
    {
      name: "Shakeel",
      role: "production Lead",
      img: "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg",
    },
    {
      name: "Usha Rani",
      role: "Front End Developer",
      img: "https://images.pexels.com/photos/7897404/pexels-photo-7897404.jpeg",
    },
    {
      name: "Samyuktha Sammu",
      role: "HR Relations",
      img: "https://images.pexels.com/photos/7897404/pexels-photo-7897404.jpeg",
    },
    {
      name: "Prasanna prassu",
      role: "Java Developer",
      img: "https://images.pexels.com/photos/7897404/pexels-photo-7897404.jpeg",
    },
    {
      name: "Shankar",
      role: "python Developer",
      img: "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg",
    },
    {
      name: "Prasad",
      role: "employeee Relations",
      img: "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg",
    },
    {
      name: "Chiranjeevi",
      role: "CEO",
      img: "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg",
    },
  ]);
  const isShowemployee = true;
  return (
    <div className="App">
      {isShowemployee ? (
        <>
          {/* <input
            type="text"
            placeholder="Enter Role"
            className="p-1"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          /> */}
          <div className=" flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>There is no employeee to Display</p>
      )}
    </div>
  );
}
export default App;
