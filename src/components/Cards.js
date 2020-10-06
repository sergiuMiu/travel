import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Cards() {
    return (
        <div>
            <div className='cards'>
                <h1>check out these EPIC Destinations in Romania!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                            src='images/cluj_napoca.jpg'
                            text='Home to the country’s largest university'
                            label='Cluj-Napoca'
                            path='/services'
                            />
                             <CardItem
                            src='images/delta.jpg'
                            text='Europe’s second largest river delta      '
                            label='Delta Dunarii'
                            path='/services'
                            />
                            <CardItem
                            src='images/timisoara.jpg'
                            text='Timisoara is one of the country’s largest cities'
                            label='Timisoara'
                            path='/services'
                         />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                            src='images/bucharest.jpg'
                            text='Bucharest is a city that combines the old with the new'
                            label='Bucharest'
                            path='/services'
                            />
                             <CardItem
                            src='images/sinaia.jpg'
                            text='Sinaia is a mountain resort town '
                            label='Sinaia'
                            path='/services'
                            />
                            <CardItem
                            src='images/sibiu.jpg'
                            text=' Sibiu, once part of Hungary'
                            label='Sibiu'
                            path='/services'
                         />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                            src='images/sighisoara.jpg'
                            text='Sighisoara is one of the best places to visit in Romania due to its beautiful preserved walled town'
                            label='Sighisoara'
                            path='/services'
                            />
                             <CardItem
                            src='images/mamaia.jpg'
                            text='Mamaia is Romania’s most popular seaside resort'
                            label='Mamaia'
                            path='/services'
                            />
                            <CardItem
                            src='images/painted_monasteries.jpg'
                            text='Among the most picturesque attractions of Romania'
                            label=' Painted Monasteries'
                            path='/services'
                         />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
