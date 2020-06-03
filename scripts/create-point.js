function populateUFs() {
  const UfSelect = document.querySelector("select[name=uf]")
  
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then( (res) => { return res.json()})
  .then( states => {
    for( const state of states) {
      UfSelect.innerHTML =  UfSelect.innerHTML + `<option value="${state.id}">${state.nome}</option>`
    }
  })
}

populateUFs()


function getCities(event) {
  const citySelect = document.querySelector("select[name=city]")
  const stateInput = document.querySelector("input[name=state]")
  const ufValue = event.target.value 
  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


  citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
  citySelect.innerHTML = true

  fetch(url)
  .then(res => res.json())
  .then(cities => {

    for(const city of cities){
      citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
    }
    citySelect.disabled = false
  })
}


document
  .querySelector("select[name=uf]")
  addEventListener("change", getCities)

