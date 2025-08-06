import { useContext} from 'react'
import { QuizContext} from './context/quiz'



import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from './components/GameOver'
import PickCategory from './components/PickCategory'

import './App.css'


function App() {
  const [quizState, dispatch] = useContext(QuizContext); // [get,set]



  return (
    <>
      <div className='app-container'>
        <h1>Quiz de programação</h1>
        {quizState.gameStage === "inicio" && <Welcome/>} {/** Componente de boas vindas */}
        {quizState.gameStage === "categoria" && <PickCategory/>} {/** Componente de boas vindas */}
        {quizState.gameStage === "jogando" && <Question/>} {/** Componente de questões */}
        {quizState.gameStage === "fim" && <GameOver/>} {/** componente de finalização */}
      </div>
    </>
  )
}

export default App
