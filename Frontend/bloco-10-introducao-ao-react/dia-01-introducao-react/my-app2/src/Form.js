import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  }


  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>

          <label>
            Email
          <input name="email" type="email" />
          </label>

          <label>
            Nome
          <input name="nome" type="nome" />
          </label>
        </form>

          <label>
            Idade
          <input name="idade" type="number" />
          </label>

          <label>
            Vai comparecer à conferencia?
          <input name="vaicomparecer" type="checkbox" />
          </label>

          <label>
            Escolha sua palavra chave favorita:
            <select name="palavrachavefavorita">
              <option value="estado">Estado</option>
              <option value="estado">Evento</option>
              <option value="estado">Props</option>
              <option value="estado">Hooks</option>
            </select>
          </label>
      </div>
    )
  }
}

export default Form;