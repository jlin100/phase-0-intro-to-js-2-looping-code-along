// Code your solutions in this file
function writeCards(namesArray, name) {
    let messages = [];
    for (let i = 0; i < namesArray.length; i++) {
        messages.push((`Thank you, ${namesArray[i]}, for the wonderful ${name} gift!`));
    }
    return messages;
}

function countDown(number) {
    while (number > -1) {
        let decrease = number --;
        console.log(decrease);
    }

}