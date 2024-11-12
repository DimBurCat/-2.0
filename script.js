const clava = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
var num;
var op;
    function func() {
        var result;
        var num1 = Number(document.getElementById("num1").value);
        var num2 = Number(document.getElementById("num2").value);
        switch (op) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;

                
        }
        document.getElementById("result").innerHTML = result;
    }
