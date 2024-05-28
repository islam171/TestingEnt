import {useState} from "react";

const QuizItem = ({question, writeAnswer}) => {

    const [checkedState, setCheckedState] = useState(
        new Array(toppings.length).fill(false)
    );

    return <div >
        {question ? <div>
            <p>{question.questions}</p>
            {question.variant.map((variant, index) => (<div>
                <input
                    type="checkbox"
                    name={`${question}`}
                />
                <label htmlFor={variant}>{index + 1}. {variant}</label><br/>
            </div>))}
            <button onClick={() => writeAnswer(question.id, )}></button>
        </div> : <>Loading...</>}
    </div>
}

export default QuizItem