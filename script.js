let url = 'https://economia.awesomeapi.com.br/json/all'
let opt = document.getElementById('opt');
let entrada = document.getElementById('entrada');
let btn = document.getElementById('btnConv');
let result = document.getElementById('res');
let leg = document.getElementById('leg');


async function change(opcaoSelecionada) {
    let api = fetch(url)
    let dados = await api.then(res => res.json());

    for (let moeda in dados) {
        if (opcaoSelecionada == moeda) {
            btn.onclick = function () {
                let rate = dados[moeda].bid;
                let nome = dados[moeda].name.replace('/Real Brasileiro', ' para Real:');
                let valor = entrada.value;
                let res = rate * valor;

                if (!entrada.value || opt.options[opt.selectedIndex].value == 'NOT') {
                    alert('selecione uma moeda ou valor para converter 😉');
                } else {
                    leg.innerHTML = nome;

                    let num = `R$ ${res.toFixed(2)} Reais`;

                    result.innerHTML = num.replace('.', ',');
                }
            }
        }
    }
}

btn.onclick = function () {
    if (opt.options[opt.selectedIndex].value == 'NOT') {
        alert('selecione uma moeda ou valor para converter 😉');
    }
}

