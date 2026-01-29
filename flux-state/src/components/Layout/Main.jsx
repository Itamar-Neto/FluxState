import CardBase from "../Common/Cards/CardBase";
import StackedCard from "../Common/Cards/StackedCard"

function Main() {
    return (
        <>
            <main className=" w-full h-full ml-10 flex">

                <div className="relative w-[60%] col-span-4 flex flex-row flex-wrap gap-3 justify-between ml-6 mr-8">


                    <CardBase titleCard='CPU Load / Temp.' w='245px' h='153px' />
                    <CardBase titleCard='GPU Load / Temp.' w='245px' h='153px' className='' />
                    <CardBase titleCard='System Temp.' w='245px' h='153px' />

                    <CardBase titleCard='Resource Timeline (60s)' w='528px' h='195px' />
                    <CardBase titleCard='System Health Score' w='245px' h='195px' />

                    <CardBase titleCard='Uptime' w='386px' h='157px' />
                    <CardBase titleCard='Active Processes' w='386px' h='157px' />

                </div>
                <div className=" mt-10 flex flex-col justify-between">
                    <StackedCard />
                    <CardBase titleCard='Alerts' w='258px' h='273px' />
                </div>


            </main>
        </>
    )
}

export default Main;