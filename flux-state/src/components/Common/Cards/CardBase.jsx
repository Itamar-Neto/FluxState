function CardBase({ w, h, titleCard }) {
    return (
        <>
            <div style={{ width: w, height: h }} className="relative bg-[#1D1D1D] rounded-2xl p-2 pl-2.5 text-left">
                <p>{titleCard}</p>
            </div>
        </>
    )
}

export default CardBase;