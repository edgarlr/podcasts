import { MouseEvent, useEffect, useState } from 'react'
import HeroCard from './HeroCard'

const Hero = ({ episodes }: { episodes: TEpisode[] }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const prevIndex = (e: MouseEvent) => {
    e.preventDefault()
    if (activeIndex <= 0) return
    setActiveIndex((oldIndex) => oldIndex - 1)
  }

  const nextIndex = (e: MouseEvent) => {
    e.preventDefault()
    if (activeIndex > episodes.length) return
    setActiveIndex((oldIndex) => oldIndex + 1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      activeIndex === episodes.length - 1
        ? setActiveIndex(0)
        : setActiveIndex((oldIndex) => oldIndex + 1)
    }, 10000)
    return () => {
      clearTimeout(timer)
    }
  }, [activeIndex])

  if (!episodes || episodes.length === 0) return null

  return (
    <section className="hero-container">
      {episodes.map((episode, index) => (
        <HeroCard
          episode={episode}
          index={index}
          active={activeIndex}
          listLength={episodes.length}
          key={episode.id}
          onPrevClick={prevIndex}
          onNextClick={nextIndex}
        />
      ))}
      <style jsx>{`
        .hero-container {
          position: relative;
          min-height: min-content;
          margin: 2.5rem 0 2rem;
          height: 39rem;
          border-bottom: var(--default-border);
        }
        @media screen and (min-width: 1024px) {
          .hero-container {
            padding: 0;
            margin: 0 0 2rem;
            height: 28rem;
            display: flex;
            align-items: center;
          }
        }
        @media screen and (min-width: 1440px) {
          .hero-container {
            margin: 0 -4rem 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
