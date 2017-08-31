$(document).ready(function(){
  $('.hidden').fadeIn(1000).removeClass('hidden');

  let player = {
    name: null,
    health: 250,
    energy: 100,
    mana: 100,
    inventory: {}
  }

  const setStage = () => {
    player.name = prompt('Please enter your character name:')
    $(characterName).text(player.name)
    $(healthBar).animate({
      width: '100%'
    }, 500).text(player.health)
    $(energyBar).animate({
      width: '100%'
    }, 500)
    $(manaBar).animate({
      width: '100%'
    }, 500)
  }

  $(newGameButton).click(function(){
    console.log('new battle, reset player bars')
    setStage()
  })

  $(attackButton).click(function(){
    console.log('attack, append new attack event to the even log, and consume some energy')
  })
  
})