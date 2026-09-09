function updateTheme(isDark)
{
  // ici rampent les motifs

  const body = document.body;
  const icon = document.getElementById("bouton-theme-du-sidebar");
  const sidebar = document.getElementById("sidebar");
  const container = document.querySelector(".container");
  const footer = document.querySelector(".footer");
  const h5 = document.querySelector("h5");
  const button = document.getElementsByClassName("bouton");
  const slidetext = document.getElementsByClassName("slide_text");
  const subContainerText = document.getElementsByClassName("sub-container-text");

  document.documentElement.classList.toggle('dark', isDark);
  body.classList.toggle('dark', isDark);
  container.classList.toggle('dark', isDark);
  footer.classList.toggle('dark', isDark);
  if (icon) { icon.innerHTML = isDark ? '&#9790;' : '&#9728;'; }
  sidebar.classList.toggle('dark', isDark);
  if (h5) { h5.classList.toggle('dark', isDark); }
  if (button)
  {
    for (let i = 0; i < button.length; i++) {
      button[i].classList.toggle('dark', isDark);
    }
  }
  if (slidetext)
  {
    for (let i = 0; i < slidetext.length; i++) {
      slidetext[i].classList.toggle('dark', isDark);
    }
  }
  if (subContainerText)
  {
    for (let i = 0; i < subContainerText.length; i++) {
      subContainerText[i].classList.toggle('dark', isDark);
    }
  }
}

window.updateTheme = updateTheme;