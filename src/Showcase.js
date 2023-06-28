import "./Showcase.css";

function Showcase() {
  let favPokemon = "Bulbasaur";

  let pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>

      <img
        className="poke-img"
        src={require("./images/bulbasaur.jpg")}
        alt={favPokemon}
      ></img>
      <h2>
        {favPokemon}'s type is{" "}
        <span style={{ backgroundColor: "green", color: "white" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is{" "}
        <span style={{ backgroundColor: "white", color: "green" }}>
          {pokeCharacteristics.move}
        </span>
        .
      </h2>
    </div>
  );
}

export default Showcase;
