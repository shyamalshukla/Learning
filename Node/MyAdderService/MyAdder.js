function MyAdder(a, b) {
    this.a = parseInt(a);
    this.b = parseInt(b);

    this.Sum = function() {
        return this.a + this.b;
    }    
};

module.exports = { MyAdder : MyAdder };