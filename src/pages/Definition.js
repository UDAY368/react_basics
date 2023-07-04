import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useParams, Link } from "react-router-dom";
import NotFound from "../components/NotFound";

function Definition() {
  const [word, setWord] = useState("");
  const [notFound, setNotFound] = useState(false);
  console.log(useParams());
  let { search } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => {
        const data = response.data[0].meanings;
        setWord(data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setNotFound(true);
        } else {
          // Handle other errors
          console.log("Error:", error);
        }
      });
  };

  if (notFound) {
    return (
      <div className="p-4">
        <NotFound />
        <Link to="/dictionary">Go to Search</Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      {word ? (
        <>
          <h3>This is the Definition Page</h3>
          {word.map((meaning) => {
            return (
              <>
                <p key={uuidv4()}>
                  {meaning.partOfSpeech}: {meaning.definitions[0].definition}
                </p>
              </>
            );
          })}
        </>
      ) : null}
    </div>
  );
}

export default Definition;
