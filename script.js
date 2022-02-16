let url = 'https://economia.awesomeapi.com.br/json/all'
let opt = document.getElementById('opt');
let entrada = document.getElementById('entrada');
let btn = document.getElementById('btnConv');
let result = document.getElementById('res');
let leg = document.getElementById('leg');


async function change(value) {
    let api = fetch(url)
    let a = await api.then(res => res.json());
    for (let key in a) {
        if (value == key) {
            btn.onclick = function () {
                let rate = a[key].bid;
                let name = a[key].name.replace("/Real Brasileiro", " para Real")
                let valor = entrada.value
                let res = rate * valor

                leg.innerHTML = name;
                result.innerHTML = `${res.toFixed(2)} Reais`
            }
        } 
    }
}
