let url = 'https://economia.awesomeapi.com.br/json/all'
let opt = document.getElementById('opt');
let entrada = document.getElementById('entrada');
let btn = document.getElementById('btnConv');
let result = document.getElementById('res');
let leg = document.getElementById('leg');

//pegar só o objeto selecionado

async function change(opcaoSelecionada) {
    let api = fetch(url)
    let dados = await api.then(res => res.json());


    for (let moeda in dados) {

        if (opcaoSelecionada == moeda) {

            btn.onclick = function () {

                let rate = dados[moeda].ask;
                let valor = entrada.value;
                let res = rate * valor;

                let nume = res.toString()
   
                if(!entrada.value || opt.options[opt.selectedIndex].value == 'NOT'){
                    alert('selecione uma moeda ou valor para converter 😉');
                } else if (nume.length == 6) {
                    let mask = new Intl.NumberFormat("pr-BR", { style: "currency", currency: "BRL" }).format(nume);
                    result.innerHTML = mask + " Reais";
                } else {
                    nume = nume + ",00"
                    console.log(nume)
                    result.innerHTML = "R$ " + nume + " Reais";
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

