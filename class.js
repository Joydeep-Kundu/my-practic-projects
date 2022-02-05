class Color {
    constructor(r, g, b) {
        console.log('inside constactor');
        console.log(r, g, b);
        this.r = r;
        this.g = g;
        this.b = b;
    }
    innerRGB() {
        let { r, g, b } = this;
        return `${r},${g},${b}`

    }
    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    hex() {
        let { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()},${a})`
    }
};
const c1 = new Color(132, 23, 45);
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
};
class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'meoow!!!';
    }
    livesLeft() {
        return this.livesLeft;
    }
};
class Dog extends Pet {
    bark() {
        return 'wooof!!!';
    }
};
