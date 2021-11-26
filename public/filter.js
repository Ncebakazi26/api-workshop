const filterdata = document.querySelector('.carFilter');
// eslint-disable-next-line no-undef
const filterColor = Handlebars.compile(filterdata.innerText);

const filterElem = document.querySelector('.display');
const buttonElem = document.querySelector('.button');

buttonElem.addEventListener('click', function () {
    const colorElem = document.querySelector('.color').value;
    console.log(colorElem);
    const brandElem = document.querySelector('.brand').value;
    console.log(brandElem);

    // eslint-disable-next-line no-undef
    axios
        .get(`http://api-tutor.herokuapp.com/v1/cars/make/${brandElem}/color/${colorElem}`)
        .then(function (result) {
            console.log(result.data);
            filterElem.innerHTML = filterColor({ filters: result.data });
        });
});
