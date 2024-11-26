import {useEffect, useMemo, useState} from "react";


export const useQuiz = (questionsData) => {


    const [currentIndex, setCurrentIndex] = useState(0)
    const [status, setStatus] = useState('notStarted')
    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [wrongAnswers, setWrongAnswers] = useState([])
    const [goodAnswer, setGoodAnswer] = useState([])
    const [period, setPeriod] = useState(1)
    const [questions, setQuestions] = useState([])
    const [isTurnQuestion, setIsTurnQuestion] = useState(true)
    const [countWrongAnswer, setCountWrongAnswer] = useState(0);
    
    const startQuestions = questionsData.filter(item => item.period === period)
    
    const flipCard = () => {
        setIsShowAnswer(prev => !prev)
    }
    
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    let progress = ((goodAnswer.length / startQuestions.length) * 100)
    const currentQuestion = useMemo(() => questions[currentIndex], [currentIndex, questions])

    useEffect(() => {
        setQuestions(shuffle(startQuestions))
    }, []);

    useEffect(() => {
        if(status === 'finished') return
        const handleKeyDown = e => {
            switch (e.key) {
                case ' ': {
                    e.preventDefault()
                    flipCard()
                    break
                }
                case 'ArrowRight':
                    writeAnswer(currentQuestion, true)
                    break
                case 'ArrowLeft':
                    writeAnswer(currentQuestion, false)
                    break
                case 'Enter':
                    writeAnswer(currentQuestion, true)
                    break
                case 'Backspace':
                    writeAnswer(currentQuestion, false)
                    break
                default:
                    return
            }
        }
        if(status === 'isProcess') {
            document.addEventListener('keydown', handleKeyDown)
        }
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [flipCard])

    const startQuiz = () => {
        Zeroing()
        setStatus("isProcess")
    }

    const Zeroing = () => {
        setQuestions(shuffle(questionsData).filter(item => item.period === period))
        setCurrentIndex(0)
        setIsShowAnswer(false)
        setGoodAnswer([])
        setWrongAnswers([])
        setCountWrongAnswer(0)
    }

    const writeAnswer = (que, selectedOption) => {
        if(isShowAnswer) return
        setIsShowAnswer(false)
        let wrongArray = wrongAnswers
        wrongArray = wrongArray.filter(item => item.id !== que.id)
        if (!selectedOption) {
            wrongArray.push(que)
            setCountWrongAnswer(prevState => prevState+1)
        } else {
            setGoodAnswer(prev => [...prev, que])
        }
        if (questions.length - 1 > currentIndex) {
            setCurrentIndex(prevState => prevState + 1)
        } else {
            if (wrongArray.length > 0) {
                setQuestions(wrongArray)
                setCurrentIndex(0)
            }else{
                setStatus("finished")
            }
        }
        setWrongAnswers(wrongArray)
    }

    const setPeriodValue = (value) => {
        setPeriod(value)
        Zeroing()
        setStatus('notStarted')
    }

    return {actions: {writeAnswer, startQuiz, currentQuestion, flipCard, setPeriodValue, setIsTurnQuestion}, variable: {currentIndex, currentQuestion, status, isShowAnswer, period, progress, isTurnQuestion, countWrongAnswer}}
}