var myTimeout = setTimeout(mybear, 4000);


function mybear(){
    // after 4 seconds original photo goes to top right meanwhile new image created and assigned new class name to go down left
    var par=document.getElementById('qut')
    par.innerText='Tadaaa'
    var image1=document.getElementById('header')
    var list=document.getElementById('nav')
    var img = document.createElement('img')
    img.src ='dom.jpg'
    image1.appendChild(img)
    image1.children[0].style.position= 'absolute'
    image1.children[0].style.top= 0
    image1.children[0].style.right= 0
    image1.children[1].className= 'image1'
    // changing list circle 
    list.style.marginTop= '230px'
    list.style.listStyleType= 'circle'
}