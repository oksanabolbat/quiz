import reactLogo from "../assets/react.svg";

export default function Header() {
    return (
        <header className="flex flex-row justify-center gap-3 pt-6 mb-6">
            <img src={reactLogo} className="opacity-35" alt="React logo" />
            <h1 className="text-center text-3xl uppercase text-sky-500 ">
                React Quiz
            </h1>
        </header>
    );
}
