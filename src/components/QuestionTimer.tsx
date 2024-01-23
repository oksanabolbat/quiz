import { useState, useEffect } from "react";

export default function QuestionTimer({
    timeout,
    onTimeout,
}: {
    timeout: number;
    onTimeout: () => void;
}) {
    const [remainingTime, setRemainingTime] = useState<number>(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);
        return () => clearTimeout(timer);
    }, [onTimeout, timeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prev) => prev - 100);
        }, 100);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <progress
            max={timeout}
            value={remainingTime}
            id="question-timer"
            className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-sky-50 [&::-webkit-progress-value]:bg-sky-500 [&::-moz-progress-bar]:bg-sky-500 w-full mb-6"
        />
    );
}
