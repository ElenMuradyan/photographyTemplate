function menubar(){
    if(document.getElementById("nav").style.display==='none'){
        document.getElementById("nav").style.display="flex"
    }else{
        document.getElementById("nav").style.display='none'
    }
    }
    document.addEventListener("scroll",()=>{
        let x=window.scrollY
        if(x>=200){
            document.querySelector('nav').style.backgroundColor='white'
        }else if(x<200){
            document.querySelector('nav').style.backgroundColor='#5a595900'
        }
    })
    function photo(x){
        let black=document.getElementById('black')
        let img=document.getElementById('img')
        let p=document.getElementById('p')
        if(black.style.display===''){
    black.style.display='flex'
    img.src=x.src
    p.innerHTML=x.alt
        }else{
            black.style.display=''
        }
    }