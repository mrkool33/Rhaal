import React from 'react'

import "./Destiation.css"

import img1 from "../assets/img6.jpg"
import img2 from "../assets/img7.jpg"
import img3 from "../assets/top1.png"
import img4 from "../assets/top2.png"

import DestiationData from './DestiationData'


const Destiation = () => {
  return (
    <>
    <div className='destination'>
    <h1>Popular Destinations</h1>
    <p>Explore the breathtaking beauty of Oman."</p>

    <DestiationData
    className="first-des"
    heading="Salalah"
    text="Salalah, nestled in the southern region of Oman, is a mesmerizing coastal gem that captivates visitors with its lush green landscapes, pristine beaches, and unique subtropical climate. Renowned as the perfume capital of Arabia, Salalah boasts a rich cultural heritage, inviting travelers to immerse themselves in the traditional souks, aromatic frankincense markets, and colorful festivals. A haven for nature enthusiasts, the city offers a stunning contrast of golden desert dunes and verdant mountains, making it an ideal destination for exploring scenic wadis and natural springs. Whether wandering through ancient archaeological sites, indulging in delectable Omani cuisine, or simply basking in the refreshing monsoon breeze, Salalah promises an unforgettable and enchanting experience that lingers in the hearts of its visitors"
    img1={img1}
    img2={img2}
    />

<DestiationData
    className="first-des-reverse"
    heading="Nizwa"
    text="Nizwa, nestled in the heart of Oman, is a captivating city that seamlessly blends rich heritage with modernity. As the cultural capital of the country, Nizwa boasts a vibrant market, known as the Nizwa Souq, where colorful stalls offer an array of traditional crafts, spices, and local delicacies. The city's iconic Nizwa Fort stands tall, echoing tales of its historical significance and offering breathtaking views of the surrounding mountains and palm groves. Visitors can immerse themselves in the Omani culture by attending traditional performances, exploring ancient mud-brick houses, and witnessing the awe-inspiring Al Jabal al Akhdar, or Green Mountain.With its enchanting landscapes and warm hospitality, Nizwa invites travelers to embark on an unforgettable journey through Oman's rich heritage and natural wonders."
    img1={img3}
    img2={img4}

    

    />

    
       
    </div>
    </>
  )
}

export default Destiation