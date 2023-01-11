const formulario =  document.getElementById('formulario')
const data = {
    Nombres: "angel",
    Telefono: "0975624601",
    Estado: "1",
    Fecha: new Date(),
  };
   const registro  = getElementById('registro')
   const exito  = getElementById('exito')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
 // Add one line to the sheet

    // Add one line to the sheet
fetch("https://sheet.best/api/sheets/13b8502d-4902-40aa-8fda-a4667229ee9f", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    

  registro.classList.remove('activo')
  exito.classList.add('activo')
   })
