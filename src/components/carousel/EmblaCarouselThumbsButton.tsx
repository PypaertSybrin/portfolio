import Project from '@/models/Project'
import React from 'react' 
import ProjectPicture from '@/models/ProjectPicture'
import { CldImage } from 'next-cloudinary'

type PropType = {
  selected: boolean
  onClick: () => void
  projectPicture: ProjectPicture
}

export const Thumb: React.FC<PropType> = props => {
  const { selected, onClick, projectPicture } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : '',
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <CldImage
          src={`docs/${projectPicture.src}`}
          alt={projectPicture.alt}
          width={projectPicture.width}
          height={projectPicture.height}
          className='object-cover h-full w-full rounded-xl'
        />
      </button>
    </div>
  )
}
