import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
    return (
        <div className="bg-slate-400 h-screen">
            <Header />
            <main className="container mx-auto w-[600px] bg-sky-900 text-indigo-100 p-5  rounded-2xl shadow-md ">
                <Quiz />
            </main>
        </div>
    );
}

export default App;
