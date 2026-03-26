import styles from "../Quiz/Quiz.module.scss";


interface QuizProps {
    startQuiz: () => void;
    countWrongAnswer: number
}

const QuizFinishPage = ({startQuiz, countWrongAnswer}: QuizProps) => {
    return <div className={styles.Quiz__over}>
        <p>Тестирование окончено, неправильных ответа: {countWrongAnswer}</p>
        <button onClick={() => startQuiz()}>Начать занова</button>
    </div>
}

export default QuizFinishPage