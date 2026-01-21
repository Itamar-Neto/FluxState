import CardBase from "../Common/Cards/CardBase";
import StackedCard from "../Common/Cards/StackedCard";
function Main() {
    return (
        <>
            <main className="bg-amber-800 w-full h-full ml-10 flex flex-row">
                <CardBase />
                <CardBase />
                <CardBase />
            </main>
        </>
    )
}

export default Main;