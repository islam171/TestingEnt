import {useQuiz} from "../../hooks/useQuiz.js";
import Quiz from "../../Quiz/ui/Quiz/Quiz.jsx";
import {englishData, periods} from "../../data/englishData.js";

const English = () => {



    const {
        variable,
        actions
    } = useQuiz(englishData)

    return <div>
        <Quiz
            actions={actions}
            variable={variable}
            periods={periods}
        />
    </div>
}

export default English