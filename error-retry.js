function primitiveMultiply(num1, num2) {
  var randomChance = Math.floor(Math.random() * 2)
  try {
    if (randomChance) {
      throw new MultiplicatorUnitFailure('FAIL!! Retrying...', num1, num2)
    } else {
      return num1 * num2
    }
  } catch (err) {
    if (err instanceof MultiplicatorUnitFailure) {
      console.log(err.message)
      return primitiveMultiply(num1, num2)
    }
  }
}

function MultiplicatorUnitFailure(message) {
  this.message = message
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype)
MultiplicatorUnitFailure.prototype.name = 'MultiplicatorUnitFailure'

console.log(primitiveMultiply(5, 2))
