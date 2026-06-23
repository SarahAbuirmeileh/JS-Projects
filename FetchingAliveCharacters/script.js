const characterList =  document.getElementById("characterList")

const fetchData = async URL =>{
    try {
        const response = await fetch(URL)
        const data = await response.json()
        let filtered = data.results.filter(d=>{return d.status==="Alive"})
        return filtered.slice(0,50)
    }
    catch(error){
        characterList.textContent = `An error happened ._. \n${error}`
    }
    
}

const displayResult = data =>{
    data.forEach(character => {
        let item = document.createElement('li')
        item.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <div>
            <h3>${character.name}</h3>
            <p>Location: ${character.location}</p>
            <p>Species: ${character.species}</p>
            <p>Gender: ${character.gender}</p>
        </div>
        `;

        characterList.appendChild(item);
    });
}

const main = async ()=>{
    const data = await fetchData("https://rickandmortyapi.com/api/character")
    displayResult(data)
}

main()

