function clickMenu()
{
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.classList.toggle("open");
    overlay.classList.toggle("open");
    overlay.onclick = () => clickMenu();
}

function clickPrograms(event)
{
    if (event) {
        event.preventDefault();
    }

    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("programs-open");
    return false;
}