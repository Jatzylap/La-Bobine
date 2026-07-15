/*
function saveEmail()
{
  document.getElementById('bouton-form').value = "";
  document.getElementById('message').classList.add('toggle');
  return false;
}
*/

function sendEmail()
{
  var sender = 'cine.bobine.uzel@gmail.com';
  var matiere = 'Demande de suggestion';
  var saut = '%0A';
  var contenu = "Bonjour,"+saut+saut+"Voici mes propositions pour la programmation du Ciné-Club La Bobine: "+saut+saut+"Merci et bonne saison à toute l'équipe.";
  window.open('mailto:'+sender+'?subject='+matiere+'&body='+contenu, '_blank');
}