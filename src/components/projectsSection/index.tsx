"use client"

import styles from './projectsSection.module.scss'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SetStateAction, useState } from 'react';

import Image from 'next/image';

import futebol from '@/assets/jobs/futebol.jpg'

const projects = [
  {
    img: futebol,
    name: 'futebol'
  },
  {
    img: futebol,
    name: 'futebol'
  },
  {
    img: futebol,
    name: 'futebol'
  },
  {
    img: futebol,
    name: 'futebol'
  },
  {
    img: futebol,
    name: 'futebol'
  },
  {
    img: futebol,
    name: 'futebol'
  },
]

export default function ProjectsSection() {

  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    infinite: true,
    speed:500,
    slidesToShow:3,
    centerMode: true,
    centerPadding: "0",
    draggable: false,
    //variableWidth: true,

    //autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",


    beforeChange: (current: any, next: number) => setImageIndex(next)
  };


  return (
    <div className={styles.container}>
      <h1>Projetos( )</h1>
      <p>Clique para saber mais sobre os projetos.</p>
      <div className={styles.boxCarrousel} >
        <div className={styles.slider_container} >
        <Slider {...settings}  >
          {projects.map((project, idx)=>(
            <div 
            key={idx} 
            className={`${styles.slider_item} ${ idx === imageIndex ? styles.slider_item_active : ''}`} 
            style={{ width: 350 }}
            >
            <h1>{idx}</h1>
            </div>
          ))}

          
      
        </Slider>
      </div>
      </div>
    </div>
  )
}