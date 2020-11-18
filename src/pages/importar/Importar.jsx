import React, { Component } from 'react';
import ApiService from '../../Utils/ApiService'
import PopUp from '../../Utils/PopUp'
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './Importar.css';


const buttonRef = React.createRef()

export default class Inportar extends Component {

  state = {
    file: null
  }

  handleFile(e) {
    let file = e.target.files[0]
    this.setState({ file: file });
  }

  handleUpload = (e) => {
    e.preventDefault();
    let pem = this.state.file;
    if(!pem)return alert("Aquivo .pem não selecionado ") ;

   ApiService.uploadPem(pem).then(res => {
     console.log(res);
        if(res !=='error')  return PopUp.exibeMensagem('success', 'Upload realizado com sucesso')  ;
        return PopUp.exibeMensagem('error', 'Não foi possivel fazer upload do arquivo',4000)
      })

  }


  render() {
    return (

      <div>


        <div id="importar-body">
          <div id="importarTabela-row">

            <div id="importarTabela-title">
              <h1>Importar Certificado</h1>
            </div>

            <div id="importar-instrucoes-body">
              <div id="importar-instrucoes-row">

                <div id="importar-instrucoes">
                  <p>
                    Instruções: <br />
                        Escolha arquivo o certificado .pem para a importação.
                      </p>

                </div>
              </div>
              <div>
                 <form onSubmit={this.handleUpload}>
                <label htmlFor="input-file" type="file">Arquivo:</label>
                <input type="file" onChange={(e) => this.handleFile(e)} />
                <button type="submit" onClick={this.handleUpload} >Upload</button>
              </form>
              </div>
             
            </div>
            <div id="import-botao-rem">
            </div>
          </div>



          <div id="import-botao-fechar-row" >

            <Link to="/">
              <button id="import-botao-fechar" type="button">VOLTAR</button>
            </Link>
          </div>
        </div>


      </div>

    )
  }
}