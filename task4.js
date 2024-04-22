export class Player {
  constructor(name, level) {
    this.name = name
    this.level = level
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`)
  }

  levelUp() {
    this.level++; 
  }
}

const player1 = new Player("Tara", 1)
console.log(player1)