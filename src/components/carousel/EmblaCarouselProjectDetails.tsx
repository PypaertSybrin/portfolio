'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import ProjectPicture from '@/models/ProjectPicture'
import { CldImage } from 'next-cloudinary'

type PropType = {
  slides: ProjectPicture[]
  options?: EmblaOptionsType
}

const EmblaCarouselProjectDetails: React.FC<PropType> = props => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div>
      <div className="hidden sm:block embla-detail">
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container-detail">
            {slides.map(project => (
              <CldImage
                src={`docs/${project.src}`}
                alt={project.alt}
                width={project.width}
                height={project.height}
                className="object-cover h-full w-full rounded-xl"
                key={project.src}
              />
            ))}
          </div>
        </div>
        <div className="embla-thumbs">
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container">
              {slides.map((projectPicture, index) => (
                <Thumb
                  key={index}
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  projectPicture={projectPicture}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden grid gap-8">
        {slides.map(project => (
          <CldImage
            src={`docs/${project.src}`}
            alt={project.alt}
            width={project.width}
            height={project.height}
            className="object-cover h-full w-full rounded-xl"
            key={project.src}
          />
        ))}
      </div>
    </div>
  )
}

export default EmblaCarouselProjectDetails
