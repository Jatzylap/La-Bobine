function clickMenu()
{
  const overlay = document.getElementById("overlay");
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
  overlay.classList.toggle("open");
  overlay.onclick = () => clickMenu();
}

function clickPrograms()
{
  const programs = document.getElementById("programs");
  const children = programs.getElementsByClassName("bouton");
  for (let i = 0; i < children.length; i++) {
    children[i].classList.toggle("open");
  }
  return false;
}

function clickInfo()
{
  const info = document.getElementById("info");
  const children = info.getElementsByClassName("bouton");
  for (let i = 0; i < children.length; i++) {
    children[i].classList.toggle("open");
  }
  return false;
}

function sendEmail()
{
  var sender = 'cine.bobine.uzel@gmail.com';
  var matiere = 'Demande de suggestion';
  var saut = '%0A';
  var contenu = "Bonjour,"+saut+saut+"Voici mes propositions pour la programmation du Ciné-Club La Bobine: "+saut+saut+"Merci et bonne saison à toute l'équipe.";
  window.open('mailto:'+sender+'?subject='+matiere+'&body='+contenu, '_blank');
}

function toggleTheme()
{
  const isDark = document.documentElement.classList.toggle('dark');
  window.updateTheme(isDark);
}

window.clickMenu = clickMenu;
window.clickPrograms = clickPrograms;
window.clickInfo = clickInfo;
window.sendEmail = sendEmail;
window.toggleTheme = toggleTheme;