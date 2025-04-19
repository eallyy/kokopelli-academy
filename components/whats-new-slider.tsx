'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const CoffeeBeanOutline = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="#ffffff"
  >
    <path d="m19.616 4.498-.012-.013c-.015-.015-.027-.032-.042-.047-3.391-3.39-9.541-2.754-13.71 1.415-4.169 4.17-4.804 10.319-1.415 13.709 1.467 1.466 3.448 2.179 5.563 2.179 2.775 0 5.78-1.228 8.146-3.594 4.146-4.146 4.792-10.247 1.468-13.649zM6.913 6.913c2.078-2.079 4.698-3.165 7.081-3.165 1.66 0 3.201.534 4.366 1.623.147.617.045 1.265-.328 1.932-.952 1.699-3.445 3.298-6.202 3.979-3.201.791-6.014 2.634-7.164 4.697-.145.26-.26.523-.351.788-1.291-2.899-.337-6.916 2.598-9.853zm10.174 10.173c-3.521 3.52-8.593 4.188-11.43 1.555-.149-.62-.051-1.268.319-1.932.943-1.69 3.44-3.287 6.214-3.972 3.184-.786 5.991-2.632 7.151-4.702.145-.26.26-.522.353-.786 1.28 2.898.323 6.905-2.606 9.836z" />
  </svg>
)

export const CoffeeBeanSolid = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="#ffffff"
  >
    <path d="M4.101 17.937c-2.052-3.215-1.182-8.09 2.282-11.553 3.417-3.417 8.21-4.315 11.426-2.369.355.611.5 1.125.518 1.191.211.666.111 1.372-.295 2.098-.952 1.699-3.445 3.298-6.202 3.979-3.201.791-6.014 2.634-7.164 4.697a4.404 4.404 0 0 0-.565 1.958zM19.912 6.083a4.43 4.43 0 0 1-.571 1.953c-1.16 2.07-3.968 3.916-7.151 4.702-2.773.685-5.271 2.281-6.214 3.972-.403.725-.499 1.432-.284 2.102.019.067.16.575.509 1.18 3.216 1.938 8.003 1.038 11.416-2.375 3.457-3.457 4.331-8.319 2.295-11.534z" />
  </svg>
)

const images = [
  { src: '/images/1.png', link: '/courses/1' },
  { src: '/images/2.png', link: '/courses/2' },
  { src: '/images/3.png', link: '/courses/3' },
]

export default function WhatsNewSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      startX = e.pageX - el.offsetLeft
      scrollLeft = el.scrollLeft
    }

    const onMouseLeave = () => (isDown = false)
    const onMouseUp = () => (isDown = false)

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - el.offsetLeft
      const walk = (x - startX) * 1.5
      el.scrollLeft = scrollLeft - walk
    }

    el.addEventListener('mousedown', onMouseDown)
    el.addEventListener('mouseleave', onMouseLeave)
    el.addEventListener('mouseup', onMouseUp)
    el.addEventListener('mousemove', onMouseMove)

    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      el.removeEventListener('mouseleave', onMouseLeave)
      el.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const handleScroll = () => {
    const el = containerRef.current
    if (!el) return
    const index = Math.round(el.scrollLeft / el.offsetWidth)
    setCurrent(index)
  }

  return (
      <div className="w-full">
      {/* SLIDER */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory cursor-grab gap-4 m-4"
      >
        {images.map((img, i) => (
            <Link
              href={img.link}
              key={i}
              className="shrink-0 snap-start w-full aspect-[4/2] lg:aspect-[5/1] relative"
            >
              <div className="w-full h-full overflow-hidden relative">
                <Image
                  src={img.src}
                  alt={`Slide ${i}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="100vw"
                />
              </div>
            </Link>
        ))}
      </div>

      {/* INDICATORS */}
      <div className="flex justify-center my-4 gap-2">
        {images.map((_, i) => (
            <div key={i}>
              {i === current ? <CoffeeBeanSolid /> : <CoffeeBeanOutline />}
            </div>
        ))}
      </div>
    </div>
  )
}
