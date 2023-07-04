import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../shared";
function Customer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState("");
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const url = baseUrl + "/api/customers/" + id;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        setCustomer(response.data.customer);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          //   navigate("/404");
          setNotFound(true);
        }
        console.log("Error", error);
      });
  }, [id]);

  return (
    <div className="p-4">
      {notFound ? (
        <p>The customer with {id} is not there in the Database</p>
      ) : null}
      {customer ? (
        <>
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </>
      ) : null}
      <Link to="/customers">Go Back</Link>
    </div>
  );
}

export default Customer;
