$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});



function toggleBlock(button, block) {
    button.addEventListener('click', () => {
        if (block.style.display === 'block') {
            block.style.display = 'none';
            button.textContent = '+';
            button.style.backgroundColor = "var(--my_Red)";
        } else {
            block.style.display = 'block';
            button.textContent = '-';
            button.style.backgroundColor = '#242323BF';
        }
    });
}

const plus1 = document.querySelector('.special__plus-1');
const block1 = document.querySelector('#block-1');
toggleBlock(plus1, block1);

const plus2 = document.querySelector('.special__plus-2');
const block2 = document.querySelector('#block-2');
toggleBlock(plus2, block2);

const plus3 = document.querySelector('.special__plus-3');
const block3 = document.querySelector('#block-3');
toggleBlock(plus3, block3);

const plus4 = document.querySelector('.special__plus-4');
const block4 = document.querySelector('#block-4');
toggleBlock(plus4, block4);

const plus5 = document.querySelector('.special__plus-5');
const block5 = document.querySelector('#block-5');
toggleBlock(plus5, block5);



document.addEventListener('click', event => {
    const isClickInsidePlusButton = event.target.classList.contains('special__plus-1') ||
        event.target.classList.contains('special__plus-2') ||
        event.target.classList.contains('special__plus-3') ||
        event.target.classList.contains('special__plus-4') ||
        event.target.classList.contains('special__plus-5');
    const isClickInsideBlock = event.target.classList.contains('special__block-1') ||
        event.target.classList.contains('special__block-2') ||
        event.target.classList.contains('special__block-3') ||
        event.target.classList.contains('special__block-4') ||
        event.target.classList.contains('special__block-5');

    if (isClickInsidePlusButton) {
        // закриваємо будь-який відкритий блок з текстом, окрім поточного
        const openBlocks = document.querySelectorAll('.special__block:not(.special__block--hidden)');
        openBlocks.forEach(block => {
            if (!block.contains(event.target)) {
                block.classList.add('special__block--hidden');
            }
        });

        // відкриваємо потрібний блок
        const wrapper = event.target.closest('.special__wrapper');
        const block = wrapper.querySelector('.special__block');
        block.classList.toggle('special__block--hidden');

        // змінюємо колір спана на активний
        const plusButton = wrapper.querySelector('.special__plus');
        plusButton.textContent = block.classList.contains('special__block--hidden') ? '+' : '-';
        plusButton.style.backgroundColor = block.classList.contains('special__block--hidden') ? 'var(--my_Red)' : 'var(--my_Green)';
    } else if (!isClickInsideBlock) {
        // закриваємо будь-який відкритий блок з текстом
        const openBlocks = document.querySelectorAll('.special__block:not(.special__block--hidden)');
        openBlocks.forEach(block => {
            block.classList.add('special__block--hidden');
        });

        // змінюємо колір спанів на початковий
        const plusButtons = document.querySelectorAll('.special__plus');
        plusButtons.forEach(button => {
            button.textContent = '+';
            button.style.backgroundColor = 'var(--my_Red)';
        });
    }
});





// document.addEventListener('click', event => {
//     const isClickInsidePlusButton = event.target.classList.contains('special__plus-1') ||
//         event.target.classList.contains('special__plus-2') ||
//         event.target.classList.contains('special__plus-3') ||
//         event.target.classList.contains('special__plus-4') ||
//         event.target.classList.contains('special__plus-5');
//     const isClickInsideBlock = event.target.classList.contains('special__block-1') ||
//         event.target.classList.contains('special__block-2') ||
//         event.target.classList.contains('special__block-3') ||
//         event.target.classList.contains('special__block-4') ||
//         event.target.classList.contains('special__block-5');

//     if (!isClickInsidePlusButton && !isClickInsideBlock) {
//         // закриваємо будь-який відкритий блок з текстом
//         const openBlocks = document.querySelectorAll
//             ('.special__block-1, .special__block-2, .special__block-3, .special__block-4, .special__block-5');
//         openBlocks.forEach(block => {
//             block.style.display = 'none';
//         });
//         // змінюємо колір спанів на початковий
//         const plusButtons = document.querySelectorAll
//             ('.special__plus-1, .special__plus-2, .special__plus-3, .special__plus-4, .special__plus-5');
//         plusButtons.forEach(button => {
//             button.textContent = '+';
//             button.style.backgroundColor = 'var(--my_Red)';
//         });
//     }
// });


// const plusButtons = document.querySelectorAll('.special__plus');

// let openBlock = null;

// plusButtons.forEach((plusButton) => {
//     plusButton.addEventListener('click', (event) => {
//         const currentBlockId = event.target.dataset.blockId;
//         const currentBlock = document.querySelector(`#${currentBlockId}`);

//         if (openBlock && openBlock !== currentBlock) {
//             openBlock.style.display = 'none';
//             const openButton = document.querySelector(`[data-block-id="${openBlock.id}"]`);
//             openButton.textContent = '+';
//             openButton.style.backgroundColor = "var(--my_Red)";
//         }

//         if (currentBlock.style.display === 'block') {
//             currentBlock.style.display = 'none';
//             plusButton.textContent = '+';
//             plusButton.style.backgroundColor = "var(--my_Red)";
//             openBlock = null;
//         } else {
//             // закриваємо всі відкриті блоки
//             const openBlocks = document.querySelectorAll('.special__block');
//             openBlocks.forEach(block => {
//                 if (block !== currentBlock) {
//                     block.style.display = 'none';
//                     const openButton = document.querySelector(`[data-block-id="${block.id}"]`);
//                     openButton.textContent = '+';
//                     openButton.style.backgroundColor = "var(--my_Red)";
//                 }
//             });
//             currentBlock.style.display = 'block';
//             plusButton.textContent = '-';
//             plusButton.style.backgroundColor = '#242323BF';
//             openBlock = currentBlock;
//         }
//     });
// });



