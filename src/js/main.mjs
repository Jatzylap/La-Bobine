import header_html from '../html/navigation.html?raw'
import footer_html from '../html/footer.html?raw'

import "./theme.js"
import "./sidebar.js"

const nav = document.querySelector("#navigation");
const footer = document.querySelector(".footer");
const errorCorridor = document.querySelector('.bobinator-corridor');

createErrorCorridor(errorCorridor);
matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', applyTheme);

nav.innerHTML = header_html;
footer.innerHTML = footer_html;
// applyTheme();

function createErrorCorridor(container)
{
    const layers = 64;
    const lightnessStart = 255;
    const lightnessEnd = 15;
    const lastIndex = Math.max(layers - 1, 1);
    let parent = container;

    for (let index = 0; index < layers; index++)
    {
        const square = document.createElement('div');
        const lightness = Math.round(
            lightnessStart + (lightnessEnd - lightnessStart) * index / lastIndex
        );

        square.className = 'bobinator-corridor__square';
        square.style.backgroundColor = `rgb(${lightness}, ${lightness}, ${lightness})`;

        if (index === 0)
        {
            square.classList.add('bobinator-corridor__square--outer');
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