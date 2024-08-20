import {useQuiz} from "../../hooks/useQuiz.js";
import Selection from "../../feuture/Selection/Selection.jsx";
import ProgressBar from "../../feuture/ProgressBar/ProgressBar.jsx";
import Quiz from "../../Quiz/ui/Quiz/Quiz.jsx";
import {englishData} from "../../data/englishData.js";
import {Link} from "react-router-dom";

const English = () => {



    const {
        variable,
        actions
    } = useQuiz(englishData)

    const periods = [{name: "Фразы", slug: 1}, {name: "1000 слов из контекста", slug: 2}]

    return <div>
        <Link to={"/"}>Главная</Link>
        <button onClick={() => actions.setIsTurnQuestion(prev => !prev)}>Перевернуть</button>
        <Selection toggleSelection={actions.setPeriodValue} value={variable.period} values={periods}/>
        <ProgressBar progress={variable.progress}/>
        <Quiz
            actions={actions}
            variable={variable}/>
    </div>
}

export default English