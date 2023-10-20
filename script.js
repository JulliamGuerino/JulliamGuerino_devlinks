function trocar_modo()
{
    const html = document.documentElement;
    html.classList.toggle("light")

    const imagem = document.querySelector("#profile img");

    if (html.classList.contains("light"))
    {
       imagem.setAttribute("src", "./assets/avatar-light.png")
       imagem.setAttribute("alt", "Foto Mayk Britto sorrindo com oculos de sol")
    }
    else
    {
        imagem.setAttribute("src", "./assets/avatar.png");
        imagem.setAttribute("alt", "Foto Mayk Britto sorrindo");
    }
    
}