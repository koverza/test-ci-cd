import LazyLoad from 'vanilla-lazyload';

export function lazyLoading() {
    console.log('lazyLoading works');

    const lazyLoadInstance = new LazyLoad({
        elements_selector: '.lazy',

        callback_loading: el => {
            const wrapper = el.closest('.lazy-wrapper');
            if (wrapper) wrapper.classList.remove('loaded');
        },

        callback_loaded: el => {
            const wrapper = el.closest('.lazy-wrapper');
            if (wrapper) wrapper.classList.add('loaded');
        },

        callback_error: el => {
            const wrapper = el.closest('.lazy-wrapper');
            if (wrapper) wrapper.classList.add('error');
            el.src = 'fallback.gif';
        }
    });
}
