import tippy from 'tippy.js';

export function tippyPopper() {
    console.log("tippy works");

    tippy('#myButton', {
        content: 'Привет, я Tippy с кастомной темой!',
        theme: 'custom'
    });
}