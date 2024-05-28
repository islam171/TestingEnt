import {useEffect, useMemo, useReducer, useState} from "react";
import {questionsData} from "./data.js";

const useQuiz = () => {
    const [questions, setQuestions] = useState(questionsData)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [status, setStatus] = useState('notStarted')
    const [wrongAnswer, setWrongAnswer] = useState([])

    useEffect(() => {
        setCurrentQuestion(questions[currentIndex])
    }, [currentIndex, questions]);

    const start = () => {
        setCurrentIndex(0)
        setStatus('isProcess')
    }

    const writeAnswer = (id, optionIndex) => {
        let currentQuestion = questions.find(item => item.id === id)
        if(currentQuestion){
           if(currentQuestion.answer === optionIndex){
                console.log('true')
           }else{
               setWrongAnswer(prev => [...prev, currentQuestion])
           }

           if(questions.length - 1 > currentIndex){
               setCurrentIndex(prevState => prevState+1)
           }
        }
    }

    return useMemo(() => ({questions, currentQuestion, status, actions: {start, writeAnswer}}), [currentQuestion, status])
}



const Quiz = () => {

    const {currentQuestion, status, actions: {start, writeAnswer}} = useQuiz()

    console.log(status)

    if(status === 'notStarted'){
        return <div>
            <button onClick={() => start()}>Начать тестирование</button>
        </div>
    }

    return (<>
        {status === 'isProcess' && <>
            <Quiz question={currentQuestion} writeAnswer={writeAnswer}/>
        </>

        }

    </>)
}

export default Quiz