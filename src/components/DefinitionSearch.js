import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DefinitionSearch() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200  min-h-screen flex justify-center">
      <form
        className=" space-x-4 max-w-[500px] mt-2"
        onSubmit={() => {
          navigate("/dictionary/" + word);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setWord(e.target.value);
          }}
          placeholder="Enter word"
          className="my-2 mx-2 px-2 py-1 rounded shrink min-w-0 w-80"
        />
        <button className="bg-purple-700 hover:bg-purple-600 text-white font-bold px-3 py-1.5  rounded">
          search
        </button>
      </form>
    </div>
  );
}

export default DefinitionSearch;
