import allBagels from '../inventory.json' assert { type: 'json' }

class Bagel {
  constructor(sku, qty = 1) {
    this.sku = sku
    this.qty = qty
    this.loadBagels()
  }

  loadBagels() {
    const bagelData = allBagels.inventory.find(
      (bagel) => bagel.sku === this.sku
    )
    if (bagelData) {
      this.price = parseFloat(bagelData.price)
      this.name = bagelData.name
      this.variant = bagelData.variant
    } else {
      console.log(`Bagel with SKU ${this.sku} not found.`)
      throw new Error(`Bagel with SKU ${this.sku} not found.`)
    }
  }

  showPrice(sku) {
    const bagelToCheck = allBagels.inventory.find((bgl) => bgl.sku === this.sku)
    if (bagelToCheck) {
      console.log(this.price)
      return this.price
    } else {
      const errorMessage = `Bagel with SKU ${sku} not found.`
      console.log(errorMessage)
      throw new Error(errorMessage)
    }
  }
}

class Basket {
  constructor(basketSize = 5) {
    this.basketSize = basketSize
    this.bagelsIn = 0
    this.basket = []
  }

  addBagels(sku, qty) {
    for (let i = 0; i < qty; i++) {
      const bagel = new Bagel(sku, 1)
      this.bagelsIn += 1
      if (this.bagelsIn > this.basketSize) {
        const errorMessage = `Basket is full`
        console.log(errorMessage)
        throw new Error(errorMessage)
      }
      if (bagel) {
        this.basket.push(bagel)
      } else {
        const errorMessage = `There is no bagel with sku ${sku} `
        console.log(errorMessage)
        throw new Error(errorMessage)
      }
    }
    return this.basket
  }

  removeBagels(sku) {
    const bagelToRemove = this.basket.findIndex((bg) => bg.sku === sku)
    if (bagelToRemove !== -1) {
      this.basket.splice(bagelToRemove, 1)
      return this.basket
    } else {
      const errorMessage = `There is no bagel of this type in the basket`
      console.log(errorMessage)
      throw new Error(errorMessage)
    }
  }

  showCost() {
    let total = 0
    for (let i = 0; i < this.basket.length; i++) {
      total += this.basket[i].price
    }
    console.log(Number(total.toFixed(2)))
    return Number(total.toFixed(2))
  }

  //   printReceipt() {
  //     let recQty = 0

  //     process.stdout.write(`~~~ Bob's Bagels ~~~\n`);
  //     process.stdout.write(Date().toString() + '\n');
  //     process.stdout.write(`-------------------------------------- \n`);

  //     for (let i = 0; i < this.basket.length; i++) {
  //       process.stdout.write(
  //         `${this.basket[i].variant} ${this.basket[i].name} ${this.basket[i].qty} ${this.basket[i].price} \n`
  //       )
  //     }
  //     process.stdout.write(`--------------------------------------  \n`);
  //     process.stdout.write(`Total: ${this.showCost()}` + '\n');
  //     process.stdout.write('Thank you for your order!');
  //   }

  printReceipt() {

  }
}

// const bgl = new Bagel('BGLO', 1);
// bgl.showPrice('BGLO')

const nb = new Basket(10)

// nb.addBagels('BGLO', 3)
// nb.addBagels('BGLP', 2)
// nb.addBagels('BGLS', 5)

// nb.showCost()

// console.log(nb.showCost());



export { Bagel }
export default Basket
