import React, { useState } from "react";

const StackedCards = () => {

    const [cards, setCards] = useState([
        { id: 1, bg: 'bg-[#091736]', title: 'SSD Memory' },
        { id: 2, bg: 'bg-[#06346D]', title: 'RAM Memory' },
        { id: 3, bg: 'bg-[#347BDC]', title: 'Network Latency' }
    ]);

    const handleCardClick = () => {
        setCards((prev) => {
            const newStack = [...prev];
            const movedCard = newStack.shift();
            return [...newStack, movedCard];
        });
    };

    return (
        <div className='flex justify-center items-end h-57 w-54.5'>
            <div className='relative w-54.5 h-57 cursor-pointer' onClick={handleCardClick}>{cards.map((card, index) => {
                const isTop = index === 0;
                const isSecond = index === 1;
                const isThird = index === 2;

                return (
                    <div key={card.id} className={`absolute w-full h-full rounded-3x1 shadow-xl flex flex-col justify-top p-6 text-white transition-all duration-500 ease-in-out 
                    ${isTop ? 'z-30 scale-100 rounded-2xl shadow-xl/30' : ''}
                    ${isSecond ? 'z-20 scale-95 -translate-y-6 translate-x-2 rotate-15 rounded-2xl' : ''}
                    ${isThird ? 'z-10 scale-90 -translate-y-16 trasnlate-x-12 rotate-30 rounded-2xl' : ''}
                    ${card.bg}
                    `}

                        style={{ transform: isTop ? '' : isSecond ? 'translateX(1rem)' : 'translateX(5rem)', }}
                    >
                        <h2 className='text-xl font-semibold font-[Inter]'>{card.title}</h2>
                        <p>Clique para mudar</p>
                    </div>
                );

            })}
            </div>
        </div>
    );

};

export default StackedCards;


