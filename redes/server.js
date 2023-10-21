// jQuery sendo executada após o carregamento completo da página
$(function () {

  // função para manipulação do DOM
  function createElement(texto) {
    //criando uma div para inserir a resposta das requisições
    const div = document.createElement("div");
    const textNode = document.createTextNode(texto);
    div.appendChild(textNode);
    document.body.appendChild(div);
  }

  // função para requisição de data, hora e local
  $.getJSON("https://worldtimeapi.org/api/timezone/America/Sao_Paulo", function (data) {
    const dataHora = "Data e hora: " + data.datetime;
    const local = "Timezone: " + data.timezone;
    createElement(dataHora);
    createElement(local);
  });

  // função para requisição de API
  $.getJSON("https://api.ipify.org?format=json", function (data) {
    const ipPublico = "Você está acessando pelo IP público: " + data.ip;
    createElement(ipPublico);
  });
});