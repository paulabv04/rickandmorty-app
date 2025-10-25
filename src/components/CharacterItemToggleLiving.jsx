import { useRef, useState, useEffect } from "react";
const CharacterItemToggleLiving = ({ character, onUpdate}) => {
    const {id, name, status, image} = character;

    const toggleCountRef = useRef(0);
    const [toggleCount, setToggleCount] = useState(0);

    // This updates each render, so we can *see* re-renders
    const renderTime = new Date().toLocaleDateString();

    const incrementRef = () => {
        toggleCountRef.current += 1; //updates silently 
        console.log("Ref count:", toggleCountRef.current);
    };

    const incrementState = () => {
        setToggleCount((prev) => prev + 1);
    };

    const toggleLiving = () => {
        const newStatus = status === "Alive" ? "Dead" : "Alive";
        onUpdate(id, {...character, status: newStatus});
    };

    return (
        <article className="col p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-2 text-indigo-600">{name}</h3>
          <p className="mb-4 text-gray-700 font-medium text-lg">
            Status: <span className="font-bold">{status}</span>
          </p>
    
          {/* Render indicator */}
          <p className="text-sm text-gray-500 mb-2">
            Last render at: <span className="font-mono">{renderTime}</span>
          </p>
    
          {/* Show both counters */}
          <div className="mb-4">
            <p className="text-sm text-gray-700">
              Ref Counter (no re-render): {toggleCountRef.current}
            </p>
            <p className="text-sm text-gray-700">
              State Counter (triggers re-render): {toggleCount}
            </p>
          </div>
          <img
            src={image}
            alt={`${name}'s portrait`}
            className="axe-cursor w-full h-48 object-cover rounded-lg mt-4"
            />

            <button
              onClick={toggleLiving}
              className={`${
                status === "Alive"
                  ? "bg-red-500 hover:bg-red-700"
                  : "bg-green-500 hover:bg-green-700"
              } text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out`}
            >
              {status === "Alive" ? "Mark as Dead" : "Mark as Alive"}
            </button>
              <button
                onClick={incrementRef}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Increment Ref
              </button>
      
              <button
                onClick={incrementState}
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Increment State
              </button>
          </article>
        );
      };
      
      export default CharacterItemToggleLiving;