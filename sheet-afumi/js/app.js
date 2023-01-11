const formulario =  document.getElementById('formulario')
const data = {
    Nombres: "angel",
    Telefono: "0975624601",
    Estado: "1",
    Fecha: new Date(),
  };

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
    .then((r) => r.json())
    .then((data) => {
      // The response comes here
      console.log(data);
    })
    .catch((error) => {
      // Errors are reported there
      console.log(error);
    })
   })
