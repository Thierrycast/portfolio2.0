import Styles from "./technologiesSection.module.scss"
import Image from "next/image"
import {technologies} from '@/data/technologies'

export default function TechnologiesSection() {
  return (
    <div id="tecnologies" className={Styles.container} >
      <h1>Conhecimentos( )</h1>

      <div className={Styles.technologies} >
        {
            technologies.map((technologie, index)=>(
                <div key={index} className={Styles.technologiesItem} >
                    <div className={Styles.hexagon} >
                        <Image src={technologie.icon} alt={`icon ${technologie.name}`}/>
                    </div>
                    <p>{technologie.name}</p>
                </div> 
            ))
        }
      </div>
    </div>
  )
}
