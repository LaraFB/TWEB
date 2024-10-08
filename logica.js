function Mostra() {
    var x = document.getElementById('butoes_calcular');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function coeficiente1() {
    var cof = 1;
    var idade = document.getElementById("idade_imovel").value;
    if (idade>10) {
        cof=0.9;
    }
    else if (idade>5 && idade<=10) {
        cof=0.95
    }
    return(cof);
}

function coeficiente2() {
    if (document.getElementById('temgaragem').checked) {
        return 1
    }
    else{
        return 0.95
    }
}

function coeficiente3() {
    if (document.getElementById('transporte').checked) {
        return 1
    }
    else{
        return 0.9
    }
}

function checkObjecto (obj) {
    if (obj.checked) {
        return "Sim";
    }
    else {
        return "Não";
    }
}

function calcular() {
    var area = document.getElementById("area_tamanho").value;
    var idade = document.getElementById("idade_imovel").value;
    if (area==''){
        alert("Deve preencher campo área!");
        return false;
    }
    if (area==0){
        alert("A área não pode ser zero!");
        return false;
    }
    if (idade==''){
        alert("Deve preencher campo idade!");
        return false;
    }
    var x = document.getElementById('zonas');
    x.style.display = 'block';
    var c1 = coeficiente1();
    var c2 = coeficiente2();
    var c3 = coeficiente3();
    
    let vz1 = 1200;
    let vz2 = 2000;
    let vz3 = 2500;
    var area_cof = area * c1 * c2 * c3;
    document.getElementById("totalZ1").innerHTML = Number(area_cof * vz1).toLocaleString();
    document.getElementById("totalZ1").value = area_cof * vz1;
    document.getElementById("totalZ2").innerHTML = Number(area_cof * vz2).toLocaleString();
    document.getElementById("totalZ2").value = area_cof * vz2;
    document.getElementById("totalZ3").innerHTML = Number(area_cof * vz3).toLocaleString();
    document.getElementById("totalZ3").value = area_cof * vz3;
    document.getElementById("precoZ1").innerHTML = Number(vz1).toLocaleString();
    document.getElementById("precoZ2").innerHTML = Number(vz2).toLocaleString();
    document.getElementById("precoZ3").innerHTML = Number(vz3).toLocaleString();
    document.getElementById("areaZ1").innerHTML = Number(area).toLocaleString();
    document.getElementById("areaZ2").innerHTML = Number(area).toLocaleString();
    document.getElementById("areaZ3").innerHTML = Number(area).toLocaleString();
    var tipologia = document.querySelector('input[id="t"]:checked').value;
    document.getElementById("tipologiaZ1").innerHTML = tipologia;
    document.getElementById("tipologiaZ2").innerHTML = tipologia;
    document.getElementById("tipologiaZ3").innerHTML = tipologia;
    var idade = document.getElementById("idade_imovel").value;
    document.getElementById("idadeZ1").innerHTML = Number(idade).toLocaleString();
    document.getElementById("idadeZ2").innerHTML = Number(idade).toLocaleString();
    document.getElementById("idadeZ3").innerHTML = Number(idade).toLocaleString();
    var garagem = checkObjecto (document.getElementById('temgaragem'));
    document.getElementById("garagemZ1").innerHTML = garagem;
    document.getElementById("garagemZ2").innerHTML = garagem;
    document.getElementById("garagemZ3").innerHTML = garagem;
    var proximidade = checkObjecto ( document.getElementById('transporte'));
    document.getElementById("proximidadeZ1").innerHTML = proximidade;
    document.getElementById("proximidadeZ2").innerHTML = proximidade;
    document.getElementById("proximidadeZ3").innerHTML = proximidade;
}

function financiamento() {
    var x = document.getElementById('finaciamento');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    return false;
}

function simular() {
    var x = document.getElementById('emprestimo');
    if (x.style.display == 'none') {
        if (calcularFinanciamento()) { 
            x.style.display = 'block';
        }
    } else {
        x.style.display = 'none';
    }
    return false;
}

var zona_1 = document.querySelector(".zona_1");
var esconder_1 = document.querySelector(".esconderZ1");

zona_1.addEventListener("mouseover", function () {
    esconder_1.setAttribute("style", "display:block");  
    zona_1.setAttribute("style", "background: #21a4b8; border: 2px solid #e8f6f8; color: #fff;");
});
zona_1.addEventListener("mouseout", function () {
    esconder_1.setAttribute("style", "display:none");  
    zona_1.setAttribute("style", "background: #e8f6f8; border: 2px solid #21a4b8; color: #000;");
});

var zona_2 = document.querySelector(".zona_2");
var esconder_2 = document.querySelector(".esconderZ2");
zona_2.addEventListener("mouseover", function () {
    esconder_2.setAttribute("style", "display:block");  
    zona_2.setAttribute("style", "background: #21a4b8; border: 2px solid #e8f6f8; color: #fff;");
});
zona_2.addEventListener("mouseout", function () {
    esconder_2.setAttribute("style", "display:none");  
    zona_2.setAttribute("style", "background: #e8f6f8; border: 2px solid #21a4b8; color: #000;");
});

var zona_3 = document.querySelector(".zona_3");
var esconder_3 = document.querySelector(".esconderZ3");
zona_3.addEventListener("mouseover", function () {
    esconder_3.setAttribute("style", "display:block");  
    zona_3.setAttribute("style", "background: #21a4b8; border: 2px solid #e8f6f8; color: #fff;");
});
zona_3.addEventListener("mouseout", function () {
    esconder_3.setAttribute("style", "display:none");
    zona_3.setAttribute("style", "background: #e8f6f8; border: 2px solid #21a4b8; color: #000;");
});

var selecionado_1 = document.querySelector(".selecionadoZ1");
var selecionado_2 = document.querySelector(".selecionadoZ2");
var selecionado_3 = document.querySelector(".selecionadoZ3");
zona_1.addEventListener("click", function () {
    selecionado_1.setAttribute("style", "background:green; height: 2px; width:200px");
    selecionado_2.setAttribute("style", "");
    selecionado_3.setAttribute("style", "");
});
zona_2.addEventListener("click", function () {
    selecionado_2.setAttribute("style", "background:green; height: 2px; width:200px");
    selecionado_1.setAttribute("style", "");
    selecionado_3.setAttribute("style", "");
});
zona_3.addEventListener("click", function () {
    selecionado_3.setAttribute("style", "background:green; height: 2px; width:200px");
    selecionado_2.setAttribute("style", "");
    selecionado_1.setAttribute("style", "");
});

function gerarSpread(){
   return Number(Number(Math.random() * 5).toFixed(2));
}

var arr = ["abanca", "activobank", "bankinter", "barclays", "bpi", "caixageraldedepositos", "creditoagricola","santander"];
function gerarBanco(){
    return "bancos/"+arr[Math.floor(Math.random() * arr.length)]+".jpg";
}

function calcularFinanciamento(){
    var valor = 0;
    if (selecionado_1.style.width != '') {
        valor = document.getElementById("totalZ1").value;
    }
    else if (selecionado_2.style.width != '') {
        valor = document.getElementById("totalZ2").value;
    }
    else if (selecionado_3.style.width != '') {
        valor = document.getElementById("totalZ3").value;
    }
    var prazo = parseInt(document.getElementById("prazo").value);
    if (isNaN(prazo)){
        alert("Deve preencher o campo prazo!");
        return false;
    }
    if (prazo>41){
        alert("O prazo não pode ser maior de 40 anos!");
        return false;
    }
    if (valor == 0){
        alert("Deve selecionar uma zona!");
        return false;
    }
    var entrada = parseInt(document.getElementById("montante_inicial").value);
    if (isNaN(entrada)){
        alert("Deve preencher o campo entrada inicial!");
        return false;
    }
    if (entrada>valor){
        alert("A entrada não pode ser superior ao valor do imóvel!");
        return false;
    }
    if (entrada<valor*0.1){
        alert("A entrada tem que ser superior a 10% do valor do imóvel!");
        return false;
    }
    
    document.getElementById("montanteZ1").innerHTML = Number(valor).toLocaleString();
    document.getElementById("montanteZ2").innerHTML = Number(valor).toLocaleString();
    document.getElementById("montanteZ3").innerHTML = Number(valor).toLocaleString();
    var emprestimo = valor - entrada;
    document.getElementById("emprestimoZ1").innerHTML = Number(emprestimo).toLocaleString();
    document.getElementById("emprestimoZ2").innerHTML = Number(emprestimo).toLocaleString();
    document.getElementById("emprestimoZ3").innerHTML = Number(emprestimo).toLocaleString();

    let taxafixa = 0.5;
    var spread1 = gerarSpread();
    var spread2 = gerarSpread();
    var spread3 = gerarSpread();      
    var taxa1 = taxafixa + spread1;
    var taxa2 = taxafixa + spread2;
    var taxa3 = taxafixa + spread3;
    document.getElementById("juroZ1").innerHTML = taxa1.toLocaleString();
    document.getElementById("juroZ2").innerHTML = taxa2.toLocaleString();
    document.getElementById("juroZ3").innerHTML = taxa3.toLocaleString();
    document.getElementById("spreadZ1").innerHTML = spread1.toLocaleString();
    document.getElementById("spreadZ2").innerHTML = spread2.toLocaleString();
    document.getElementById("spreadZ3").innerHTML = spread3.toLocaleString();
    document.getElementById("valor_entradaZ1").innerHTML = entrada.toLocaleString();
    document.getElementById("valor_entradaZ2").innerHTML = entrada.toLocaleString();
    document.getElementById("valor_entradaZ3").innerHTML = entrada.toLocaleString();
    var banco1 = gerarBanco();
    var banco2;
    do {
        var banco2 = gerarBanco();
    } while (banco1==banco2)
    var banco3;
    do {
        var banco3 = gerarBanco();
    } while (banco1==banco3 || banco2==banco3)
    document.getElementById("banco1").src = banco1;
    document.getElementById("banco2").src = banco2;
    document.getElementById("banco3").src = banco3;

    var prestacao1 = calcularPrestacao(valor-entrada, taxa1, prazo);
    var prestacao2 = calcularPrestacao(valor-entrada, taxa2, prazo);
    var prestacao3 = calcularPrestacao(valor-entrada, taxa3, prazo);
    document.getElementById("valor_mensalZ1").innerHTML = prestacao1.toLocaleString();
    document.getElementById("valor_mensalZ2").innerHTML = prestacao2.toLocaleString();
    document.getElementById("valor_mensalZ3").innerHTML = prestacao3.toLocaleString();
    return true;
}

function calcularPrestacao(emprestimo, taxa, prazo){
    /* prestação = emprestimo / (1-(1+i)^-n / i) 
    i=taxa/12;
    n=periodo (nºmeses*anos)*/
    var i = Number(taxa/100)/12;
    var n = Number(prazo)*12;
    var a = (1 - (1+i) ** (-1*n)) / i;
    var p = emprestimo / a;
    return p.toFixed(2);
}
