import { useCallback, useState } from "react";
import { QUESTIONS } from "../data/qustions";
import Question from "./Question";

export default function Quiz() {
    const [answerState, setAnswerState] = useState("");
    const [userAnswers, setUserAnswers] = useState<string[]>([]);
    const activeIndex =
        answerState.length === 0 ? userAnswers.length : userAnswers.length - 1;

    const answerHandler = useCallback(
        (answer: string) => {
            setAnswerState("answered");
            setUserAnswers((prev) => [...prev, answer]);
            setTimeout(() => {
                setAnswerState(() =>
                    answer === QUESTIONS[activeIndex].answers[0]
                        ? "correct"
                        : "failed"
                );
                setTimeout(() => {
                    setAnswerState("");
                }, 1000);
            }, 1000);
        },
        [activeIndex]
    );
    const handleSkipAnswer = useCallback(
        () => answerHandler(""),
        [answerHandler]
    );

    if (activeIndex === QUESTIONS.length) {
        return (
            <p className="text-center text-2xl py-5 text-sky-500">
                quiz completed!
            </p>
        );
    }

    return (
        <>
            <Question
                questionText={QUESTIONS[activeIndex].text}
                answers={QUESTIONS[activeIndex].answers}
                selectAnswerHandler={answerHandler}
                skipAnswerHandler={handleSkipAnswer}
                activeIndex={activeIndex}
                answerState={answerState}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
            />
        </>
    );
}
