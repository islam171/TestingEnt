import styles from "./Quiz.module.scss"
import QuizWrapper from "../QuizWrapper/QuizWrapper.jsx";
import QuizCard from "../QuizCard/QuizCard.jsx";
import QuizNotStarted from "../QuizNotStarted/QuizNotStarted.jsx";
import QuizFinishPage from "../QuizFinishPage/QuizFinishPage.jsx";


const Quiz = ({currentQuestion, status, flipCard, isShowAnswer, writeAnswer, startQuiz}) => {

    if (status === 'notStarted') return <QuizNotStarted startQuiz={startQuiz}/>

    if (status === 'finished') return <QuizFinishPage startQuiz={startQuiz}/>


    return (<div className={styles.Quiz}>
        {status === 'isProcess' && <>
            {currentQuestion ? (
                <QuizWrapper>
                    <QuizCard currentQuestion={currentQuestion} flipCard={flipCard}
                              isShowAnswer={isShowAnswer}/>
                    <div className={styles.Quiz__control}>
                        <button onClick={() => writeAnswer(currentQuestion, false)}>Неверно</button>
                        <button onClick={() => writeAnswer(currentQuestion, true)}>Верно</button>
                    </div>
                </QuizWrapper>
            ) : <>Loading...</>}
        </>
        }

    </div>)
}

export default Quiz