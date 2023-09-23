import React from "react";
import ToyCard from "./ToyCard";


function ToyContainer({ toys, setToys }) {

  function handleDelete(deletedToy) {
    const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id)
    setToys(updatedToys)
  }

  function handleLikes(updatedLikes) {
    const newToys = toys.map((toy) => {
      if (toy.id === updatedLikes.id) {
        return updatedLikes;
      } else {
        return toy
      }
    })

    setToys(newToys)
  }

  return (
    <div id="toy-collection">{toys.map((toy) => (
      <ToyCard toy={toy} key={toy.id} onDeleteToy={handleDelete} onUpdateLikes={handleLikes}/>
    ))}</div>
  );
}

export default ToyContainer;
