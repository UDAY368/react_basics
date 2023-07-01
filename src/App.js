import { useState } from "react";
import "./index.css";
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";
import { v4 as uuidv4 } from "uuid";

function App() {
  // Perfect usage of the useState Hook
  const [employees, setemployees] = useState([
    {
      id: 1,
      name: "uday kumar",
      role: "product Engineer",
      img: "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg",
    },
    {
      id: 2,
      name: "srinu Uppati",
      role: "Product Marketing",
      img: "https://images.pexels.com/photos/756484/pexels-photo-756484.jpeg",
    },
    {
      id: 3,
      name: "Shakeel",
      role: "production Lead",
      img: "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg",
    },
    {
      id: 4,
      name: "Usha Rani",
      role: "Front End Developer",
      img: "https://images.pexels.com/photos/7897404/pexels-photo-7897404.jpeg",
    },
    {
      id: 5,
      name: "Samyuktha Sammu",
      role: "HR Relations",
      img: "https://images.pexels.com/photos/7897404/pexels-photo-7897404.jpeg",
    },
    {
      id: 6,
      name: "Prasanna prassu",
      role: "Java Developer",
      img: "https://images.pexels.com/photos/7897404/pexels-photo-7897404.jpeg",
    },
    {
      id: 7,
      name: "Shankar",
      role: "python Developer",
      img: "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg",
    },
    {
      id: 8,
      name: "Prasad",
      role: "employeee Relations",
      img: "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg",
    },
    {
      id: 9,
      name: "Chiranjeevi",
      role: "CEO",
      img: "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg",
    },
  ]);
  const isShowemployee = true;

  function updateEmployee(id, newName, newRole) {
    const updateEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setemployees(updateEmployees);
  }

  function addEmployee(name, role, image) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: image,
    };
    setemployees([...employees, newEmployee]);
  }

  return (
    <div className="App">
      {isShowemployee ? (
        <>
          <div className=" flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
          <AddEmployee addEmployee={addEmployee} />
        </>
      ) : (
        <p>There is no employeee to Display</p>
      )}
    </div>
  );
}
export default App;
