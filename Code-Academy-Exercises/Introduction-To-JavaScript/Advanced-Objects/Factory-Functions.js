const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop')
    }
  }
}

const tinCan = robotFactory('P-500', true)

tinCan.beep()

console.log(tinCan.model)

//Using a function to create objects
