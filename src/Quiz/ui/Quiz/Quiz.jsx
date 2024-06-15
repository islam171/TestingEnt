import styles from "./Quiz.module.scss"
import QuizWrapper from "../QuizWrapper/QuizWrapper.jsx";
import QuizCard from "../QuizCard/QuizCard.jsx";


const Quiz = ({currentQuestion, status, setIsShowAnswer, isShowAnswer, writeAnswer, startQuiz}) => {

    if (status === 'notStarted') {
        return <div className={styles.wrapper}>
            <button onClick={() => startQuiz()}>Начать тестирование</button>
        </div>
    }

    if (status === 'finished') {
        return <div className={styles.Quiz__over}>
            <p>Тестирование окончено</p>
            <button onClick={() => startQuiz()}>Начать занова</button>
        </div>
    }


    return (<div className={styles.Quiz}>

        {status === 'isProcess' && <>
            {currentQuestion ? (
                <QuizWrapper>
                    <QuizCard currentQuestion={currentQuestion} setIsShowAnswer={setIsShowAnswer}
                              isShowAnswer={isShowAnswer}/>
                    <div className={styles.Quiz__control}>
                        <button onClick={() => writeAnswer(currentQuestion, true)}>Верно</button>
                        <button onClick={() => writeAnswer(currentQuestion, false)}>Неверно</button>
                    </div>
                </QuizWrapper>
            ) : <>Loading...</>}
        </>
        }

    </div>)
}

export default Quiz