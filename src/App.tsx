import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useGSAP } from '@gsap/react';
import Flip from 'gsap/Flip';
import gsap from 'gsap';
import ImageIcons from './Components/ImageIcons';
import Images from './Components/Images';
import LoadingScreen from './Components/LoadingScreen';
import LeftContent from './Components/LeftContent';
import RightContent from './Components/RightContent';
import { isModuleNamespaceObject } from 'util/types';
import SplitType from 'split-type';

function App() {

  const ref: any = useRef()

  useGSAP(() => {
    gsap.registerPlugin(Flip)

    const leftImg1 = document.querySelector('.imageIcon1')
    const leftImg2 = document.querySelector('.imageIcon2')
    const leftImg3 = document.querySelector('.imageIcon3')

    const image1 = document.querySelector('.imageContainer1')!
    const image2 = document.querySelector('.imageContainer2')!
    const image3 = document.querySelector('.imageContainer3')!


    gsap.timeline()
      .to('.loading', {
        delay: 2,
        opacity: 0
      })
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
      .to('.loadingscreen', {
        display: 'none'
      }, '<')
      .to('.images', {
        display: 'none'
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

      const imageEase = 'sine.in'
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

      const middleText = new SplitType('.middle .kin')
      const topText = new SplitType('.top p')

      gsap.timeline()
        .from('.navbar div', {
          yPercent: 50,
          opacity: 0,
          // stagger: 0.1,
          delay: 0.6
        })
        .from('.group-image', {
          opacity: 0,
          xPercent: 10,
        }, '<')
        .from('.bottom div', {
          yPercent: 50,
          opacity: 0,
          stagger: 0.1
        }, '<')
        .from(middleText.lines, {
          yPercent: 60,
          opacity: 0,
          stagger: 0.1
        }, '<')
        .from(topText.chars, {
          opacity: 0,
          scale: 0.8,
          stagger: 0.1
        }, '<')
    }, 9000)




    const linkAnimation = (className: string) => {
      const link = new SplitType(`.${className} p`)
      return gsap.to(link.chars, {
        yPercent: -100,
        paused: true,
        stagger: 0.03,
        duration: 0.2
      })
    }

    let aboutAnimation = linkAnimation('about')
    let workAnimation = linkAnimation('work')
    let journalAnimation = linkAnimation('journal')
    let contactAnimation = linkAnimation('contact')

    const about = document.querySelector('.about')
    const work = document.querySelector('.work')
    const journal = document.querySelector('.journal')
    const contact = document.querySelector('.contact')
    about?.addEventListener('mouseenter', () => {
      aboutAnimation.play()
    })

    about?.addEventListener('mouseleave', () => {
      aboutAnimation.reverse()
    })

    work?.addEventListener('mouseover', () => {
      workAnimation.play()
    })
    work?.addEventListener('mouseout', () => {
      workAnimation.reverse()
    })

    journal?.addEventListener('mouseover', () => {
      journalAnimation.play()
    })

    journal?.addEventListener('mouseout', () => {
      journalAnimation.reverse()
    })

    contact?.addEventListener('mouseover', () => {
      contactAnimation.play()
    })

    contact?.addEventListener('mouseout', () => {
      contactAnimation.reverse()
    })

  }, { scope: ref })

  return (
    <div ref={ref} className='container'>
      <Images />
      <LeftContent />
      <RightContent />
      <ImageIcons />
      <LoadingScreen />
    </div>
  );
}

export default App;
