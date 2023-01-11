const formulario =  document.getElementById('formulario')
const data = {
    Nombres: "angel",
    Telefono: "0975624601",
    Estado: "1",
    "fecha": new Date(),
  };

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
 // Add one line to the sheet

    // Add one line to the sheet
fetch("https://sheet.best/api/sheets/cf969697-682a-40e3-bad4-d54803eeeacf", {
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
})