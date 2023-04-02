const domain = 'https://pokeapi.co/api/v2'
const endpoint = 'pokemon'

async function getPokemonNames(pokemonID) {
    const start_time = new Date().valueOf()
    const pokemonName = [];
    for (let i = 0; i < pokemonID.length; i++) {
        pokemonName.push(await getPokemon( `${domain}/${endpoint}/${pokemonID[i]}`))
    }
    return pokemonName
}

// Ý tưởng dùng Promise.race trả về giá trị của Promise đầu tiên hoàn thành (resolve hoặc reject).
async function main(){
    const pokemonId = []
    for (let i = 0; i < 10; i++) {
        pokemonId.push(Math.floor(Math.random() * 600))
    }
    console.time('Operation')
    
    const fetchPokemon= getPokemonNames(pokemonId);
    const timeout = new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('Operation timed out'))
        }, 2000)
      })
    
      try {
        const result = await Promise.race([fetchPokemon, timeout])
        console.log(result)
        console.timeLog("Operation")
      } catch (err) {
        console.log(err.message)
      }
}

main()