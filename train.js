//CALLBACK function with setTimeout

// console.log("Jeckma maslaxatlari");
// const list = [
//   "Yaxshi talaba bo'ling", //10-20
//   "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//   "O'zingizga ishlashni boshlang", //30-40
//   "Siz kuchli bo'lgan narsalar qilimg", //40-50
//   "Yoshlarga investitsya qiling", //50-60
//   "Endi dam oling foydasi yo'q", //60
// ];

// function masalaxatBering(a, callback) {
//   if (typeof a !== "number") callback("insert number", "null"); //null - data
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }
// console.log("passed here 0");
// masalaxatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");


//CALLBACK function with setInterval
// console.log("Jeckma maslaxatlari");
// const list = [
//   "Yaxshi talaba bo'ling", //10-20
//   "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//   "O'zingizga ishlashni boshlang", //30-40
//   "Siz kuchli bo'lgan narsalar qilimg", //40-50
//   "Yoshlarga investitsya qiling", //50-60
//   "Endi dam oling foydasi yo'q", //60
// ];

// function masalaxatBering(a, callback) {
//   if (typeof a !== "number") callback("insert number", "null"); //null - data
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }
// console.log("passed here 0");
// masalaxatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");


//define
//ASYC function
// async function masalaxatBering(a) {
//   if (typeof a !== "number") throw("insert number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[0];
//   else if (a > 30 && a <= 40) return list[0];
//   else if (a > 40 && a <= 50) return list[0];
//   else if (a > 50 && a <= 60) return list[0];
//   else {
//     return new Promise((reselve, reject) => {
//       setTimeout(() => {
//         reselve(list[5]);
//       }, 5000);
//     });
//   }
// }

//call
//THEN AND CATCH
// console.log("passed here 0");
// masalaxatBering(25).then(data => {
//   console.log("javob:", data);
// }).catch(err => {
//   console.log('ERROR:', err);
// })
// console.log("passed here 1");
//bu qismida sync function ishga tushgandan keyin asyc ishga tushyapti

//ASYCN call qismi
// async function run() {
//   let javob = await masalaxatBering(25);
//   console.log(javob);
//   javob = await masalaxatBering(70);
//   console.log(javob);
//   javob = await masalaxatBering(40);
//   console.log(javob);
// }
// run();
//bu bizga variablarni qiymatini olmaguncha keyingisiga otmaslikni belgilab beradi


