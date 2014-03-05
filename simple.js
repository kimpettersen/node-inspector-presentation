module.exports = (function() {


    function increment(value) {
        value = value + 1;
        console.log(value);
        return value;
    }

    for(var i = 0; i < 10; i++) {
        increment(i);
    }
})();