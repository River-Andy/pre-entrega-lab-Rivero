

const method = process.argb[2];
const resource = process.argb[3];

console.log(method, resource);

method= method.toUpperCase()
resource= resource.toLowerCase()

//delete
if(method=="DELETE" && resource.startsWith("products/")) {
    const id = parseInt(resource.split("/")[1]);

    fetch('https://fakestoreapi.com/products/1', {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(data => console.log(data));
}

//POST
if (method =="POST" && resource == "products") {
    const product = { 
        title: process.argv[4],
         price: process.argv[5], 
         category: process.argv[6]
         };
    
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(data => console.log(data));
}

// products/5
if (method == "GET" && resource.startWith("products/")) {
    const [, id] = resource.split("/");
    id= parseInt(id);

    if (isNaN(id) || id <=0){
        console.log("No es un número mayor que 0");
    }

  fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => console.log(data));
}


//GET
if (method == "GET" && resource == "products") {
    const response =await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    console.log(data)
}
  
    
