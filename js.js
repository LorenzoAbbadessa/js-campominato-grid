// <div class="cubo"></div>

let numCell = 100;
let container = document.getElementById("contenitore");

// i 100 numeri convertirli in tag da inserire in un div con una specifica classe

for (let i = 1; i <= numCell; i++) {
    
    
    const cella = document.createElement ("div");  //creo cella (div in html)
    cella.classList.add("cubo");                   //aggiungo la classe alla cella (div)
    container.appendChild(cella);                  //inseriscco cella (div) in container
    

    let h3 = numCell(i)
    document.createElement ("h3");         //creo h3 (h3 in html)
    h3.classList.add("numero");                      //aggiungo la classe all' h3 
    cella.appendChild(h3);                          //inserisco h3 in cella
     
}

//creare una funzione che vada ad aggiungere una classe che copra il cubo con un altro 
//cubo di un colore diverso 