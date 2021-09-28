window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    let menubox = document.getElementById("menubox");
    if (document.documentElement.scrollTop > 30) {
        menubox.style.top = "4%";
        menubox.style.width = "20%";
        for (let i = 0; i < menubox.children.length; i++)
        {
            menubox.children[i].style.fontSize = "44%";
        }
    } else {
        menubox.style.top = "10%";
        menubox.style.width = "60%";
        for (let i = 0; i < menubox.children.length; i++)
        {
            menubox.children[i].style.fontSize = "100%";
        }
    }
}


function felnagyit()
{
    let menubox = document.getElementById("menubox");
    menubox.style.width = "60%";
    for (let i = 0; i < menubox.children.length; i++)
    {
        menubox.children[i].style.fontSize = "100%";
    }
}

function kicsinyit()
{
    if (document.documentElement.scrollTop > 30) {
        let menubox = document.getElementById("menubox");
        menubox.style.width = "20%";
        for (let i = 0; i < menubox.children.length; i++)
        {
            menubox.children[i].style.fontSize = "44%";
        }
    }
}