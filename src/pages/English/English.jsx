import {useQuiz} from "../../hooks/useQuiz.js";
import Selection from "../../feuture/Selection/Selection.jsx";
import ProgressBar from "../../feuture/ProgressBar/ProgressBar.jsx";
import Quiz from "../../Quiz/ui/Quiz/Quiz.jsx";
import {englishData} from "../../data/englishData.js";
import {Link} from "react-router-dom";

const English = () => {

    const {
        variable: {isShowAnswer, currentQuestion, status, period, progress},
        actions: {writeAnswer, startQuiz, flipCard, setPeriodValue}
    } = useQuiz(englishData)

    const periods = [{name: "Фразы", slug: 1}, {name: "Фразы на повсевдневность", slug: 2},]

    return <div>
        <Link to={"/"}>Главная</Link>
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

export default English