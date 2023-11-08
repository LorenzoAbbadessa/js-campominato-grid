// <div class="cubo"></div>

let numCell = 64;
let container = document.getElementById("contenitore");

// i 100 numeri convertirli in tag da inserire in un div con una specifica classe

for (let i = 1; i <= numCell; i++) {
    
    
    const cella = document.createElement ("div");  //creo cella (div in html)
    cella.classList.add("cubo");                   //aggiungo la classe alla cella (div)
    container.appendChild(cella);                  //inseriscco cella (div) in container   

    cella.innerHTML = (i)

    cella.addEventListener("click", function(){
        this.classList.add("coloreclick");
        
    })
}
