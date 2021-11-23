import React from 'react';
import { cards } from '../../data/cards';
import { MediaCard } from './MediaCard';
import '../../styles/mediaCards.css'

export default function MediaCards() {
    const cardData = cards()
    return (
        <div className="cardContainer">
            <div className='mediaCards' >
                {cardData.map((card) => (
                    <React.Fragment key={card.Title}>
                        <MediaCard
                            cardImage={card.cardImage}
                            cardTitle={card.cardTitle}
                            cardContent={card.cardContent}
                            cardAction={card.cardAction}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>

    )
}


