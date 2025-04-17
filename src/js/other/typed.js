import Typed from 'typed.js';

export function typed() {
    console.log('typed works');
    // <p class="text">Lorem ipsum dolor sit amet.</p>
    
    // Base
    var typed = new Typed(".text", {
        stringsElement: '.strings',
        typeSpeed: 0,
        backSpeed: 0,
        backDelay: 500,
        startDelay: 1000,
        loop: false,
    });

    // Fade Out
    // var typed2 = new Typed('.text', {
    //     strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
    //     typeSpeed: 0,
    //     backSpeed: 0,
    //     fadeOut: true,
    //     loop: true
    // });

    // Smart Backspace
    // var typed3 = new Typed('.text', {
    //     strings: ['My strings are: <i>strings</i> with', 'My strings are: <strong>HTML</strong>', 'My strings are: Chars &times; &copy;'],
    //     typeSpeed: 0,
    //     backSpeed: 0,
    //     smartBackspace: true, // this is a default
    //     loop: true
    // });

    // on Input
    // var typed4 = new Typed('.text', {
    //     strings: ['Some strings without', 'Some HTML', 'Chars'],
    //     typeSpeed: 0,
    //     backSpeed: 0,
    //     attr: 'placeholder',
    //     bindInputFocusEvents: true,
    //     loop: true
    // });

    // Shuffled
    // var typed5 = new Typed('.text', {
    //     strings: ['1 Some <i>strings</i> with', '2 Some <strong>HTML</strong>', '3 Chars &times; &copy;'],
    //     typeSpeed: 0,
    //     backSpeed: 0,
    //     cursorChar: '_',
    //     shuffle: true,
    //     smartBackspace: false,
    //     loop: true
    // });

    // Bulk Typing
    // var typed6 = new Typed('.text', {
    //     strings: ['npm install^1000\n `installing components...` ^1000\n `Fetching from source...`'],
    //     typeSpeed: 40,
    //     backSpeed: 0,
    //     loop: true
    // });
}