document.addEventListener("DOMContentLoaded", function() {
    var box = document.querySelectorAll('.box');

    console.log(typeof box);
    function adicionaClass(elemento, classe) {

        elemento.addEventListener('click', function() {
            this.classList.toggle(classe);
        });
        elemento.classList.toggle(classe);
    }

    function removeClass(elementos, classe) {

        [].forEach.call(elementos, function(el) {

            el.classList.remove(classe);
        });
    }

    [].forEach.call(box, function(el) {
        el.addEventListener('click', function() {
            removeClass(box, 'al');
        });
        el.addEventListener('click', function() {
            adicionaClass(this, 'al');

        });

    });
}, false);