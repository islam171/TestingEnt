import styles from "./Quiz.module.scss"
import QuizWrapper from "../QuizWrapper/QuizWrapper.js";
import QuizCard from "../QuizCard/QuizCard.js";
import QuizNotStarted from "../QuizNotStarted/QuizNotStarted.js";
import QuizFinishPage from "../QuizFinishPage/QuizFinishPage.js";
import Selection from '../../../feuture/Selection/Selection.js'
import ProgressBar from '../../../feuture/ProgressBar/ProgressBar.js'
import Button from '../../../feuture/Button/Button.js'
import type {IQuestion} from "../../../models/questions.js";
import type {IPeriod} from "../../../models/types.js";

interface IQuizProps {
    variable: {
        currentQuestion: IQuestion | undefined,
        status: "notStarted" | "isProcess" | "Finished",
        isShowAnswer: boolean,
        isTurnQuestion: boolean,
        progress: number,
        period: number,
        countWrongAnswer: number
    },
    actions: {
        rightAnswer: () => void,
        wrongAnswer: () => void,
        flipCard: () => void,
        startQuiz: () => void,
        setPeriodValue: (n: number) => void,
        showAnswer: () => void
    },
    periods: IPeriod[]
}

const Quiz = ({
                  variable: {currentQuestion, status, isShowAnswer, progress, isTurnQuestion, period, countWrongAnswer},
                  actions: {rightAnswer, wrongAnswer, flipCard, startQuiz, setPeriodValue, showAnswer},
                  periods
              }: IQuizProps) => {
    return (<div className={styles.Quiz}>
        <Button onClick={() => flipCard()} active={isTurnQuestion}>Перевернуть</Button>
        <Selection toggleSelection={setPeriodValue} value={period} values={periods}/>
        <ProgressBar progress={progress}/>
        {status === 'notStarted' && <QuizNotStarted startQuiz={startQuiz}/>}
        {status === 'Finished' && <QuizFinishPage startQuiz={startQuiz} countWrongAnswer={countWrongAnswer}/>}
        {status === 'isProcess' && <>
            {currentQuestion ? (<QuizWrapper>
                <QuizCard
                    currentQuestion={currentQuestion}
                    flipCard={showAnswer}
                    isShowAnswer={isShowAnswer}
                    isTurnQuestion={isTurnQuestion}/>
                <div className={styles.Quiz__control}>
                    <button onClick={() => wrongAnswer()}>Неверно</button>
                    <button onClick={() => rightAnswer()}>Верно</button>
                </div>
            </QuizWrapper>) : <>Loading...</>}
        </>}
    </div>)
}

export default Quiz
