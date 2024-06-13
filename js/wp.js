function redirectToWhatsApp() {
  var name = document.getElementById("cName").value;
  var email = document.getElementById("cEmail").value;
  var subject = document.getElementById("cSubject").value;
  var message = document.getElementById("cMessage").value;
  var postLink = window.location.href;

  var error_name = document.getElementById("error_name"),
      error_email = document.getElementById("error_email"),
      error_message = document.getElementById("error_message");

  var text;
  if (name == "") {
    text = "Introduce tu nombre";
    error_name.setAttribute("data-text", text);
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Introduce un correo válido";
    error_email.setAttribute("data-text", text);
    return false;
  }

  if (message == "") {
    text = "Escribe un mensaje de presentación";
    error_message.setAttribute("data-text", text);
    return false;
  }
  
  var messageBody = "Team Armani - Kyudo Mugen " + "\n\n"; 
  messageBody += "=============================" + "\n";
  messageBody += "*Nombre:* " + name + "\n";
  messageBody += "*Correo:* " + email + "\n";
  messageBody += "*Genero:* " + subject + "\n";
  messageBody += "*Mensaje:* " + message + "\n\n";
  
  
  var whatsappLink = "https://api.whatsapp.com/send",
      phoneNumber = "5492915716099"; 

  var encodedMessage = encodeURIComponent(messageBody);
  var whatsappUrl = `${whatsappLink}?phone=${phoneNumber}&text=${encodedMessage}`;
  
  window.open(whatsappUrl, "_blank");
  return true;
}
