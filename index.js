let strings = "";

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('#btn');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            strings = eval(strings);
            input.value = strings;
        }else if(e.target.innerHTML == 'Ac'){
            strings = "";
            input.value = strings;
        }else if(e.target.innerHTML == 'DEL'){
            strings = strings.substring(0, strings.length-1);
            input.value = strings;
        }else{
        console.log(e.target);
        strings = strings + e.target.innerHTML;
        input.value = strings;
        }
    })

})

