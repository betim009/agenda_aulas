import './App.css'
import { marco } from './data/marco'

const ordemDias = [
  'domingo',
  'segunda-feira',
  'terca-feira',
  'quarta-feira',
  'quinta-feira',
  'sexta-feira',
  'sabado',
]

function App() {
  const mes = marco

  const semanas = [mes.semana_1, mes.semana_2, mes.semana_3, mes.semana_4, mes.semana_5].map(
    (semana) => {
      const mapaDias = Object.fromEntries(semana.map((dia) => [dia.dia, dia]))
      return ordemDias.map((nomeDia) => mapaDias[nomeDia] ?? null)
    }
  )

  return (
    <main className="agenda">
      <h1>{mes.title}</h1>

      <section className="calendario">
        {ordemDias.map((dia) => (
          <div key={dia} className="cabecalho-dia">
            {dia}
          </div>
        ))}

        {semanas.map((semana, indexSemana) =>
          semana.map((dia, indexDia) => (
            <article key={`${indexSemana}-${indexDia}`} className="celula-dia">
              {dia ? (
                <>
                  <h2>{dia.data}</h2>
                  <ul>
                    {dia.horarios.length > 0 ? (
                      dia.horarios.map((slot, indexSlot) => (
                        <li key={`${dia.data}-${slot.horario}-${indexSlot}`}>
                          <strong>{slot.horario}</strong> - {slot.aluno}
                        </li>
                      ))
                    ) : (
                      <li>Sem horarios</li>
                    )}
                  </ul>
                </>
              ) : null}
            </article>
          ))
        )}
      </section>
    </main>
  )
}

export default App
