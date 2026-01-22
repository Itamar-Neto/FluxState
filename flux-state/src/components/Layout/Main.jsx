import CardBase from "../Common/Cards/CardBase";
import StackedCard from "../Common/Cards/StackedCard"

function Main() {
    return (
        <>
            <main className="bg-amber-800 w-full h-full ml-10 flex justify-self-auto flex-wrap">
                <>
                    <CardBase w='245px' h='153px' titleCard='CPU Load / Temp.' />
                    <CardBase w='245px' h='153px' titleCard='GPU Load / Temp.' />
                    <CardBase w='245px' h='153px' titleCard='System Temp.' />
                </>
                <StackedCard />

                <>
                    <CardBase w='528px' h='195px' titleCard='Resource Timeline (60s)' />
                    <CardBase w='245px' h='195px' titleCard='System Health Score' />
                </>

                <CardBase w='258px' h='273px' titleCard='Alerts' />

                <>
                    <CardBase w='386px' h='157px' titleCard='Uptime' />
                    <CardBase w='386px' h='157px' titleCard='Active Processes' />
                </>
            </main>
        </>
    )
}

export default Main;