const template = document.querySelector('.colorTemplate').innerText;
// eslint-disable-next-line no-undef
const colorsTemplate = Handlebars.compile(template);

const templates = document.querySelector('.carTemplate').innerText;
// eslint-disable-next-line no-undef
const colorTemplate = Handlebars.compile(templates);

const colorElem = document.querySelector('.colors');
const brandElem = document.querySelector('.brands');
const carsElem = document.querySelector('.cars');
// eslint-disable-next-line no-undef
axios
    .get('http://api-tutor.herokuapp.com/v1/colors')
    .then(function (result) {
        colorElem.innerHTML = colorsTemplate({ color: result.data });
    });

// eslint-disable-next-line no-undef
axios
    .get('http://api-tutor.herokuapp.com/v1/makes')
    .then(function (result) {
        brandElem.innerHTML = colorsTemplate({ color: result.data });
    });

// eslint-disable-next-line no-undef
axios
    .get('http://api-tutor.herokuapp.com/v1/cars')
    .then(function (result) {
        carsElem.innerHTML = colorTemplate({ color: result.data });
    });
