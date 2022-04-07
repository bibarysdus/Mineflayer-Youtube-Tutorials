const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'n1.luxxy.tech',
  port: 1298,
  username: 'lookAt'
})

function lookAtNearestPlayer () {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  
  if (!playerEntity) return
  
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}

bot.on('physicTick', lookAtNearestPlayer)
