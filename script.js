const button = document.getElementById('Convert-button')
const select = document.getElementById('Change')
const inputValue = document.getElementById('input-real')


const bitcoin = 0.0000082
const euro   = 6
const dolar = 5
const ConvertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const valueRealText = document.getElementById('TextReal')
    const valueDolarText = document.getElementById('TextDolar')


    valueRealText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReal);

    let valor = inputReal / dolar

    if (select.value === 'US$ Dólar americano') {
        valueDolarText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(valor);
    }

    if (select.value === '€ Euro') {
        valueDolarText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReal / euro);
    }
    if(select.value === 'Bitcoin'){
        valueDolarText.innerHTML = (inputReal * bitcoin).toFixed(7)
    }


}
const ChangeCoin = () => {
    const ValueCoin = document.getElementById('TextDolar')
    const NameCoin = document.getElementById('NameCoin')
    const img = document.getElementById('Img-Dolar')

    if (select.value === '€ Euro') {
        img.src = './Assets/Euro.png'
        NameCoin.innerHTML = 'Euro'
        ValueCoin.innerHTML = '€ 0,00'

    }
    if (select.value === 'US$ Dólar americano') {
        img.src = './Assets/estados-unidos (1) 1.png'
        NameCoin.innerHTML = 'Dolar americano'
        ValueCoin.innerHTML = 'US$ 0,00'
    }
    if(select.value === 'Bitcoin'){
        img.src = './Assets/Bitcoin.png'
        NameCoin.innerHTML = 'Bitcoin'
        ValueCoin.innerHTML = '0.0'
    }
    ConvertValues()
}


button.addEventListener('click', ConvertValues)
select.addEventListener('change', ChangeCoin)