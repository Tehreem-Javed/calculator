const main = () => {
    const num1 = prompt("Enter first number");
    const num2 = prompt("Enter second number");
    const operator = prompt("Enter Operator");
    ;
    if (!num1) {
        alert("Please enter a valid number")
    }

    else if (!num2) {
        alert("Please enter a valid number")
    }

    else {
        const n1 = Number(num1);
        const n2 = Number(num2);
        let result;

        const sum = (n1, n2) => n1 + n2;
         
        const subtract = (n1, n2) => n1 - n2;
    
        const mul = (n1, n2) => n1 * n2;
    
        const div = (n1, n2) => n1 / n2;

        switch (operator) {
            case '+':
                result = sum(n1, n2);
                break;
            case '-':
                result = subtract(n1, n2);
                break;
            case '*':
                result = mul(n1, n2);
                break;
            case '/':
                result = div(n1, n2);
                break;
            default:
                alert("INVALID OPERATOR");
                return;
            }
        alert("RESULT OF GIVEN DIGITS IS: " + result);
    }
}