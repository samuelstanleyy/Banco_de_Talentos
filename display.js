function displayFields(form,customHTML){

    var usario = getValue("WKUser");

    var nome = form.getValue("nome");
    var nome = form.getValue("email");
    var nome = form.getValue("perfil");
    var nome = form.getValue("linkedin");

   var interacao = '<h1>Oi, '+usuario+'. O '+nome+' deseja trabalhar conosco!</h1>' +
    '<h3>O seu perfil é:'+perfil+'Você pode conferir o seu perfil completo no linkedIn:'+linkedin+'.' +
    'Você também pode entrar em contato pelo email:'+email+'.' +
    'Obrigado!</h3>'

    customHTML.append('<script>$("#mensageminteracao").append("'+interacao+'")</script>');
    customHTML.append('<script>$("#mensageminteracao").show();$("#formprincipal").hide();</script>');
}