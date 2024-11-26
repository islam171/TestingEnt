import styles from "../Quiz/Quiz.module.scss";

const QuizFinishPage = ({startQuiz, countWrongAnswer}) => {
    return <div className={styles.Quiz__over}>
        <p>Тестирование окончено, неправильных ответа: {countWrongAnswer}</p>
        <button onClick={() => startQuiz()}>Начать занова</button>
    </div>
}

export default QuizFinishPage