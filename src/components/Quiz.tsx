import { useCallback, useState } from "react";
import { QUESTIONS } from "../data/qustions";
import Question from "./Question";
import Results from "./Results";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState<string[]>([]);
    const activeIndex = userAnswers.length;

    const [results, setResults] = useState<{ wins: number; fails: number }>({
        wins: 0,
        fails: 0,
    });

    const answerHandler = useCallback(
        (answer: string) => {
            setUserAnswers((prev) => [...prev, answer]);

            setResults((prev) => {
                const newResults = { ...prev };
                answer === QUESTIONS[activeIndex].answers[0]
                    ? (newResults.wins = newResults.wins + 1)
                    : (newResults.fails = newResults.fails + 1);

                return newResults;
            });
        },
        [activeIndex]
    );
    const tryAgainHandler = () => {
        setUserAnswers([]);
        setResults({ wins: 0, fails: 0 });
    };
    if (activeIndex === QUESTIONS.length) {
        return (
            <p className="text-center text-2xl py-5 text-sky-500">
                <Results {...results} tryAgainHandler={tryAgainHandler} />
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
            <p className="text-right">
                You current score: {results.wins} of {QUESTIONS.length}
            </p>
        </>
    );
}
