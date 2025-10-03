'use client'

import React, { useEffect, useRef } from 'react'

type MatrixBackgroundProps = {
  opacity?: number
  color?: string
  speedMs?: number
}

export default function MatrixBackground({ opacity = 0.13, color = '#10b981', speedMs = 40 }: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()
    window.addEventListener('resize', setSize)

    const fontSize = 28
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * canvas.height / fontSize))

    const charset = '7#ワ2*ネ!3>0ク=9?5-ト8/ア1+レ@4ユ%6シ$ム0&7<8'
    ctx.globalAlpha = opacity

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.35)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = color
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`

      for (let i = 0; i < drops.length; i += 1) {
        const text = charset.charAt(Math.floor(Math.random() * charset.length))
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] += 1
      }
      animationRef.current = window.setTimeout(draw, speedMs)
    }

    draw()
    return () => {
      window.removeEventListener('resize', setSize)
      if (animationRef.current) window.clearTimeout(animationRef.current)
    }
  }, [opacity, color, speedMs])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}


