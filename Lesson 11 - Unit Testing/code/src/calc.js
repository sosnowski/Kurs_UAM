function Calc() {
    var history = [];

    function add(a,b) {
        var result = a + b;
        history.push(result);
        return result;
    }

    function subtract(a,b) {
        var result = a - b;
        history.push(result);
        return result;
    }

    function multiply(a,b) {
        var result = a * b;
        history.push(result);
        return result;
    }

    function divide(a,b) {
        if (b === 0) {
            throw new Error('Don\'t divide by 0!');
        }
        var result = a / b;
        history.push(result);
        return result;
    }

    function getHistory() {
        return history;
    }

    function clearHistory() {
        history = [];
    }

    this.add = add;
    this.subtract = subtract;
    this.multiply = multiply;
    this.divide = divide;
    this.getHistory = getHistory;
    this.clearHistory = clearHistory;
}
