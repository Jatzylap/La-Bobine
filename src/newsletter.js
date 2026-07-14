function saveEmail()
{
  // document.getElementById('bouton-form').value = "";
  // document.getElementById('message').classList.add('toggle');
  return false;
}

function sendEmail()
{
  document.getElementById('message').classList.add('toggle');
  window.open('mailto:cine.bobine.uzel@gmail.com?subject=Demande d\'abonnement newsletter&body=Bonjour, je voudrais suivre le newsletter de la Bobine.', '_blank');
}