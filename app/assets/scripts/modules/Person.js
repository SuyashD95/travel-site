class Person {
    constructor(fullName, favoriteColor) {
        this.fullName = fullName;
        this.favoriteColor = favoriteColor;
    }

    greet() {
        console.log("Hello there, my name is " + this.fullName + "and my favorite color is " + this.favoriteColor);
    }
}

export default Person;