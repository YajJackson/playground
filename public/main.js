$(document).ready(function(){
  $('.hidden').fadeIn(1000).removeClass('hidden');

  let player = {
    name: '',
    health: 0,
    energy: 0,
    mana: 0,
    inventory: {}
  }

  const setStage = () => {
    player.name = prompt('Please enter your character name:')
    player.health = 100
    player.energy = 100
    player.mana = 100

    $(characterName).text(player.name)
    $(healthBar).animate({
      width: `${player.health}%`
    }, 500, "linear").text(player.health)
    $(energyBar).animate({
      width: `${player.energy}%`
    }, 500, "linear")
    $(manaBar).animate({
      width: `${player.mana}%`
    }, 500, "linear")
  }

  $(newGameButton).click(function(){
    console.log('new battle, reset player values and update bars')
    setStage()
  })

  // Attack stuff
  const tryAttack = (cost) => {
    if(cost <= player.energy){
      player.energy -= cost
      $(energyBar).animate({
        width: `${player.energy}%`
      }, 500, "linear")
      return true
    } else {
      alert('Not enough energy')
      return false
    }
  }

  const attackEvent = (success, result) => {
    if(success){
      let li = document.createElement('li')
      $(li).addClass("list-group-item list-group-item-danger").text(result)
      $(eventLog).append(li)
    }
  }

  $(attackButton).click(function(){
    
    if(tryAttack(15)){
      console.log('Attack successful')
      attackResult = `${player.name} dealt 20 damage`
      attackEvent(true, attackResult)
    } else {
      console.log('Attack failed')
    }
  })

  // Rest stuff
  const restEvent = () => {
    let li = document.createElement('li')
    $(li).addClass("list-group-item list-group-item-secondary").text(`${player.name} rests for a moment, attempting to regain some strength`)
    $(eventLog).append(li)
  }

  const restHero = () => {
    if(player.energy < 100){
      if(player.energy <= 75){
        player.energy += 25
      } else {
        player.energy = 100
      }
      $(energyBar).animate({
        width: `${player.energy}%`
      }, 500, "linear")
    }
    restEvent()
  }

  $(restButton).click(function(){
    console.log('Rest child, you will pass a turn, but regenerate energy to get back into the fight.')
    restHero()
  })
  
})