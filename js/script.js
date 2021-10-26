document.addEventListener('DOMContentLoaded', () => {

    let width,
        height,
        length,
        capacity;
    const resultCapacity = document.querySelector('.capacity-result'),
        resultCapacityWeight = document.querySelector('.capacity-weight-result');


    function calcTotal() {
        if (width && height && length) {
            capacity = width * height * length;
            resultCapacity.textContent = capacity;
        } else {
            resultCapacity.textContent = '';
        }
    }

    function getDynamicValues(selector) {
        const input = document.querySelector(selector)

        input.addEventListener('input', () => {
            switch (input.getAttribute('id')) {
                case 'width' :
                    width = +input.value;
                    break;
                case 'height' :
                    height = +input.value;
                    break;
                case 'length' :
                    length = +input.value;
            }

            calcTotal();
        });
    }

    getDynamicValues('input.width');
    getDynamicValues('input.height');
    getDynamicValues('input.length');

});