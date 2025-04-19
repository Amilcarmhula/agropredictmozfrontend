import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [cidade, setCidade] = useState('');
  const [historico, setHistorico] = useState([]);
  const [clima, setClima] = useState(null);


  const getClima = (e) => {
    // e.preventDefault();
    const endpoint = `http://127.0.0.1:8000/clima/regiao/${cidade}`
    fetch(endpoint)
      .then(res => res.json())
      .then(dados => {
        setClima(dados)
      }).catch(err => {
        console.error('Erro ao buscar dados: ', err)
      })
  }

  const getHistorico = (e) => {
    // e.preventDefault();
    const endpoint = `http://127.0.0.1:8000/previsao/all/${cidade}`
    fetch(endpoint)
      .then(res => res.json())
      .then(dados => {
        setHistorico(dados)
      }).catch(err => {
        console.error('Erro ao buscar dados: ', err)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getClima();
    getHistorico();
  }




  return (
    <>
      <div className="container py-4">
        <h1 className="mb-4">AgroPredictMoz</h1>
        <form className="row g-3 mb-4" onSubmit={handleSubmit}>
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
            {clima && (
              <div>
                <span><strong>Cidade:</strong> {clima.localizacao} </span>
                <span><strong>Temperatura:</strong> {clima.temperatura}°C </span>
                <span><strong>Humidade:</strong> {clima.humidade}% </span>
                <span><strong>Precipitação:</strong> {clima.precipitacao}mm </span>
                <span><strong>Luz Solar:</strong> {clima.luz_solar}h</span>
                <p className='text-start pt-3'><strong>Recomendações:</strong></p>
                {clima.recomendacao?.map((m, n) => (
                  <ul key={n}>
                    <li className='text-start'>{m.recomendacao}</li>
                  </ul>
                ))}
              </div>
            )}

          </div>
        </div>


        <h5>Histórico de Previsões</h5>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr className='align-middle'>
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
                <td className='align-middle'>{d.data_registo}</td>
                <td className='align-middle'>{d.localizacao}</td>
                <td className='align-middle'>{d.temperatura}</td>
                <td className='align-middle'>{d.humidade}</td>
                <td className='align-middle'>{d.precipitacao}</td>
                <td className='align-middle'>{d.luz_solar}</td>
                <td className='align-middle'>
                  {d.recomendacao.map((m, n) => (
                    <ul key={n}>
                      <li className='text-start'>{m.recomendacao}</li>
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
