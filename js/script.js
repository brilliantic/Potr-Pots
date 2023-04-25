$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


function toggleBlock(button, block) {
    button.addEventListener('click', () => {
        const openBlocks = document.querySelectorAll('.special__block-1, .special__block-2, .special__block-3, .special__block-4, .special__block-5');
        openBlocks.forEach(openBlock => {
            // перевіряємо, чи це відкритий блок, крім поточного блоку
            if (openBlock !== block && openBlock.style.display === 'block') {
                openBlock.style.display = 'none';
                const blockId = openBlock.getAttribute('id');
                const buttonId = blockId.replace('block-', '');
                const plusButton = document.querySelector(`.special__plus-${buttonId}`);
                plusButton.textContent = '+';
                plusButton.style.backgroundColor = 'var(--my_Red)';
            }
        });

        if (block.style.display === 'block') {
            block.style.display = 'none';
            button.textContent = '+';
            button.style.backgroundColor = 'var(--my_Red)';
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

    if (!isClickInsidePlusButton && !isClickInsideBlock) {
        // закриваємо будь-який відкритий блок з текстом
        const openBlocks = document.querySelectorAll
            ('.special__block-1, .special__block-2, .special__block-3, .special__block-4, .special__block-5');
        openBlocks.forEach(block => {
            block.style.display = 'none';
        });
        // змінюємо колір спанів на початковий, якщо клік був не по span
        const plusButtons = document.querySelectorAll
            ('.special__plus-1, .special__plus-2, .special__plus-3, .special__plus-4, .special__plus-5');
        plusButtons.forEach(button => {
            button.textContent = '+';
            button.style.backgroundColor = 'var(--my_Red)';
        });
    }
});



// document.addEventListener('click', event => {
//     const clickedElement = event.target;
//     if (clickedElement.matches('.special__plus-1, .special__plus-2, .special__plus-3, .special__plus-4, .special__plus-5')) {
//         const button = clickedElement;
//         const buttonId = button.getAttribute('data-block-id');
//         const block = document.querySelector(`#block-${buttonId}`);
//         toggleBlock(button, block);
//     } else if (clickedElement.matches('.special__block-1, .special__block-2, .special__block-3, .special__block-4, .special__block-5')) {
//         // Do nothing when clicking inside a special__block element
//     } else {
//         // Close any open blocks
//         const openBlocks = document.querySelectorAll('.special__block-1, .special__block-2, .special__block-3, .special__block-4, .special__block-5');
//         openBlocks.forEach(openBlock => {
//             openBlock.style.display = 'none';
//             const blockId = openBlock.getAttribute('id');
//             const buttonId = blockId.replace('block-', '');
//             const plusButton = document.querySelector(`.special__plus-${buttonId}`);
//             plusButton.textContent = '+';
//             plusButton.style.backgroundColor = 'var(--my_Red)';
//         });
//     }
// });
