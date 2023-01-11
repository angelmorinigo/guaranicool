const formulario =  document.getElementById('formulario')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
   fetch('https://sheet.best/api/sheets/13b8502d-4902-40aa-8fda-a4667229ee9f',{
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