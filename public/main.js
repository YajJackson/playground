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
    }, 500).text(player.health)
    $(energyBar).animate({
      width: `${player.energy}%`
    }, 500)
    $(manaBar).animate({
      width: `${player.mana}%`
    }, 500)
  }

  $(newGameButton).click(function(){
    console.log('new battle, reset player values and update bars')
    setStage()
  })

  const tryAttack = (cost) => {
    if(cost <= player.energy){
      player.energy -= cost
      $(energyBar).animate({
        width: `${player.energy}%`
      })
      return true
    } else {
      alert('Not enough energy')
      return false
    }
  }
  // <li class="list-group-item list-group-item-danger">This is a danger list group item</li>
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
      attackResult = `${player.name} dealt 20 damage.`
      attackEvent(true, attackResult)
    } else {
      console.log('Attack failed')
    }
  })
  
})