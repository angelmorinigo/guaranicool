const formulario =  document.getElementById('formulario')

   const registro  = document.getElementById('registro')
   const exito  = document.getElementById('exito')

         try{ 
            formulario.addEventListener('submit',async(e)=>{
                e.preventDefault();
            // Add one line to the sheet

                // Add one line to the sheet
            await fetch("https://sheet.best/api/sheets/13b8502d-4902-40aa-8fda-a4667229ee9f", {
                method: "POST",
                mode: "cors",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Nombres: formulario.nombre.value,
                    Telefono: formulario.telefono.value,
                    Estado: "1",
                    Fecha: new Date(),
                    Cedula: formulario.cedula.value,
                }),
            }),
       

  registro.classList.remove('activo')
  exito.classList.add('activo')
   })
}catch(e){
    console.log(e)
}

try{ 
      const respuesta = formulario.addEventListener('submit',async(e)=>{
        e.preventDefault();
    // Add one line to the sheet

        // Add one line to the sheet
    await fetch("https://sheet.best/api/sheets/13b8502d-4902-40aa-8fda-a4667229ee9f", );

    const resultado = await respuesta.json();
    console.log(resultado);


registro.classList.remove('activo')
exito.classList.add('activo')
})
}catch(e){
console.log(e)
}