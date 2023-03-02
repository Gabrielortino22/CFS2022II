import { useState } from `react`;
import { sculptureList } from `.\data.js `;

export default function Gallery(){
    const [Index,setIndex] =useState(0);
    const [showMore, setShowMore ] = useState(false);

    function handleNextClick() {
        setIndex(index +1);
    }

    function handleNextClick() {
        setIndex(index -1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture =sculptureList[ index];
    return (
        <>
          <button onClick={handleNextClick}>
          Siguiente
          </button>
          <h2>
          <i>{sculpture.name} </i>
          por{sculpture.artist}
          </h2>
          <h3>
            ({index + 1} de {sculptureList.lenth})
          </h3>

          <button onClick={handleMoreClick}>
          Anterior
          </button>
          <h4>
          <i>{sculpture.name} </i>
          por{sculpture.artist}
          </h4>
          <h5>
            ({index - 1} de {sculptureList.lenth})
          </h5>


          <button onClick ={handleMoreClick}>
          {showMore ? `ocultar` : `mostrar`} detalles
          </button>
          {showMore && <p>{sculpture.descripcion}</p>}
          <img
          src={sculpture.url}
          alt={sculpture.alt}
          />
        
        </>
          
         
          
    );
}

