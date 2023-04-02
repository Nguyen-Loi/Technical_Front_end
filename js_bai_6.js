function createButtons() {
    const container = document.getElementById('container')
    const buttonsHTML = animals.map((animal) => `<button>${animal}</button>`).join('')
    container.insertAdjacentHTML('beforeend', buttonsHTML)
    const buttons = document.querySelectorAll('#container button')
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        console.log(button.textContent)
      })
    })
  }
  
  const animals = ['cat','rabbit','dog','fox','fish','racoon','tiger','bear','parrot','snake']
  createButtons();
  