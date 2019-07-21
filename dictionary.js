/*
Внимание! Все "ё" заменять на "е".
Регистр значения не имеет.
*/

var swearDictionary = {
  "entries": [
    // ИСКЛЮЧЕНИЯ ИЗ КОРНЕЙ
    {"key": "еб твою мать", "value": "богомолицу твою за ногу"},
    {"key": "пезды", "value": "богомольды"},
    {"key": "хуй пизда джигурда", "value": "Ольга Вадимовна Богомолец"},
    {"key": "пиздабол", "value": "богомол"},
    {"key": "пиздобол", "value": "богомол"},
    {"key": "пиздатый", "value": "богомолистый"},
    {"key": "пиздец", "value": "богомолец"},
    {"key": "долбоеб", "value": "долбомолец"},
    {"key": "хитровыебанный", "value": "хитровымоленный"},
    {"key": "хуев", "value": "ольгуев"},
    {"key": "шароебиться", "value": "шаромолиться"},

    // КОРНИ
    {"key": "пизд", "value": "богомольд"},
    {"key": "бля", "value": "богомоля"},
    {"key": "еб", "value": "дематюк"},
    {"key": "ху", "value": "ольгу"},
  ]
};

let client = new XMLHttpRequest();
client.open('GET', chrome.runtime.getURL("wordlist.txt"), false);
client.send();
var wordlist = client.responseText.split("\n");
