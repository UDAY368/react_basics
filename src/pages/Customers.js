import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared";

function Customers() {
  const [customers, setCustomers] = useState("");

  useEffect(() => {
    console.log("Fetching!!!");
    const url = baseUrl + "api/customers/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data.customers);
      });
  }, []);
  return (
    <div className="p-4">
      <h3 className="  text-black-300 font-bold mt-4">
        This is a Customers page
      </h3>
      {customers
        ? customers.map((customer) => {
            return (
              <p key={customer.id}>
                <Link to={"/customers/" + customer.id}>
                  Company:{" "}
                  <span className=" text-lg mr-2">{customer.name}</span>
                </Link>
              </p>
            );
          })
        : null}
    </div>
  );
}

export default Customers;
