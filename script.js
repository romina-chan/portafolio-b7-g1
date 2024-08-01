//CRUD
//Crear leer Actualizar Borrar
 
  let frase = document.getElementById('frase');
  let typewriter = new Typewriter(frase, {
    loop: true,
    delay: 75,
  });
  // Usar el punto es para llamar a una propiedad o a una acción del objeto.
  // Acciones se distinguen por los paréntesis ()
  typewriter
    .pauseFor(2500)
    .typeString('Romina Chan')
    .pauseFor(300)
    .deleteAll()
    .typeString('Desarrolladora Frontend Jr.')
    .pauseFor(800)
    .start();