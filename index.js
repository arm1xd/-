// var obj = {
//   ru: {
//     1: "Понедельник",
//     2: "Вторник",
//     3: "Среда",
//     4: "Четверг",
//     5: "Пятница",
//     6: "Суббота",
//     7: "Воскресенье",
//   },
//   en: {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursdey",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday",
//   },
// };
// var lang = "ru";
// var day = "3";
// alert(obj[lang][day]);

// a = 3
// b = 5
// if (a > 2 && a < 11 || b >= 6 && b < 14 ) {
//   alert('+')
// } else{
//   alert('-')
// }

// var arr
// var lang = 'en';
// if (lang == 'ru') {
// 	 arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// }
// if (lang == 'en') {
// 	arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
// }
// alert(arr);

// for (let i =1 ; i <= 100; i++) {
// 	if (i % 2 == 0) {
//      document.write(i+'</br>')
// 	}
//   }

// for (let i = 1; i <= 100; i++) {
// 	document.write(i+'</br>')
// 	}
// sum = 0
// for (let index = 1; index <= 100; index++) {
// 	sum+=index
// 	console.log(sum)
// }

// let array = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < array.length; i++) {
//   result += array[i];
// }
// console.log(result);

// var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
// for (key in obj) {
// 	console.log(obj[key])
// }
// var obj = {kolya: '200', vasya: '300', petya: '400'}
// for (key in obj) {
// 	console.log(key+'-зарплата '+obj[key]+' долларов')
// }
// let arr =[2, 5, 9, 15, 0, 4]
// for (let i = 0; i < arr.length; i++) {
// 	if(arr[i]>3&& arr[i]<10){
// 		document.write(arr[i]+'</br>')
// 	}
// }
// var arr = [2, 5, 9, 15, 0, 4, -9];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0){
//         sum += arr[i];
//     }
// }
// console.log(sum);

// let arr = [ 1, 2, 5, 9, 4, 13, 4, 10]
// for (let index = 0; index < arr.length; index++) {
// 	if(arr[index]===4){
// 	console.log(4);
// 	}
// }
// let arr = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < arr.length; i++) {
//   let num = String(arr[i]);
//   let char = num[0];
//   if (char == 1 || char == 2 || char == 5) {
//     console.log(num);
//   }
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < arr.length; i++){
//      document.write('-' + arr[i]);

// }
// document.write('-');

//
// let sum = 0
// for (let i = 1; i <= 100; i++) {
//       sum=sum+i
//            document.write(sum+'</br>')
// }

// let arr = [1, 2, 3, 4, 5]
// for (let index = 0; index < arr.length; index++) {
//    document.write(arr[index]+'</br>')
// }

// let arr = [1, 2, 3, 4, 5]
// let result = 0

// for (let index = 0; index < arr.length; index++) {
//    result+=arr[index]
//    document.write(result+'</br>')
// }

// var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
// for (key in obj) {
//    document.write(obj[key] ,' ', key , '</br>')

// }

// var obj = {ka: '200', va: '300', pa: '400'}
// for (key in obj) {
//   console.log(key[0] +'-'+'зарплата '+obj[key]+'$')
// } как сделать с одним ключем

// let arr = [2, 5, 9, 15, 0, 4]
// for (let index = 0; index < arr.length; index++) {
//    if (arr[index]>3 && arr[index]<10) {
//       console.log(arr[index])
//    }
// }

// let arr = [2, -5, 9, 15, 0, -4]
// for (let index = 0; index < arr.length; index++) {
//    if (arr[index]>0) {
//       console.log(arr[index])
//    }
// }
// let arr = [1, 2, 5, 9, 13,10]
// for (let index = 0; index < arr.length; index++) {
//   if (arr[index]==4) {
//      console.log('jopa')
//      break
//   } else{
//      console.log('vova')
//   }
// }
// for (let index = 0; index < arr.length; index++) {
//    if (arr[index]=== arr[0]) {
//    console.log('jopa')

//    }
// }
// let arr = [10, 20, 30, 50, 4, 7000]

// for (let i = 0; i < arr.length; i++) {
//   let num = String(arr[i]);
//   let char = num[0];
//     console.log(char[0]);
// }
// let jopa = ''
// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let index = 0; index < arr.length; index++) {
//    jopa +='-'+ String(arr[index])
// }
// jopa += '-'
// document.write(jopa)

// arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// for (let index = 0; index < arr.length; index++) {
//    if (index>4) {
//    document.write(arr[index].bold()+'<br>')
//    } else{
//       document.write(arr[index]+'<br>')
//    }
// }

// let day =  new Date();
// console.log(day.getDay());
// arr = [ 'вс','пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// for (let index = 0; index < arr.length; index++) {
//    if (index== day.getDay()) {
//    document.write(arr[index].italics()+'<br>')
//    } else{
//       document.write(arr[index]+'<br>')
//    }
// }

// let n = 1000
// let sum = 0
// while (n/2>50) {
//    n=n/2
//    sum++

// }
// console.log(n)

// // console.log(sum)
// var arr = ['a', 'b', 'c', 'd', 'с'];
// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i] == 'c') {
// 		alert('Есть');
//       break
// 	} else {
// 		alert('Нет'); //выведет на 'a', 'b' и 'd'
// 	}
// }

// var a = 10;
// var b = 3;
// var rest = a % b;
// if (rest != 0) {
// 	alert('Делится с остатком ' + rest);
// } else {
// 	alert('Делится, результат деления: ' + (a / b));
// }

// let res = Math.pow(2,10)
// alert(res)

// let sum = 0;

// let arr = [4, 2, 5, 19, 13, 0, 10];
// for(key of arr){
//     sum += Math.pow(key, 3);
// }
// console.log( Math.sqrt(sum) );

// let res = Math.sqrt(245)
// alert(res)
//http://www.olegkravchenko.info/memory/index.html
//https://quizlet.com/518466189/js-exercises-flash-cards/

// let res = Math.sqrt(587)
// console.log(res.toFixed(5));

// let result = Math.sqrt(587);

// let roundingUp = Math.ceil(result);
// let roundingDown = Math.floor(result);
// // объект
// let objNumber = {'ceil' : roundingUp, 'floor' : roundingDown}

// console.log(objNumber);

// console.log(Math.max(4, -2, 5, 19, -130, 0, 10.))
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10.))

