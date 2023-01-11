const formulario =  document.getElementById('formulario')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
   fetch('https://docs.google.com/spreadsheets/d/1BtCqGVj7cRFLuWwEcXg-UhGAxSSWoAac59sP-DFDqek/edit?usp=sharing',{
    method: 'POST',
    mode:'cors',
    headers:{
        'Content-Type':'aplication/json'
    },
    body: JSON.stringify({
        "Nombres":"Primera prueba",
        "Telefono": "0975624601",
        "Estado": "1"
    })
   })
})