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
import { useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

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
          {slides.filter(projects => !projects.inGrid).map((project, index) => (
            <div
              className="embla__slide "
              key={project.name}
            >
              <div className="relative">
                <CldImage
                  src={`docs/${project.pictures[0].src}`}
                  alt={project.pictures[0].alt}
                  width={project.pictures[0].width}
                  height={project.pictures[0].height}
                  crop="fill"
                  className="rounded-xl"
                />
                <div className={`font-semibold rounded-xl text-lg absolute inset-0 flex flex-col justify-center text-center bg-black hover:bg-opacity-70 bg-opacity-0 opacity-0 hover:opacity-100 transition duration-300 ${index === selectedIndex ? '' : 'hidden xl:flex'}`}>
                <Link href={`/projects/${project.slug}`} className="text-2xl text-white">Read more</Link >
                </div>
              </div>
              <h3 className='text-2xl font-semibold'>{project.name}</h3>
              <p className='text-secundary-800 font-semibold'>{project.subname}</p>
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
