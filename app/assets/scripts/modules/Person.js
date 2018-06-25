function Person(fullName, favoriteColor) {
    this.fullName = fullName;
    this.favoriteColor = favoriteColor;
    this.greet = function () {
        console.log("Hello, my name is " + fullName + "and my favorite color is " + favoriteColor);
    }
}

module.exports = Person;