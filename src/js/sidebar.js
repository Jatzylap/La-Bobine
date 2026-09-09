import html from './sidebar.html';

const sidebar = document.getElementById("sidebar");
sidebar.innerHTML = html;

function clickMenu()
{
    const overlay = document.getElementById("overlay");
    sidebar.classList.toggle("open");
    overlay.classList.toggle("open");
    overlay.onclick = () => clickMenu();
}

function clickPrograms()
{
    sidebar.classList.toggle("programs-open");
    return false;
}

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