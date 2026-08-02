'use client'
import { CldImage } from 'next-cloudinary'

/**
 * `CldImage` uses hooks internally, so it needs a client boundary. Keeping it
 * behind this one-line wrapper lets the sections that render images stay
 * server components.
 */
export default CldImage
