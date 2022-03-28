let lang = "ru";

if (lang === 'ru') {
  console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресение.');
} else if (lang === 'en') {
  console.log('Monday, tuesday, wednesday, thursday, friday, saturday, sunday.');
} else {
  console.log('Что то пошло не так');
}

switch (true) {
  case lang === "ru":
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресение.');
    break;
  case lang === "en":
    console.log('Monday, tuesday, wednesday, thursday, friday, saturday, sunday.');
    break
  default:
    console.log('Что пошло не так');
}

let array = [];
array.ru = ['Понедельник, вторник, среда, четверг, пятница, суббота, воскресение.'];
array.en = ['Monday, tuesday, wednesday, thursday, friday, saturday, sunday.'];
console.log(array[lang]);

let namePerson = "Александр";
namePerson === "Артем" ? console.log("директор") : namePerson === "Александр" ? console.log("преподаватель") : console.log("студент");