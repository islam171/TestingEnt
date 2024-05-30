import {useEffect, useMemo, useState} from "react";
import {questionsData} from "../data/dataNew.js";
import styles from "./Quiz.module.scss"


const Quiz = () => {


    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    const [questions, setQuestions] = useState([])
    useEffect(() => {
        setQuestions(shuffle(questionsData))
        setQuestions(shuffle(questionsData))
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0)
    const [status, setStatus] = useState('notStarted')
    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [wrongAnswer, setWrongAnswer] = useState([])

    const currentQuestion = useMemo(() => questions[currentIndex], [currentIndex, questions])

    const startQuiz = () => {
        setQuestions(shuffle(questionsData))
        setCurrentIndex(0)
        setIsShowAnswer(false)
        setStatus("isProcess")
    }
    const stopTest = () => {

    }

    const writeAnswer = (que, selectedOption) => {
        setIsShowAnswer(false)
        let wrongArray = wrongAnswer
        if (!selectedOption) {
            wrongArray = wrongArray.filter(item => item.id !== que.id)
            wrongArray.push(que)
        } else {
            wrongArray = wrongArray.filter(item => item.id !== que.id)
        }
        if (questions.length - 1 > currentIndex) {
            setCurrentIndex(prevState => prevState + 1)
        } else {
            if (wrongArray.length > 0) {
                setQuestions(wrongArray)
                setCurrentIndex(0)
            } else {
                setStatus("finished")
            }
        }
        setWrongAnswer(wrongArray)
    }

    if (status === 'notStarted') {
        return <button onClick={() => startQuiz()}>Начать тестирование</button>
    }

    if (status === 'finished') {
        return <div>
            <p>Тестирование окончено</p>
            <button onClick={() => startQuiz()}>Начать занова</button>
        </div>
    }


    return (<>
        {status === 'isProcess' && <>
            {currentQuestion ? <div>
                <p onClick={() => setIsShowAnswer(prev => !prev)}>{!isShowAnswer ? currentQuestion.questions : currentQuestion.answer}</p>
                <button onClick={() => writeAnswer(currentQuestion, true)}>Верно</button>
                <button onClick={() => writeAnswer(currentQuestion, false)}>Неверно</button>
            </div> : <>Loading...</>}
        </>

        }

    </>)
}

export default Quiz