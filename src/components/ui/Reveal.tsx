'use client'
import { useEffect, useRef, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  /** Stagger, in ms. */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section'
}

/**
 * Fades content up once, the first time it enters the viewport. It never
 * un-reveals on scroll-out, and it stops observing as soon as it has fired.
 *
 * Because this gates *content* and not just decoration, it fails open: if the
 * element is already on screen it reveals without waiting on an observer at
 * all, and it re-checks when the tab becomes visible (browsers suspend
 * IntersectionObserver delivery in background tabs, which would otherwise
 * leave a restored tab blank).
 */
const Reveal = ({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const inViewport = () => {
      const rect = node.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.bottom > 0
    }

    if (inViewport()) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(node)

    const onVisible = () => {
      if (document.visibilityState === 'visible' && inViewport()) {
        setShown(true)
        observer.disconnect()
      }
    }
    document.addEventListener('visibilitychange', onVisible)

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  const Tag = as as React.ElementType

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}

export default Reveal
