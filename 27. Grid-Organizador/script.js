const btns = document.querySelectorAll('.btns span');

console.log(btns)


function btnsCollections(){
    btns.forEach((i)=>{
        i.classList.remove('active');
        this.classList.add('active');
    })
}


btns.forEach((i)=>{
    i.addEventListener('click', btnsCollections)
})