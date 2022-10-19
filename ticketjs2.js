document.querySelector('#resumen').addEventListener('click', () => {

    const n1cant = parseInt(document.querySelector('#cantidad').value);
    const categ = document.querySelector('#categoria').value;

    let total;

    if (categ == '1') {
        total = (200 * 80) / 100;
    } else if (categ == '2') {
        total = (200 * 50) / 100;
    } else if (categ == '3') {
        total = (200 * 15) / 100;
    }

    total = (200 - total) * n1cant;

    document.querySelector('#total').innerHTML = total;



});