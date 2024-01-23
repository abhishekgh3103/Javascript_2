const calculator = {
    add: function (num1, num2){
        return num1 + num2;
    },
    subtract: function (num1, num2){
        return num1 - num2;
    },
    multiplication: function (num1, num2){
        return num1 * num2;
    },
    division: function (num1, num2){
        if(num2 == 0){
            return 'Cannot divide by zero';
        }
        return num1 / num2;
    }
}

module.exports = calculator;