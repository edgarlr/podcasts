import { useFetchPlaylist } from 'hooks/useFetchPlaylist'
import React, { useState } from 'react'
import { MdClose, MdSearch } from 'react-icons/md'
import { colors, fontWeight } from 'styles/theme'
import EpisodeList from './episodes/EpisodeList'
import PodcastCover from './PodcastCover'
import { SectionTitle } from './SectionTitle'
import { useFetchChannels } from 'hooks/useFetchChannels'
import GridCarousel from './GridCarousel'

const SearchContainer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { clientPlaylist, isLoading } = useFetchPlaylist('4579242')
  const { clientChannels, isLoading: loadingChannels } = useFetchChannels()


  return (
    <div className={`search-container ${isOpen ? 'full' : ' '}`}>

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <MdClose size='2rem' color={colors.darkGray} />
          ) : (
          <MdSearch size='2rem' color={colors.darkGray}/>
        )}
      </button>

      {isOpen && (
        <>
          <input type="search" name="main-search" id="searchInput" placeholder={'Search...'}/>

          <SectionTitle title='Channels' button={<span>See all channels</span>}/>
          {!loadingChannels && (
            <GridCarousel >
              {clientChannels.slice(0, 4).map((channel, index) => (
                <PodcastCover channel={channel} index={index} key={index}/>
              ))}
            </GridCarousel>
          )}

          <SectionTitle title='Episodes'  button={<span>See all episodes</span>}/>
          <EpisodeList audioClips={clientPlaylist.slice(0,4)} loading={isLoading}/>
        </>
      )}


      <style jsx>{`
        span {
          font-size: .9rem;
          font-weight: ${fontWeight.bold};
          color: ${colors.darkGray};
        }
        input {
          border: none;
          outline: none;
          font-size: 2em;
          padding: 1rem 0;
          margin: 0;
          font-weight: ${fontWeight.bold};
          color: ${colors.black};
          width: 100%;
          border-bottom: 0;
        }
        input::-webkit-search-cancel-button{
          position:relative;
          right:.5rem;  

          -webkit-appearance: none;
          height: 15px;
          width: 15px;
          border-radius:10px;
          background: ${colors.gray};
          color: aliceblue;
        }
        input:placeholder-shown {
          border-bottom: 1px solid ${colors.lightGray};
        }
        .search-container {
          position: fixed;
          background: transparent;
          bottom: 100vh;
          right: 0;
          left: 0;
          top: 0;
          padding: 1.5rem;
          text-align: right;
          transition: bottom .3s;
          overflow-y: scroll;
        }
        .full {
          padding: 3.5rem 1.5rem;
          background: white;
          bottom: 0;
          text-align: left;
        }
        button {
          outline: none;
          border: none;
          background: transparent;
          padding: 0;
        }
        .full button {
          position: absolute;
          right: 1.5rem;
          top: 1.5rem;
        }
      `}</style>
    </div>
  )
}

export default SearchContainer
