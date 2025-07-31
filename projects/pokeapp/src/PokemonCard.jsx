/* eslint-disable react/prop-types */

function PokemonCard({ pokemon }) {
  // Convertir el id a cadena de 3 dígitos
  let pokeId = pokemon.id.toString()
  if (pokeId.length === 1) {
    pokeId = "00" + pokeId
  } else if (pokeId.length === 2) {
    pokeId = "0" + pokeId
  }

  // Mapeo de los tipos para generar cada etiqueta <p>
  const tipos = pokemon.types.map((typeInfo, index) => (
    <p key={index} className={`${typeInfo.type.name} tipo`}>
      {typeInfo.type.name}
    </p>
  ))

  return (
    <div className="pokemon">
      <p className="pokemon-id-back">#{pokeId}</p>
      <div className="pokemon-imagen">
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
      </div>
      <div className="pokemon-info">
        <div className="nombre-contenedor">
          <p className="pokemon-id">#{pokeId}</p>
          <h2 className="pokemon-nombre">{pokemon.name}</h2>
        </div>
        <div className="pokemon-tipos">
          {tipos}
        </div>
        <div className="pokemon-stats">
          <p className="stat">{pokemon.height}h</p>
          <p className="stat">{pokemon.weight}w</p>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
