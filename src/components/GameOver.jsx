import { useContext } from 'react'
import { QuizContext } from '../context/quiz'


import WellDone from '../img/welldone.svg'
import './GameOver.css'

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext); // [get,set]
  return (
    <div id="gameover">
      <h2>parabéns você chegou ao fim do quiz</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>você acertou {quizState.score} de {quizState.questions.length} perguntas</p>
      <img src={WellDone} alt="fim do quiz" />
      <button onClick={() => dispatch({type:"NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver
