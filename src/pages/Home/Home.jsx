import styles from "./Home.module.scss"
import Quiz from "../../Quiz/ui/Quiz/Quiz.jsx";
import Selection from "../../feuture/Selection/Selection.jsx";
import {useQuiz} from "../../hooks/useQuiz.js";
import ProgressBar from "../../feuture/ProgressBar/ProgressBar.jsx";

const Home = () => {


    const {
        variable: {isShowAnswer, currentQuestion, status, period, progress},
        actions: {writeAnswer, startQuiz, flipCard, setPeriodValue}
    } = useQuiz()


    const periods = [
        {name: "Древний мир", slug: 1},
        {name: "Средневековье", slug: 2},
        {name: "Новое время", slug: 3},
        {name: "Новейшая время", slug: 4}
    ]

    return <div className={styles.Home}>
        <Selection toggleSelection={setPeriodValue} value={period} values={periods}/>
        <ProgressBar progress={progress}/>
        <Quiz
            writeAnswer={writeAnswer}
            status={status}
            flipCard={flipCard}
            isShowAnswer={isShowAnswer}
            currentQuestion={currentQuestion}
            startQuiz={startQuiz}/>
    </div>
}

export default Home