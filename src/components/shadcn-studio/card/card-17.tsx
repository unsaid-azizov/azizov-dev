import { useEffect, useRef, type ReactNode } from 'react'
import { Card } from '@/components/ui/card'

interface Card3dProps {
  children: ReactNode;
  className?: string;
}

export function Card3d({ children, className = '' }: Card3dProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const lastMousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    let rect: DOMRect
    let centerX: number
    let centerY: number

    const animate = () => {
      if (!rect) {
        rect = card.getBoundingClientRect()
        centerX = rect.left + rect.width / 2
        centerY = rect.top + rect.height / 2
      }

      const relX = lastMousePosition.current.x - centerX
      const relY = lastMousePosition.current.y - centerY

      card.style.transform = `perspective(1000px) rotateX(${-relY * 0.035}deg) rotateY(${relX * 0.035}deg) scale3d(1.025, 1.025, 1.025)`
      card.style.boxShadow = '0 10px 35px rgba(0, 0, 0, 0.2)'

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const onMove = (e: MouseEvent) => {
      lastMousePosition.current = { x: e.clientX, y: e.clientY }
    }
    const onEnter = () => {
      card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease'
      animate()
    }
    const onLeave = () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
      card.style.boxShadow = 'none'
      card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease'
    }

    card.addEventListener('mouseenter', onEnter)
    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      card.removeEventListener('mouseenter', onEnter)
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <Card ref={cardRef} className={className}>
      {children}
    </Card>
  )
}