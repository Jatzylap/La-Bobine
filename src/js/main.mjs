import header_html from '../html/navigation.html?raw'
import footer_html from '../html/footer.html?raw'

import "./theme.js"
import "./sidebar.js"
import "./slideshow.js"

const nav = document.querySelector("#navigation");
const footer = document.querySelector(".footer");

matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', applyTheme);

nav.innerHTML = header_html;
footer.innerHTML = footer_html;
// applyTheme();

function applyTheme()
{
    const isDark = matchMedia('(prefers-color-scheme: dark)').matches;
    updateTheme(isDark);
};