import { useState } from 'react'
import { mockPokemonsData } from '../mock/pokeData'

const PokeCard = () => {
  const sortedPokesByName = mockPokemonsData.sort((a, b) =>
    a.name.localeCompare(b.name)
  )
  const [shinyPoke, setShinyPoke] = useState(null)

  const handleMouseOver = (poke) => setShinyPoke(poke)
  const handleMouseLeave = () => setShinyPoke(null)

  return (
    <section>
      {sortedPokesByName.map((poke) => (
        <article key={poke.name}>
          <h1 style={{ textTransform: 'capitalize' }}>{poke.name}</h1>
          <a href={poke.videoLink} target="_blank" rel="noreferrer">
            <img
              onMouseOver={() => handleMouseOver(poke)}
              onMouseLeave={handleMouseLeave}
              alt={poke.name}
              src={
                shinyPoke === poke
                  ? poke.sprites.front_shiny || poke.sprites.back_shiny
                  : poke.sprites.front_default || poke.sprites.back_default
              }
            />
          </a>
        </article>
      ))}
    </section>
  )
}

export default PokeCard
