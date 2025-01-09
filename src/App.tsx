import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGSAP } from '@gsap/react';
import Flip from 'gsap/Flip';
import gsap from 'gsap';
import ImageIcons from './Components/ImageIcons';
import Images from './Components/Images';
import LoadingScreen from './Components/LoadingScreen';

function App() {

  useGSAP(() => {
    gsap.registerPlugin(Flip)

    const leftImg1 = document.querySelector('.imageIcon1')
    const leftImg2 = document.querySelector('.imageIcon2')
    const leftImg3 = document.querySelector('.imageIcon3')

    const image1 = document.querySelector('.imageContainer1')!
    const image2 = document.querySelector('.imageContainer2')!
    const image3 = document.querySelector('.imageContainer3')!
    

    gsap.timeline()
      .to('.firsthalf', {
        delay: 0.7,
        yPercent: -100,
        duration: 1,
        ease: 'power1.in'
      })
      .to('.secondhalf', {
        // delay: 0.3,
        yPercent: 100,
        duration: 1,
        ease: 'power1.in'
      }, '<')
      .to('.image4', {
        display: 'block',
        duration: 1,
        scale: 1,
      }, '<')
      .to('.image5', {
        display: 'block',
        duration: 1,
        scale: 1,
      })
      .to('.image6', {
        display: 'block',
        duration: 1,
        scale: 1,
      })
      .to('.image1', {
        display: 'block',
        duration: 1,
        scale: 1,
      })
      .to('.image4', {
        display: 'none'
      }, '<')
      .to('.image5', {
        display: 'none'
      }, '<')
      .to('.image6', {
        display: 'none'
      }, '<')
      .to('.image2', {
        display: 'block',
        scale: 1,
        duration: 1
      })
      .to('.image3', {
        display: 'block',
        scale: 1,
        duration: 1
      })

    setTimeout(() => {
      const imgState1 = Flip.getState('.image1')
      const imgState2 = Flip.getState('.image2')
      const imgState3 = Flip.getState('.image3')
      // const imgState4 = Flip.getState('.image4')
      // const imgState5 = Flip.getState('.image5')
      // const imgState6 = Flip.getState('.image6')

      leftImg1?.appendChild(image1)
      // leftImg1?.appendChild(image4)
      leftImg2?.appendChild(image2)
      // leftImg2?.appendChild(image5)
      leftImg3?.appendChild(image3)
      // leftImg3?.appendChild(image6)

      const imageEase = 'power1.in'
      Flip.from(imgState1, {
        duration: 0.5,
        delay: 0.4,
        ease: imageEase
      })

      Flip.from(imgState2, {
        delay: 0.3,
        duration: 0.5,
        ease: imageEase
      })

      Flip.from(imgState3, {
        delay: 0.2,
        duration: 0.5,
        ease: imageEase
      })
      // Flip.from(imgState4, {
      //   delay: 0.2,
      //   duration: 0.5,
      //   ease: imageEase
      // })
      // Flip.from(imgState5, {
      //   delay: 0.2,
      //   duration: 0.5,
      //   ease: imageEase
      // })
      // Flip.from(imgState6, {
      //   delay: 0.2,
      //   duration: 0.5,
      //   ease: imageEase
      // })
    }, 6500)
  })

  return (
    <div className='container'>
      <Images />
      <ImageIcons />
      <LoadingScreen />
    </div>
  );
}

export default App;
