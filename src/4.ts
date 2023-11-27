class Key {
    private signature: string;
    constructor() {
        this.signature = new Date().getTime().toString(32);
    }
    getSignature():string {
        return this.signature
    }
}

class Person {
    constructor(private key: Key) { }
    getKey(): Key {
        return key
    }
}

abstract class House {
    protected door = false;
    protected key: Key;
    protected tenants: Person[] = [];
    comeIn(person: Person): void {
        if (this.door) this.tenants.push(person);
    }
    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super();
        this.key = key;
    }
    openDoor(key: Key) {
        if(key.getSignature() === this.key.getSignature()) this.door = true
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };



// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.