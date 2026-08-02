'use client'
import { useEffect, useLayoutEffect, useState } from 'react'

/** useLayoutEffect on the client, useEffect on the server, no warning. */
const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

interface TypeLineProps {
  text: string
  /** ms per character */
  speed?: number
  /** ms to wait before the first character */
  startDelay?: number
  className?: string
}

/**
 * Types a string out once, then leaves the caret blinking.
 *
 * The full string is in the server-rendered HTML (and stays in the a11y tree)
 * so crawlers and screen readers get it whole. Reduced-motion users skip the
 * animation entirely. A stacked grid cell reserves the final box, so nothing
 * below reflows while it types.
 */
const TypeLine = ({
  text,
  speed = 45,
  startDelay = 300,
  className = '',
}: TypeLineProps) => {
  const [count, setCount] = useState(text.length)

  // Blank it before the first paint so there is no flash of the full string.
  useIsoLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setCount(0)
  }, [text])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let i = 0
    let interval: ReturnType<typeof setInterval>

    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setCount(i)
        if (i >= text.length) clearInterval(interval)
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(start)
      clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return (
    <span className={`grid ${className}`}>
      {/* Ghost copy holds the final width and height. */}
      <span aria-hidden className="col-start-1 row-start-1 invisible">
        {text}
      </span>
      <span className="col-start-1 row-start-1">
        <span className="sr-only">{text}</span>
        <span aria-hidden>{text.slice(0, count)}</span>
        <span aria-hidden className="caret ml-[0.08em]" />
      </span>
    </span>
  )
}

export default TypeLine
