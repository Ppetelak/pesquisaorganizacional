function doGet (e) {
    return HtmlService.createHtmlOutput('solicitação recebida');
  }
  
  function doPost (e) {
  
    if(typeof e !== 'undefined')
    var parametros = e.parameter;
    var planilha = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('dados');
  
    var ultimaLinha = Math.max(planilha.getLastRow(), 1);
  
    var linhaAtual = ultimaLinha + 1;
  
    planilha.insertRowAfter(ultimaLinha);
  
    var dataAtual = new Date() // variável para pegar a data de preemnchimento de um form ou no caso da criação de uma nova linha na planilha
  
    var q1 = parametros['q1']; //inserir o label usado no elementor pelo campo específico
    var q2 = parametros['q2'];
    var q3 = parametros['q3'];
    var q4 = parametros['q4'];
    var q5 = parametros['q5'];
    var q6 = parametros['q6'];
    var q7 = parametros['q7'];
    var q8 = parametros['q8'];
    var q9 = parametros['q9']
    var q10 = parametros['q10'];
    var q11 = parametros['q11'];
    var q12 = parametros['q12'];
    var q13 = parametros['q13'];
    var q14 = parametros['q14'];
    var q15 = parametros['q15'];
    var q16 = parametros['q16'];
    var q17 = parametros['q17'];
    var q18 = parametros['q18'];
    var q19 = parametros['q19'];
  
  
    planilha.getRange(linhaAtual, 1).setValue(dataAtual)
    planilha.getRange(linhaAtual, 2).setValue(q1);
    planilha.getRange(linhaAtual, 3).setValue(q2);
    planilha.getRange(linhaAtual, 4).setValue(q3);
    planilha.getRange(linhaAtual, 5).setValue(q4);
    planilha.getRange(linhaAtual, 6).setValue(q5);
    planilha.getRange(linhaAtual, 7).setValue(q6);
    planilha.getRange(linhaAtual, 8).setValue(q7);
    planilha.getRange(linhaAtual, 9).setValue(q8);
    planilha.getRange(linhaAtual, 10).setValue(q9);
    planilha.getRange(linhaAtual, 11).setValue(q10);
    planilha.getRange(linhaAtual, 12).setValue(q11);
    planilha.getRange(linhaAtual, 13).setValue(q12);
    planilha.getRange(linhaAtual, 14).setValue(q13);
    planilha.getRange(linhaAtual, 15).setValue(q14);
    planilha.getRange(linhaAtual, 16).setValue(q15);
    planilha.getRange(linhaAtual, 17).setValue(q16);
    planilha.getRange(linhaAtual, 18).setValue(q17);
    planilha.getRange(linhaAtual, 19).setValue(q18);
    planilha.getRange(linhaAtual, 20).setValue(q19);

  
    SpreadsheetApp.flush();
  
    return ContentService.createTextOutput('{"status": "success"}')
        .setMimeType(ContentService.MimeType.JSON);
  
  }
  
  /*
      Após a criação do app script dentro do google publica-lo e aceitar o suo permitindo a conexão com sua conta
      ou seja fazer a autorização.
  */