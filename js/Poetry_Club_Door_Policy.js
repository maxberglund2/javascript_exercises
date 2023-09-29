/* 1 */

const frontDoorResponse = text => console.log(text[0]);
frontDoorResponse('Stands so high');

/* 2 */

const frontDoorPassword = text => {
    text.toLowerCase();
    text = text[0].toUpperCase() + text.slice(1);
    return console.log(text);
}
frontDoorPassword('SHIRE');
frontDoorPassword('shire');

/* 3 */

const backDoorResponse = text => {
    const words = text.split(" ");
    const lastWord = words[words.length - 1];
    console.log(lastWord[0]);
}
backDoorResponse('Stands so high');

/* 4 */

const backDoorPassword = text => {
    text = text[0].toUpperCase() + text.slice(1);
    text += ', please';
    console.log(text);
}
backDoorPassword('horse');