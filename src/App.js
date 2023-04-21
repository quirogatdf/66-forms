import "./App.css";
import { Fragment, useState } from "react";

function App() {
  // Declara una nueva variable de estado llamada personas
  const initialState = {
    name: "",
    lastName: "",
    nationality: "",
    dni: "",
    age: ""
};
  const [persona, setPersona] = useState(initialState);

  const [personas, setPersonas] = useState([]);

  const handleInputChange = (event) => {
    setPersona({
      ...persona,
      [event.target.name]: event.target.value,
      [event.target.lastName]: event.target.value,
      [event.target.nationality]: event.target.value,
      [event.target.dni]: event.target.value,
      [event.target.age]: event.target.value,
    });
    console.log(persona)
  };

  const sendData = (event) => {
    event.preventDefault();
    setPersonas((p) => [...p, persona]);
    setPersona(initialState)
    event.target.reset();
  };

  return (
    <Fragment>
      <div className="col-md-4 justify-content-md-center container my-4">
        <div className="row">
          <h1>Registrar persona</h1>
        </div>

        <form onSubmit={sendData}>
          <div className="row">
            <div className="col-md-12 mt-2">
              <input
                type="text"
                placeholder="Nombre"
                className="form-control"
                onChange={handleInputChange}
                name="name"
              ></input>
            </div>
            <div className="col-md-12 mt-2">
              <input
                type="text"
                placeholder="Apellido"
                className="form-control"
                onChange={handleInputChange}
                name="lastName"
              ></input>
            </div>
            <div className="col-md-9 mt-2">
              <input
                type="text"
                placeholder="Nacionalidad"
                className="form-control"
                onChange={handleInputChange}
                name="nationality"
              ></input>
            </div>
            <div className="col-md-6 mt-2">
              <input
                type="text"
                placeholder="DNI"
                className="form-control"
                onChange={handleInputChange}
                name="dni"
              ></input>
            </div>
            <div className="col-md-6 mt-2">
              <input
                type="number"
                placeholder="Edad"
                className="form-control"
                onChange={handleInputChange}
                name="age"
              ></input>
            </div>

            <div className="row justify-content-md-center my-4">
              <button type="submit" className="btn btn-primary col-md-6">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="container-card">
        {personas.map(({ name, lastName, nationality, dni, age }) => (
          <div className="card m-4">
            <img
              src="https://picsum.photos/seed/picsum/200"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">
                {lastName}, {name}
              </h5>
              <p className="card-text">
                <strong>DNI:</strong> {dni} <br />
                <strong>Nacionalidad:</strong> {nationality} <br />
                <strong>Edad:</strong> {age}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default App;