// function getRandomInt(min , max){
// 	return Math.round(Math.random() * (max-min ))
// }
// for (let index = 0; index < 30; index++) {
// console.log(getRandomInt(1,100))

// }
// var arr = [];
// for (i = 0; i < 10; i++) {
// 	arr[i] = Math.round(Math.random() * (1000));
// }
// alert(arr);

// let arr = [12, 15, 20, 25, 59, 79];
// let sum = 0;
// let res;
// for (let i = 0; i < arr.length; i++) {
// sum += arr[i];
// res = sum /arr.length;

// }console.log(res)
// var str = 'aaa@bbb@ccc';
// alert(str.replace(/@/g, '!')); //получим 'aaa!bbb!ccc'

// var str = 'aaa bbb ccc';
// alert(str.substring(4 , 7))
// alert(str.slice(4 , 7))
// alert(str.substr(4 ,3))

// let str = 'я учу javascript!';
// str = str.split('  ');
// document.write(str);

////////////////////////////////////////////////////////////////////////////////

// let arr = ['Hello', 'World', '!'];
// let str = ''
// for (let i = 0; i < arr.length; i++) {
// 	str += arr[i];
// 	}
// 	document.write(str);

// 	let num = '12345';
// 	let nNum = 1;
// 	for (let i = 0; i < num.length; i++) {
// 	nNum *= num[i];
// 	}
// 	document.write(nNum);

// var obj = {a: 1, b: 2, c: 3};
// document.write(obj.c)
// document.write(obj['c'])

// let days = { 1: "mn", 2: "ts", 3: "wd", 4: "th", 5: "fr", 6: "st", 7: "sn" };
// document.write(days[3]);
// let date = new Date();
// let day = date.getDay();
// document.write(days[day]);


// let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
// document.write(arr[1][0]);

// let min = Math.round(Math.random() * 60);

// let test = true;
// test ? document.write('right') : document.write('false');

// let a = 2;
// if (a == 0 || a == 2) {
// a += 7;
// } else {
// a /= 10;
// }
// alert(a);


// let num = 4;
// switch (num) {
// case 1:
// document.write('winter');
// break;
// case 2:
// document.write('spring');
// break;
// case 3:
// document.write('summer');
// break;
// case 4:
// document.write('outumn');
// break;
// }

// let str = 'abcd';
// if (str[0] == 'a') {
// document.write('Yes')
// } else {
// document.write('No')
// }

// let n = 1;
// while (n <= 50) {
// document.write(n + '<br>');
// n++;
// }
// for (let i = 1; i <= 50; i++) {
// document.write(i + '<br>');
// }

// obj:
// let obj = {
// 'Минск' : 'Беларусь',
// 'Москва': 'Россия',
// 'Киев': 'Украина'
// }
// for (let key in obj) {
// 	document.write(key + ' is ' + obj[key] + '<br>');
// 	}

// 	let n = 0;
// while (n <= 100) {
// if (n%2 == 0) {
// document.write(n + ' ');
// }
// n++;
// }


// let n = 1;
// let sum = 0;
// while(n <= 100) {
// sum += n;
// n++;
// }
// document.write(sum);

// let sum = 0;
// for (let n = 1; n <= 100; n++) {
// sum += n;
// }
// document.write(sum)

// let arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] > 3 && arr[i] < 10) {
// document.write(arr[i] + '<br>')
// }
// }


// let arr = [1, -54, 3, 6, -34, -5, 7, 9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] > 0) {
// sum += arr[i];
// }
// }
// document.write(sum);

////////////////////////////////////////////////////////////////////////////////////////////////////////



// function jopa(num1,num2 ) {
// 	return num1+num2

// }

// alert(jopa(1))








// function jopa(a ,b ,c ) {
// 	return (a-b)/c
// }
// alert(jopa(15,25,10))


// let num = 7
// let result = num
// switch (result) {
// case 1:
// alert('Понедельник');
// break;
// case 2:
// alert('Вторник');
// break;
// case 3:
// alert('Среда');
// break;
// case 4:
// alert('Четверг');
// break;
// case 5:
// alert('Пятница');
// break;
// case 6:
// alert('Суббота');
// break;
// case 7:
// alert('Воскресенье');
// break;
// default:
// ('vov4ek')
// break
// }







// let jopa = '1'
// let vov4ek = Number(jopa)
// let res = vov4ek+vov4ek+vov4ek;
// console.log(res)



// let jopa = 1
// let vov4ek = String(jopa)
// let res = vov4ek+vov4ek+vov4ek;
// console.log(res)


let i = 0
 while (i < 3){
	 alert(i)
	 i++
 }