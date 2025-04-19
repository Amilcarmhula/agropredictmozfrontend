import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [cidade, setCidade] = useState('');
  const [historico, setHistorico] = useState([]);

  const getPrevisao = (e) => {
    e.preventDefault();
    const endpoint = `http://127.0.0.1:8000/previsoes/${cidade}`
    fetch(endpoint)
      .then(res => res.json())
      .then(dados => {
        setHistorico(dados)
      }).catch(err => {
        console.error('Erro ao buscar dados: ', err)
      })
  }




  return (
    <>
      <div className="container py-4">
        <h1 className="mb-4">AgroPredictMoz</h1>
        <form className="row g-3 mb-4" onSubmit={getPrevisao}>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Digite a cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3" >Consultar</button>
          </div>
        </form>


        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Resultado:</h5>
            {historico.map((h, index) => (
              <div key={index}>
                <p><strong>Cidade:</strong> {h.localizacao}</p>
                <p><strong>Temperatura:</strong> {h.temperatura} °C</p>
                <p><strong>Humidade:</strong> {h.humidade} %</p>
                <p><strong>Precipitação:</strong> {h.precipitacao} mm</p>
                <p><strong>Luz Solar:</strong> {h.luz_solar} h</p>
                <p><strong>Recomendações:</strong></p>
                {h.recomendacao.map((m, n) => (
                    <ul key={n}>
                      <li >{m.recomendacao}</li>
                    </ul>
                  ))}
              </div>
            ))}

          </div>
        </div>


        <h5>Histórico de Previsões</h5>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Data</th>
              <th>Cidade</th>
              <th>Temp (°C)</th>
              <th>Humidade (%)</th>
              <th>Precipitação (mm)</th>
              <th>Luz Solar (h)</th>
              <th>Recomendações</th>
            </tr>
          </thead>
          <tbody>

            {historico.map((d, i) => (
              <tr key={i}>
                <td>{d.data_registo}</td>
                <td>{d.localizacao}</td>
                <td>{d.temperatura}</td>
                <td>{d.humidade}</td>
                <td>{d.precipitacao}</td>
                <td>{d.luz_solar}</td>
                <td>
                  {d.recomendacao.map((m, n) => (
                    <ul key={n}>
                      <li >{m.recomendacao}</li>
                    </ul>
                  ))}
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App;
