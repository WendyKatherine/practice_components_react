const FourthComponent = () => {

  const handleClicked = (e, name) => {
    alert("Has hecho click en el boton verde " + name);
  }

  const handleDoubleClicked = () => {
    alert("Has hecho doble click");
  }

  const handleMouseEnter = (e) => {
    alert("Has Entrado a la caja");
  }

  const handleMouseLeave = (e) => {
    alert("Has salido de la caja");
  }

  return (
    <div>
      <h1>Hello Fourth</h1>
      {/* {Evento Click} */}
      <button
        className="btn btn-danger"
        onClick={ () => {
          alert("Soy evento anonimo Click ");
        }}
      >Click Fourth</button>
      <button
        className="btn btn-success mx-2"
        onClick={e => handleClicked(e, "Wen")}
      >
        Soy otro boton click
      </button>
      <button
        className="btn btn-info mx-2"
        onDoubleClick={handleDoubleClicked}
      >
        Haz doble click
      </button>
      <div id="box1"
        onMouseEnter={ e => handleMouseEnter(e, "entrando a")}
        onMouseLeave={ e => handleMouseLeave(e, "salio de")}
      >
        <p>
          Pasa el mouse por encima
        </p>
      </div>
    </div>
  )
}

export default FourthComponent
