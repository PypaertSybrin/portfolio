'use client'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CldImage } from 'next-cloudinary'
import ProjectPicture from '@/models/ProjectPicture'

/**
 * Frame viewer for a project's captures. Main pane plus a thumbnail strip,
 * both keyboard reachable. Falls back to a single static image when there is
 * only one capture.
 */
const Gallery = ({ pictures }: { pictures: ProjectPicture[] }) => {
  const [selected, setSelected] = useState(0)
  const [mainRef, mainApi] = useEmblaCarousel({ loop: pictures.length > 2 })
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const onThumbClick = useCallback(
    (index: number) => mainApi?.scrollTo(index),
    [mainApi],
  )

  useEffect(() => {
    if (!mainApi) return
    const onSelect = () => {
      const index = mainApi.selectedScrollSnap()
      setSelected(index)
      thumbApi?.scrollTo(index)
    }
    onSelect()
    mainApi.on('select', onSelect).on('reInit', onSelect)
    return () => {
      mainApi.off('select', onSelect).off('reInit', onSelect)
    }
  }, [mainApi, thumbApi])

  if (pictures.length === 0) return null

  if (pictures.length === 1) {
    return (
      <figure className="pane">
        <figcaption className="flex items-baseline gap-2 border-b border-line px-3 py-2 text-[10px] text-faint">
          <span className="text-phosphor" aria-hidden>
            ▸
          </span>
          <span>{pictures[0].src}.png</span>
          <span className="leader" />
          <span>1 / 1</span>
        </figcaption>
        <div className="crt relative bg-raised">
          <CldImage
            src={`docs/${pictures[0].src}`}
            alt={pictures[0].alt}
            width={pictures[0].width}
            height={pictures[0].height}
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="w-full"
          />
        </div>
      </figure>
    )
  }

  return (
    <div className="pane">
      <div className="flex items-baseline gap-2 border-b border-line px-3 py-2 text-[10px] text-faint">
        <span className="text-phosphor" aria-hidden>
          ▸
        </span>
        <span className="truncate">{pictures[selected].src}.png</span>
        <span className="leader" />
        <span>
          {selected + 1} / {pictures.length}
        </span>
      </div>

      <div className="crt relative bg-raised">
        <div className="gallery__viewport" ref={mainRef}>
          <div className="gallery__container">
            {pictures.map((picture, index) => (
              <div className="gallery__slide" key={picture.src}>
                <CldImage
                  src={`docs/${picture.src}`}
                  alt={picture.alt}
                  width={picture.width}
                  height={picture.height}
                  priority={index === 0}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line p-2">
        <div className="gallery-thumbs__viewport" ref={thumbRef}>
          <div className="gallery-thumbs__container">
            {pictures.map((picture, index) => (
              <button
                key={picture.src}
                type="button"
                onClick={() => onThumbClick(index)}
                aria-label={`Show capture ${index + 1}: ${picture.alt}`}
                aria-current={index === selected}
                className={`gallery-thumbs__slide overflow-hidden border transition-colors ${
                  index === selected
                    ? 'border-phosphor'
                    : 'border-line opacity-55 hover:opacity-100'
                }`}
              >
                <CldImage
                  src={`docs/${picture.src}`}
                  alt=""
                  width={280}
                  height={210}
                  crop="fill"
                  sizes="7rem"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
