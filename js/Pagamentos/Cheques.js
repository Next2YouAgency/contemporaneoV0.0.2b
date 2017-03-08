/** * Função para criar um objeto XMLHTTPRequest */
function CriaRequest() {
    try {
        request = new XMLHttpRequest();
    } catch (IEAtual) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (IEAntigo) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (falha) {
                request = false;
            }
        }
    }
    if (!request)
        alert("Verifique sua versão do navegador!");
    else
        return request;
}
function ChequeSelecionado1() {
    // Declaração de Variáveis
    var TipoPagamento = document.getElementById("FormaPagamento1").value;
    var inserir_elemento = document.getElementById("returmMetodoPagamento1");
    var xmlreq = CriaRequest();
    // Exibi a imagem de progresso
    inserir_elemento.innerHTML = '<img src="img/default.gif" class="img-respomsive" style="width:30px;margin-top:25px;margin-left:30px">';
    // Iniciar uma requisição
    xmlreq.open("GET", "pages/requisicao-js/PagamentosAlunos/ExibirDadosCheque.php?TipoPagamento=" + TipoPagamento, true);
    // Atribui uma função para ser executada sempre que houver uma mudança de Dado
    xmlreq.onreadystatechange = function () {
        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4) 
        if (xmlreq.readyState == 4) {
            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
                inserir_elemento.innerHTML = xmlreq.responseText;
            } else {
                inserir_elemento.innerHTML = "Erro: " + xmlreq.statusText;
            }
        }
    };
    xmlreq.send(null);
}
function ChequeSelecionado2() {
    // Declaração de Variáveis
    var TipoPagamento = document.getElementById("FormaPagamento2").value;
    var inserir_elemento = document.getElementById("returmMetodoPagamento2");
    var xmlreq = CriaRequest();
    // Exibi a imagem de progresso
    inserir_elemento.innerHTML = '<img src="img/default.gif" class="img-respomsive" style="width:30px;margin-top:25px;margin-left:30px">';
    // Iniciar uma requisição
    xmlreq.open("GET", "pages/requisicao-js/PagamentosAlunos/ExibirDadosCheque.php?TipoPagamento=" + TipoPagamento, true);
    // Atribui uma função para ser executada sempre que houver uma mudança de Dado
    xmlreq.onreadystatechange = function () {
        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4) 
        if (xmlreq.readyState == 4) {
            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
                inserir_elemento.innerHTML = xmlreq.responseText;
            } else {
                inserir_elemento.innerHTML = "Erro: " + xmlreq.statusText;
            }
        }
    };
    xmlreq.send(null);
}
function ChequeSelecionado3() {
    // Declaração de Variáveis
    var TipoPagamento = document.getElementById("FormaPagamento3").value;
    var inserir_elemento = document.getElementById("returmMetodoPagamento3");
    var xmlreq = CriaRequest();
    // Exibi a imagem de progresso
    inserir_elemento.innerHTML = '<img src="img/default.gif" class="img-respomsive" style="width:30px;margin-top:25px;margin-left:30px">';
    // Iniciar uma requisição
    xmlreq.open("GET", "pages/requisicao-js/PagamentosAlunos/ExibirDadosCheque.php?TipoPagamento=" + TipoPagamento, true);
    // Atribui uma função para ser executada sempre que houver uma mudança de Dado
    xmlreq.onreadystatechange = function () {
        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4) 
        if (xmlreq.readyState == 4) {
            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
                inserir_elemento.innerHTML = xmlreq.responseText;
            } else {
                inserir_elemento.innerHTML = "Erro: " + xmlreq.statusText;
            }
        }
    };
    xmlreq.send(null);
}
function ChequeSelecionado4() {
    // Declaração de Variáveis
    var TipoPagamento = document.getElementById("FormaPagamento4").value;
    var inserir_elemento = document.getElementById("returmMetodoPagamento4");
    var xmlreq = CriaRequest();
    // Exibi a imagem de progresso
    inserir_elemento.innerHTML = '<img src="img/default.gif" class="img-respomsive" style="width:30px;margin-top:25px;margin-left:30px">';
    // Iniciar uma requisição
    xmlreq.open("GET", "pages/requisicao-js/PagamentosAlunos/ExibirDadosCheque.php?TipoPagamento=" + TipoPagamento, true);
    // Atribui uma função para ser executada sempre que houver uma mudança de Dado
    xmlreq.onreadystatechange = function () {
        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4) 
        if (xmlreq.readyState == 4) {
            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
                inserir_elemento.innerHTML = xmlreq.responseText;
            } else {
                inserir_elemento.innerHTML = "Erro: " + xmlreq.statusText;
            }
        }
    };
    xmlreq.send(null);
}
function ChequeSelecionado5() {
    // Declaração de Variáveis
    var TipoPagamento = document.getElementById("FormaPagamento5").value;
    var inserir_elemento = document.getElementById("returmMetodoPagamento5");
    var xmlreq = CriaRequest();
    // Exibi a imagem de progresso
    inserir_elemento.innerHTML = '<img src="img/default.gif" class="img-respomsive" style="width:30px;margin-top:25px;margin-left:30px">';
    // Iniciar uma requisição
    xmlreq.open("GET", "pages/requisicao-js/PagamentosAlunos/ExibirDadosCheque.php?TipoPagamento=" + TipoPagamento, true);
    // Atribui uma função para ser executada sempre que houver uma mudança de Dado
    xmlreq.onreadystatechange = function () {
        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4) 
        if (xmlreq.readyState == 4) {
            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
                inserir_elemento.innerHTML = xmlreq.responseText;
            } else {
                inserir_elemento.innerHTML = "Erro: " + xmlreq.statusText;
            }
        }
    };
    xmlreq.send(null);
}
function ChequeSelecionado6() {
    // Declaração de Variáveis
    var TipoPagamento = document.getElementById("FormaPagamento6").value;
    var inserir_elemento = document.getElementById("returmMetodoPagamento6");
    var xmlreq = CriaRequest();
    // Exibi a imagem de progresso
    inserir_elemento.innerHTML = '<img src="img/default.gif" class="img-respomsive" style="width:30px;margin-top:25px;margin-left:30px">';
    // Iniciar uma requisição
    xmlreq.open("GET", "pages/requisicao-js/PagamentosAlunos/ExibirDadosCheque.php?TipoPagamento=" + TipoPagamento, true);
    // Atribui uma função para ser executada sempre que houver uma mudança de Dado
    xmlreq.onreadystatechange = function () {
        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4) 
        if (xmlreq.readyState == 4) {
            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
                inserir_elemento.innerHTML = xmlreq.responseText;
            } else {
                inserir_elemento.innerHTML = "Erro: " + xmlreq.statusText;
            }
        }
    };
    xmlreq.send(null);
}