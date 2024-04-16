'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Project from '@/models/Project'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons'
import Image from 'next/image'

type PropType = {
  slides: Project[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = props => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((project, index) => (
            <div
              className="embla__slide embla__class-names flex flex-col relative"
              key={project.name}
            >
              <div className="relative">
                <Image
                  src={`/${project.pictures[0].src}`}
                  alt={project.name}
                  width={project.pictures[0].width}
                  height={project.pictures[0].height}
                  className="object-cover h-full w-full"
                ></Image>
                <div className={`font-semibold text-lg absolute inset-0 hover:opacity-70 opacity-0 flex flex-col justify-center text-center bg-black transition duration-300 ${index === selectedIndex ? '' : 'hidden'}`}>
                  <p className="text-2xl">Read more</p>
                </div>
              </div>
              <h3>{project.name}</h3>
              <p>{project.subname}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : '',
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
