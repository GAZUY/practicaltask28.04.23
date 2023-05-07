//Задания, в которых необходимо использовать IF.

let what_is_the_number = +(prompt ("введите число для проверки")as string)
if (0 < what_is_the_number) {
  alert ("число положительное");
}else if (0 > what_is_the_number) {
 alert ("число отрицательное") 
}else {
  alert ("число равно нулю")
}



let your_age = +(prompt ("введите свой возраст для проверки корректности")as string)
if (0 < your_age && your_age <= 120) {
  alert ("возраст введён правильно");
}else {
  alert ("некоректные данные")
}



let the_number_module = +(prompt ("введите число для определения модуля")as string)
alert ("модуль числа " + ((the_number_module**2)**0.5));


let h = +(prompt ("Проверка данных: введите часы")as string)
let m = +(prompt ("Проверка данных: введите минуты")as string)
let s = +(prompt ("Проверка данных: введите секунды")as string)
if (0 <= h && h <= 24 && 0 <= m && m < 60 && 0 <= s && s < 60) {
  alert ("данные верны")
}else {
  alert ("данные не верны")
}



let x = +(prompt ("введите координату Х")as string)
let y = +(prompt ("введите координату Y")as string)
if (0 > x && 0 < y) {
  alert ("точка в читверти № 1");
}else if (0 < x && 0 < y) {
  alert ("точка в читверти № 2");
}else if (0 < x && 0 > y) {
  alert ("точка в читверти № 3");
}else if (0 > x && 0 > y) {
  alert ("точка в читверти № 4");
}else if (0 == x && 0 < y) {
  alert ("точка между читвертями № 1 и № 2");
}else if (0 > x && 0 == y) {
  alert ("точка между читвертями № 1 и № 4");
}else if (0 == x && 0 > y) {
  alert ("точка между читвертями № 3 и № 4");
}else if (0 < x && 0 == y) {
  alert ("точка между читвертями № 2 и № 3");
}else {
  alert ("точка соприкосновения всех четвертей")
}

//Задания, в которых необходимо использовать SWITCH.


let month = +(prompt ("введите номер месяца")as string)
switch (month) {
  case 1:
    alert ("январь");
    break;
  case 2:
    alert ("февраль");
    break;
  case 3:
    alert ("март");
    break;
  case 4:
    alert ("апрель");
    break;
  case 5:
    alert ("май");
    break;
  case 6:
    alert ("июнь");
    break;
  case 7:
    alert ("июль");
    break;
  case 8:
    alert ("август");
    break;
  case 9:
    alert ("сентябрь");
    break;
  case 10:
    alert ("октябрь");
    break;
  case 11:
    alert ("ноябрь");
    break;
  case 12:
    alert ("декабрь");
    break;
  default:
    alert("нет такого месяца");
}


    let the_first_number = +(prompt("Для проведения математической операции введите первое число")as string)
    let the_second_number = +(prompt("Для проведения математической операции введите второе число")as string)
    let mathematical_action = prompt("введите действие: +, -, * или /");
    switch (mathematical_action) {
      case "+":
        alert(the_first_number + the_second_number);
        break;
      case "-":
        alert(the_first_number - the_second_number);
        break;
      case "*":
        alert(the_first_number * the_second_number);
        break;
      case "/":
        alert(the_first_number / the_second_number);
        break;
      default:
        alert("ошибка в данных");
    }

    //Задания, в которых необходимо использовать тернарный оператор.

let definition_of_equality1 = +(prompt ("Для определения равенства введите первое число")as string)
let definition_of_equality2 = +(prompt ("Для определения равенства введите второе число")as string)
 definition_of_equality1 > definition_of_equality2 ? alert("первое число больше") : definition_of_equality1 < definition_of_equality2 ? alert("второе число больше") : alert("числа равны");

let multiplicity_of_five = +(prompt ("введите число для определения кратности 5")as string)
multiplicity_of_five == 0 ? alert ("НЕ кратно 5") : multiplicity_of_five % 5 == 0 ? alert ("кратно 5") : alert ("НЕ кратно 5");

let name_of_the_planet = prompt("введите название планеты");
name_of_the_planet === "земля" || name_of_the_planet === "Земля" ? alert("Привет землянин") : alert("Привет инопланетянин");
