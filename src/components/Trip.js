import React from 'react'
import "./Trip.css"
import TripData from './TripData'

import img11 from "../assets/img8.avif"
import img22 from "../assets/img9.jpg"
import img33 from "../assets/img10.webp"
import img31 from "../assets/imgm.jpg"
import imgw from "../assets/imgw.jpg"
import SOHAR from "../assets/SOHAR.jpg"
import Turtle from "../assets/Turtle.jpg"
import mibam from "../assets/mibam.jpg"
import musa from "../assets/musa.jpg"
import Daymaniyat from "../assets/Daymaniyat.jpg"
import jebel from "../assets/jebel.jpg"
import Cave from "../assets/Cave.jpg"


const Trip = () => {
  return (
    <div className='trip'>
        <h1>Tourist places</h1>
        <p>Incredible journey, incredible memories.</p>
        
        <div className='tripcard'>

        <TripData
        image={img11}
        heading = "Matrah"
        text = "Matrah (also known as Muttrah) is a historic port city located in Muscat, the capital of Oman. With its picturesque harbor, bustling souks (traditional markets), and charming alleys, Matrah offers a captivating blend of old-world charm and modernity. It has been a significant trading hub for centuries, connecting Oman to various parts of the world."
        
        />

        <TripData
        image={img22}
        heading = "Sur"
        text = "Sur is a term used to describe a musical note that is slightly higher in pitch than the standard note. It is a significant element in many musical traditions, including Indian classical music. The concept of sur is crucial for achieving proper intonation and melodic precision in performances. Musicians train extensively to develop a keen sense of sur, allowing them to create beautiful and emotive melodies that resonate with audiences."
        
        />


        <TripData
        image={img33}
        heading = "Rustaq"
        text = "Rustaq is a historical city located in Oman. It is renowned for its ancient forts, hot springs, and rich cultural heritage. The city's fascinating history attracts visitors from around the world who come to explore its historical landmarks and immerse themselves in its traditional charm. Rustaq offers a delightful mix of old-world charm and modern comforts, making it an excellent destination for travelers seeking a unique and memorable experience. Whether you want to wander through its ancient forts, relax in the therapeutic hot springs, or simply soak in the local culture, Rustaq has something to offer for everyone."
        
        />

<TripData
        image={img31}
        heading = "Muscat"
        text = "Al Alam Palace, one of six residences of the sultan, has a history of over 200 years, and was built under the watch of Imam Sultan bin Ahmed, the 7th direct great-grandfather of Sultan Haitham. The existing palace, which has a facade of gold and blue, was rebuilt as a royal residence in 1972. The inner grounds of the palace remain off-limits, but members of the public are permitted to stop near the gates and take photographs."
        
        />

<TripData
        image={musa}
        heading = "Musandam"
        text = "The Musandam Governorate romanized: Muḥāfaẓat Musandam) is a governorate of Oman. With the exception of the exclave of Madha, it is located on the Musandam Peninsula, which juts into the Strait of Hormuz, the narrow entry into the Persian Gulf, from the Arabian Peninsula. The governorate is also an exclave, separated from the rest of Oman by the United Arab Emirates. Its location gives Oman partial control, shared with Iran, of the strategic strait. In the northern section of Musandam, around Kumzar, the language is Kumzari, which is a southwestern Iranian language closely related to Larestani and Luri. The Musandam Peninsula has an area of 1,800 km2 (690 sq mi) and a population of 31,425 people."
        
        />

<TripData
        image={imgw}
        heading = "wahiba desert"
        text = "Wahiba Sands is a region of desert in Oman. The region was named for the Bani Wahiba tribe. Divided between the northern and southern governorates in the Eastern Region. The area is defined by a boundary of 180 kilometers (110 mi) north to south and 80 kilometers (50 mi) east to west, with an area of 12,500 square kilometers (4,800 sq mi). The desert has been of scientific interest since a 1986 expedition by the Royal Geographical Society documented the diversity of the terrain, the flora and fauna, noting 16,000 invertebrates as well as 200 species of other wildlife, including avifauna. They also documented 150 species of native flora."
        
        />

<TripData
        image={SOHAR}
        heading = "Sohar"
        text = "Sohar is the capital and largest city of the Al Batinah North Governorate in Oman. An ancient capital of the country that once served as an important Islamic port town, Sohar has also been credited as the mythical birthplace of Sinbad the Sailor.According to the 2010 census, Sohar's population was 140,006, making it Oman's fifth most-populated settlement. Described as an industrial town, the development of the Sohar Industrial Port during the 2000s has transformed it into a major Omani industrial hub."
        
        />

<TripData
        image={Turtle}
        heading = "Ras al Hadd"
        text = "Raʾs al-Ḥadd is a village in Ash Sharqiyah district in Oman. It is on a point at the entrance to the Gulf of Oman. The region is served by Ras al Hadd Airport. Al-Hajar Mountains are located to the west. The beaches at Ras al Hadd and nearby Ra's al-Jinz are known as a breeding ground for green sea turtles. "
        
        />

<TripData
        image={mibam}
        heading = "Wadi mibam"
        text = "This beautiful wadi is situated far inside the region towards the end of Mibam village. You will discover this wonder just at the center of the Tiwi mountains. Technically many people see it as a part of Wadi Tiwi. Wadi Mibam starts its area from the terminal end of Wadi Tiwi. Until recently this beautiful wadi was almost unknown to most people. It was indeed the hidden treasure of Oman. However, it is exploring its full potential now with superfluous attractions. "
        
        />

<TripData
        image={Daymaniyat}
        heading = "dynamite island"
        text = "The Nature Reserve is located in Wilayat AlSeeb in the Muscat Governorate and lies about 18 kilometres (11 mi) off the coast of Barka (70 kilometres (43 mi) west of Muscat, the capital). It is composed of nine islands with a total area of 100 hectares (250 acres). The reserve has a rich natural heritage and is replete with several kinds of coral reefs, including some examples that are quite rare. The island is home to a large number of sea turtles that lay their eggs and nest there, as well as a magnet for migratory and indigenous birds."

        
        
        />

<TripData
        image={jebel}
        heading = "Jebel Akhdar"
        text = "The Jebel Akhdar or Al Jabal Al Akhdar romanized: Al-Jabal Al-Akhḍar, lit. 'The Green Mountain') is one of the Hajar Mountains in Ad Dakhiliyah Governorate of Oman. It rises to a height of 2,980 m (9,780 ft) and encompasses the Saiq Plateau at 2,000 m above sea level. Jebel Akhdar is famous for its labyrinth of wadis and terraced orchards, where pomegranates, apricots and roses grow in abundance due to its mild Mediterranean climate."

        
        
        />

<TripData
        image={Cave}
        heading = "Al Hoota Cave"
        text = "Al Hoota Cave romanized: Kahf Al-Hūtah is a cave located in Al-Hamra', Ad Dakhiliyah Governorate, Oman, that is 5 km (3.1 mi) long. The cave was first discovered by locals several hundred years ago and was officially opened as a tourist destination in December 2006.

        The Omani blind cave fish lives in this cave system.[citation needed] Stalagmites from this cave yield data on the palaeoclimate."

        
        
        />

        </div>
    </div>
  )
}

export default Trip