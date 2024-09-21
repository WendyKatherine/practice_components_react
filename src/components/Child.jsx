import PropTypes from "prop-types";

export const Child = (props) => {

  //metodo para el btn
  const handleChangeName = () => {
    const newName = prompt("Nuevo nombre: ");
    if (newName){
      props.setName(newName);
    }
  }

  return (
    <div>
      <h1>Child</h1>
      <ul>
        <li> { props.name } </li>
        <button
          className="btn btn-primary"
          onClick={handleChangeName}
        >
          Cambiar nombre
        </button>
      </ul>
    </div>
  )
}

Child.propTypes = {
    name : PropTypes.string,
    setName : PropTypes.func
}
