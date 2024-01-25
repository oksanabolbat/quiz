import { useCallback, useState } from "react";
import { QUESTIONS } from "../data/qustions";
import Question from "./Question";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState<string[]>([]);
    const activeIndex = userAnswers.length;

    const answerHandler = useCallback((answer: string) => {
        setUserAnswers((prev) => [...prev, answer]);
    }, []);

    // const handleSkipAnswer = useCallback(
    //     () => answerHandler(""),
    //     [answerHandler]
    // );

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
                selectAnswerHandler={answerHandler}
                skipAnswerHandler={() => answerHandler("")}
                activeIndex={activeIndex}
                key={activeIndex}
            />
        </>
    );
}
