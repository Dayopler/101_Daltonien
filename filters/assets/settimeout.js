 let SetTimeout = function setTimeout() {
    setTimeout(function() {
        window.scrollBy(1, 1);
        window.scrollBy(-1, -1);
    }, 1);
}

SetTimeout();

export {
    setTimeout
};