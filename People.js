class People {
  #name;
  #age;
  #money;

  get name() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;

    return this;
  }

  get age() {
    return this.#age;
  }

  setAge(age) {
    this.#age = age;

    return this;
  }

  get money() {
    return this.#money;
  }

  setMoney(money) {
    this.#money = money;

    return this;
  }

  getData() {
    return {
      name: this.name,
      age: this.age,
      money: this.money
    }
  }
}
