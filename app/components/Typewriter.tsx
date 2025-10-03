'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'

type TypewriterProps = {
  text: string | string[]
  typingSpeedMs?: number
  deletingSpeedMs?: number
  pauseMs?: number
  loop?: boolean
  className?: string
  caretClassName?: string
}

export default function Typewriter({
  text,
  typingSpeedMs = 60,
  deletingSpeedMs = 40,
  pauseMs = 1200,
  loop = true,
  className,
  caretClassName,
}: TypewriterProps) {
  const phrases = useMemo(() => (Array.isArray(text) ? text : [text]), [text])
  const [display, setDisplay] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const current = phrases[index % phrases.length]
    const isComplete = display === current

    const tick = () => {
      if (!isDeleting) {
        if (!isComplete) {
          setDisplay(current.slice(0, display.length + 1))
          timeoutRef.current = window.setTimeout(tick, typingSpeedMs)
        } else {
          timeoutRef.current = window.setTimeout(() => {
            setIsDeleting(true)
            tick()
          }, pauseMs)
        }
      } else {
        if (display.length > 0) {
          setDisplay(current.slice(0, display.length - 1))
          timeoutRef.current = window.setTimeout(tick, deletingSpeedMs)
        } else {
          setIsDeleting(false)
          setIndex((i) => i + 1)
          if (!loop && index + 1 >= phrases.length) return
          timeoutRef.current = window.setTimeout(tick, typingSpeedMs)
        }
      }
    }

    timeoutRef.current = window.setTimeout(tick, typingSpeedMs)
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrases, index, isDeleting, display, typingSpeedMs, deletingSpeedMs, pauseMs, loop])

  return (
    <span className={className}>
      {display}
      <span className={caretClassName ?? 'type-caret'}>|</span>
    </span>
  )
}


