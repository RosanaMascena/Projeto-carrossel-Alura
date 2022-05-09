let img = document.getElementsByTagName('img');
let produto = document.getElementsByClassName('produto-descricao');
let produto_page = Math.ceil(produto.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;

let right_mover = ()=>{
    l = l + movePer;
    if (produto == 1) {l = 0}
    for(const i of produto)
    {
        if (l > maxMove) {l = l - movePer;}
        i.style.left = '-' + l + '%';
    }
}

let left_mover = ()=>{
    l = l - movePer;
    if (l<=0) {l=0;}
    for(const i of produto)
    {
        if (produto_page > 1)
        i.style.left = '-' + l + '%';
    }
}

img[1].onclick = ()=>{right_mover();}
img[0].onclick = ()=>{left_mover();}