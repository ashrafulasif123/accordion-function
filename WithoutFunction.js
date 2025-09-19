/** Chatgpt Version of data-* */
/*** Without Function */
// সব accordion button নির্বাচন
// const accordionButtons = document.querySelectorAll('[data-divtarget]');

// accordionButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         // target elements cache করা
//         const targetDiv = document.getElementById(button.dataset.divtarget);
//         const targetPlus = document.getElementById(button.dataset.plustarget);
//         const targetMinus = document.getElementById(button.dataset.minustarget);

//         // সব accordion বন্ধ করা
//         accordionButtons.forEach(btn => {
//             const div = document.getElementById(btn.dataset.divtarget);
//             const plus = document.getElementById(btn.dataset.plustarget);
//             const minus = document.getElementById(btn.dataset.minustarget);

//             if (btn !== button) {
//                 btn.classList.remove('bg-slate-200');
//                 div.classList.add('!hidden');
//                 plus.classList.remove('!hidden');
//                 minus.classList.add('!hidden');
//             }
//         });

//         // current accordion toggle করা
//         button.classList.toggle('bg-slate-200');
//         targetDiv.classList.toggle('!hidden');
//         targetPlus.classList.toggle('!hidden');
//         targetMinus.classList.toggle('!hidden');
//     });
// });


// function goHome() {
//     window.open('home.html', '_blank')
// }

