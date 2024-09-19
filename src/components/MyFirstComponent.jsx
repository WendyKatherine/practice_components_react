import React from 'react'

const MyFirstComponent = () => {

  const name = "Wendy Gomez";
  const github_profile = "https://github.com/WendyKatherine";
  const student = {
    name: "Wendy",
    last_name: "Gomez",
    age: 25,
    email: "wendykatherinnegomezv@gmail.com",
    linkedin_profile: "https://www.linkedin.com/in/wendy-katherine-gomez-villa-536964241/"
  }

  console.log(student);

  return (
    <>
        <div>My First component</div>
        <div className="container bg-info-subtle">
          <h1>Temas de React</h1>
          <div>
            <ul>
                <li>Componentes</li>
                <li>Eventos</li>
                <li>Estados del Hooks</li>
                <li>Props</li>
            </ul>
          </div>
        </div>
        <div className="container bg-warning-subtle py-2 px-4">
          <h1>Datos del estudiante: { name }</h1>
          <div>
           <p>Github es: { github_profile } </p>
          </div>
        </div>
        <div className="container bg-warning-subtle py-2 px-4">
          <div>
            <ul>
              <li>Nombre: { student.name } </li>
              <li>Apellido: { student.last_name } </li>
              <li>Edad: { student.age } </li>
              <li>Teléfono: { student.email } </li>
              <li>Linkedin: <a href={ student.linkedin_profile }>Ver más</a></li>
            </ul>
          </div>
        </div>
        <div className="container bg-warning-subtle py-2 px-4">
          <div>
            <h1>Objeto completo</h1>
            <pre> { JSON.stringify(student) } </pre>
          </div>
        </div>
    </>
  )
}

export default MyFirstComponent
