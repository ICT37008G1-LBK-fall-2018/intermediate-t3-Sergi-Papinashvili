function calculate(a) {
    if (parseInt(a)<=0&&parseInt(a)>=100) {
        alert("გთხოვთ სწორ ინტერვალში მიუთითოთ რიცხვი");
        return;
    }
    alert(`ლუწი რიცხვების ჯამი ${a}_მდე = `+get_sum_of_even(parseInt(a)));
}

function get_sum_of_even(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i%2==0) {
            sum+=i;
        }
    }
    return sum;
}