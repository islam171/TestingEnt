import styles from "./Quiz.module.scss"
import QuizWrapper from "../QuizWrapper/QuizWrapper.jsx";
import QuizCard from "../QuizCard/QuizCard.jsx";
import QuizNotStarted from "../QuizNotStarted/QuizNotStarted.jsx";
import QuizFinishPage from "../QuizFinishPage/QuizFinishPage.jsx";
import Selection from '../../../feuture/Selection/Selection.jsx'
import ProgressBar from '../../../feuture/ProgressBar/ProgressBar.jsx'
import Button from '../../../feuture/Button/Button.jsx'


const Quiz = ({
	              variable: {currentQuestion, status, isShowAnswer, isTurnQuestion, progress, period, countWrongAnswer},
	              actions: {writeAnswer, flipCard, startQuiz, setPeriodValue, setIsTurnQuestion},
								periods
              }) => {
	return (<div className={styles.Quiz}>
		<Button onClick={() => setIsTurnQuestion(prev => !prev)} active={isTurnQuestion}>Перевернуть</Button>
		<Selection toggleSelection={setPeriodValue} value={period} values={periods}/>
		<ProgressBar progress={progress}/>
		{status === 'notStarted' && <QuizNotStarted startQuiz={startQuiz}/>}
		{status === 'finished' && <QuizFinishPage startQuiz={startQuiz} countWrongAnswer={countWrongAnswer}/>}
		{status === 'isProcess' && <>
			{currentQuestion ? (<QuizWrapper>
				<QuizCard
					currentQuestion={currentQuestion}
					flipCard={flipCard}
					isShowAnswer={isShowAnswer}
					isTurnQuestion={isTurnQuestion}/>
				<div className={styles.Quiz__control}>
					<button onClick={() => writeAnswer(currentQuestion, false)}>Неверно</button>
					<button onClick={() => writeAnswer(currentQuestion, true)}>Верно</button>
				</div>
			</QuizWrapper>) : <>Loading...</>}
		</>}
	</div>)
}

export default Quiz
