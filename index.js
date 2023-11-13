let celsius = document.querySelector('[data-celsius]').value;
let fahrenheit = document.querySelector('[data-fahrenheit]').value;
let btn = document.querySelector('[data-calculate]')
let display = document.querySelector('[data-answer]')
btn.addEventListener('click', up)
function up(){
    let celsius = document.querySelector('[data-celsius]').value;
    let fahrenheit = document.querySelector('[data-fahrenheit]').value;
    let answer = eval(`${celsius} * 9/5 + 32`)
    // let answer2 = eval(`${fahrenheit} / 9 *5 - 32`)
    display.innerText = answer
}