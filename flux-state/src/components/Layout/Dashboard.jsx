function Dashboard({ children }) {
    return (
        <>
            <section className="h-[90vh] w-[95vw] mt-8 relative z-10 p-8 mx-4 bg-white/5            backdrop-blur-md border border-white/10 rounded-2xl shadow-2x1 flex justify-center items-center ">{children}</section>
        </>
    )
}

export default Dashboard;