import React, { useState } from 'react'
import Input from './Component/input'

function App(){

    const distance = {
        'Guindy':[{dest:'Little Mount',km:1},{dest:'Anna University',km:2},{dest:'Adayar',km:3},{dest:'Besant nagar',km:4},{dest:'Velachery',km:3},{dest:'Thriuvaanmayur',km:6}],
        'Little Mount':[{dest:'Guindy',km:1},{dest:'Anna University',km:2},{dest:'Adayar',km:3},{dest:'Besant nagar',km:4},{dest:'Velachery',km:3},{dest:'Thriuvaanmayur',km:6}],
        'Anna University':[{dest:'Guindy',km:1},{dest:'Little Mount',km:2},{dest:'Adayar',km:3},{dest:'Besant nagar',km:4},{dest:'Velachery',km:3},{dest:'Thriuvaanmayur',km:6}],
        'Besant nagar':[{dest:'Guindy',km:1},{dest:'Little Mount',km:2},{dest:'Adayar',km:3},{dest:'Anna University',km:4},{dest:'Velachery',km:3},{dest:'Thriuvaanmayur',km:6}],
        'Thriuvaanmayur':[{dest:'Guindy',km:1},{dest:'Little Mount',km:2},{dest:'Adayar',km:3},{dest:'Anna University',km:4},{dest:'Besant nagar',km:3},{dest:'Velachery',km:6}],
        'Velachery':[{dest:'Guindy',km:1},{dest:'Little Mount',km:2},{dest:'Adayar',km:3},{dest:'Anna University',km:4},{dest:'Besant nagar',km:3},{dest:'Thriuvaanmayur',km:6}]
    }

    const[pickup,setPickup] = useState('')
    const[drop,setDrop] = useState('')
    const[pricePerKm,setPrice] = useState(15)
    const[tripDistance,setDistance] = useState(0)
    const[tripCost,setCost] = useState(0)

    const changePickUp = (evt)=>{
        if (evt.target.value == drop) {
            setPickup('')
            return
        }
        setPickup(evt.target.value)
    }

    const changeDrop = (evt)=>{
        if (evt.target.value == pickup) {
            setDrop('')
            return
        }
        setDrop(evt.target.value)
        setDistance(getDistance(pickup,evt.target.value))
    }

    const calculate = ()=>{
        setCost(tripDistance*pricePerKm)
    }

    const getDistance = (placeOne,placeTwo)=>{
        for (let i = 0; i < distance[placeOne].length; i++) {
            if (distance[placeOne][i].dest == placeTwo) {
                return distance[placeOne][i].km
            }
        }
        return 0
    }

    return(
        <div>
            <h1>Taxi Fare Estimator</h1>
            <Input placeholder="Enter pickup location" 
            value={pickup} 
            onChange={changePickUp}
            onSelect={(val)=>{
                if (val == drop) {
                    setPickup('')
                    return
                }
                setPickup(val)
                // setDistance(getDistance(drop,pickup))
            }}/>
            <br/>
            <Input placeholder="Enter drop location" 
            value={drop} 
            onChange={changeDrop}
            onSelect={(val)=>{
                if (val == pickup) {
                    setDrop('')
                    return
                }
                setDrop(val)
                setDistance(getDistance(pickup,val))
                }
                }/>
                <br/>
                <select onChange={(evt) => {
                    setPrice(evt.target.options[evt.target.options.selectedIndex].value)
                }}>
                    <option id='1' value={15}>Hatchback Rs. 15/km</option>
                    <option id='2' value={20}>Sedan cars Rs20/km</option>
                    <option id='3' value={30}>SUV cars Rs30/km</option>
                </select>
                <br/>
                <input type='number' placeholder='Distance of trip' value={tripDistance} disabled/>
                <br/>
                <input type='button' value='calculate' onClick={calculate}/>
                <br/>
                <input type='number' placeholder='Distance of trip' value={tripCost} disabled/>
        </div>
    )
}
export default App