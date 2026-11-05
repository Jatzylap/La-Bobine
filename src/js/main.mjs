import header_html from '../html/navigation.html?raw'
import footer_html from '../html/footer.html?raw'

import "./theme.js"
import "./sidebar.js"

const nav = document.querySelector(".navigation");
const footer = document.querySelector(".footer");
const corridor = document.querySelector('.corridor');

// matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', applyTheme);

nav.innerHTML = header_html;
footer.innerHTML = footer_html;
// applyTheme();
createCorridor(corridor);

function createCorridor(corridor)
{
    // Are we on 404 page?
    if (!corridor) return;

    const layers = 32;
    const lightnessStart = 255;
    const lightnessEnd = 15;
    const lastIndex = Math.max(layers - 1, 1);
    let parent = corridor;

    for (let index = 0; index < layers; index++)
    {
        const lightness = Math.round(lightnessStart + (lightnessEnd - lightnessStart) * index / lastIndex);
        const square = document.createElement('div');
        square.className = 'corridor_square';
        square.style.backgroundColor = `rgb(${lightness}, ${lightness}, ${lightness})`;

        if (index === 0) {
            square.classList.add('corridor_square_outer');
        }

        parent.appendChild(square);
        parent = square;
    }
}

function applyTheme()
{
    const isDark = matchMedia('(prefers-color-scheme: dark)').matches;
    updateTheme(isDark);
};