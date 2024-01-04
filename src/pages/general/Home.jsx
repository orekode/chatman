import { Button, Navigation } from "@/Components"






const Home = () => {


    return (
        <div>
            <header className="bg-gray-50 ">                
                <div className="grid grid-cols-12 min-h-screen  max-[686px]:grid-cols-5 px-28 max-[790px]:px-14">
                    <div className="col-span-6 bg-red-5 flex items-center justify-end max-[686px]:block max-[686px]:text-center max-[686px]:-mt-6">
                        <div className="">
                            <h1 className=" text-6xl max-[1024px]:text-5xl max-[500px]:text-3xl mb-3">Get Connected With Poynt-Social</h1>
                            <Button.Lg>Start Connecting</Button.Lg>
                        </div>
                    </div>
                    <div className="col-span-6 bg-green-5 py-12 max-[686px]:py-0 max-[686px]:row-start-1 flex items-center justify-center">
                        <img src="/images/connected2.png" className="h-[70vh] max-[686px]:h-[50vh]  object-contain" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home