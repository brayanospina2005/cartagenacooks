document.addEventListener('DOMContentLoaded', function() {
    //--- CAROUSEL---------------   
    let elementosCarrousel = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elementosCarrousel, {
      // ----Opciones    
      duration: 150, //Duración de la transición en milisegundos. 
      dist: -80, // Distacia de perspectiva (de profundidad) entre cada imagen. 
      shift: 5, // Distancia entre cada imagen a los costados
      padding: 5, //Distacia dentro
      numVisible: 5, //Numero de lementos visibles
      indicators: false, //Indicadores. Valor: boolean
      noWrap: false //Desplazarse a partir del primer articulo/imagen
    });
  
    // ---- MEDIA---------------
    let media = document.querySelectorAll('.materialboxed');
    let instancesMedia = M.Materialbox.init(media,{
      inDuration: 450, // Duración de la transición de entrada
      outDuration: 350 // Duración de la transición de salida
      
    });
  });

// ----- METODOS
// Creamos una instancia para hacer uso de los metodos. https://stackoverflow.com/questions/53579946/materializecss-carousel-next-method-using-button-inside-the-slider-javascript




  