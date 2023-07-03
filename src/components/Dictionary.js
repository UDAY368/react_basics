import React, { useState, useEffect } from "react";

function Dictionary() {
  const [word, setWord] = useState("");

  useEffect(() => {
    console.log("State is Updated !!!", { word });
  }, [word]);

  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <input
          type="text"
          onChange={(e) => {
            setWord(e.target.value);
          }}
          className="my-2 mx-2"
        />
        <h3>Here is the Meaning of the word {word}</h3>
      </div>
    </>
  );
}

export default Dictionary;
