const API_HOST = "https://rickandmortyapi.com/api/";

export async function getCharacters(page, filter) {
  try {
    const url = `${API_HOST}/character/?page=${page}&${filter}`;
    const response = await fetch(url);
    const result = await response.json(); 
    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}

export async function getCharactersByName(name) {
  try {
    const url = `${API_HOST}/character/?name=${name}`;
    const response = await fetch(url);
    const result = await response.json(); 
    const newList=[];
    result.results.map((element)=>{
      newList.push({
        id: element.id,
        name: element.name,
        image: element.image
      })
    });
    return newList;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}

export async function getCharacterById(characterId) {
  try {
    const url = `${API_HOST}/character/${characterId}`;
    const response = await fetch(url);
    const result = await response.json(); 
    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}

export async function getFavoritesCharacters(list) {
  try {
    let charactersId='';
    list.forEach(character => charactersId+=`,${character}`);
    const url = `${API_HOST}/character/${charactersId}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Solicitud fallida", error);
  }
}

