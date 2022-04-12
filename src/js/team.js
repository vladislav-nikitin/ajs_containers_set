export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error("Такой персонаж уже есть в команде");
    } else {
      this.members.add(character);
    }
  }

  addAll(...character) {
    character.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}

//let monsters = new Team();
//monsters.add('dragon');
//monsters.add('dragon');
//console.log(monsters)
