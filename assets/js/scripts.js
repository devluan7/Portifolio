const mudarTema = document.getElementById("mudarTema");
const rootHtml = document.documentElement

function changeTheme (){
    const temaAtual = rootHtml.getAttribute("data-theme");

    if(temaAtual=="dark") rootHtml.setAttribute("data-theme", "light")
    else rootHtml.setAttribute("data-theme","dark")  

     mudarTema.classList.toggle("bi-sun")
     mudarTema.classList.toggle("bi-moon-stars")
}

mudarTema.addEventListener("click", changeTheme)