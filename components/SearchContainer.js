import React, { useEffect, useState } from 'react'
import { MdClose, MdSearch } from 'react-icons/md'
import { colors, fontWeight } from 'styles/theme'
import EpisodeList from './episodes/EpisodeList'
import { SectionTitle } from './SectionTitle'
import { ChannelsCarousel } from './channel/ChannelsCarousel'
import Link from 'next/link'
import { useSearch } from 'hooks/useSearch'
import { useRouter } from 'next/router'

const SearchContainer = () => {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')
  const [channels, setChannels] = useState([])
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    if (router.query.search !== undefined) {
      setIsOpen(true);
      setSearchKeyword(router.query.search)
    }
  }, [])
  
  const onSearchChange = e => {
    const { value } = e.currentTarget
    if (value.length > 2) {
      router.push(`/?search=${value}`)
      setSearchKeyword(value);
    }
  }

  const closeModal = () => {
    router.push('/')
    setIsOpen(false)
    setSearchKeyword('')
  }

  const { data: dataChannels, isLoading: loadingChannels } = useSearch('channels', searchKeyword)
  const { data: dataEpisodes, isLoading: loadingEpisodes } = useSearch('audio_clips', searchKeyword, 4)

  useEffect(() => {
    if (dataChannels) setChannels(dataChannels.slice(0,4))
  }, [dataChannels, dataEpisodes])

  return (
    <div className={`search-container ${isOpen ? 'full' : ' '}`}>

      <button>
        {isOpen ? (
          <MdClose size='2rem' color={colors.darkGray} onClick={closeModal} />
          ) : (
          <MdSearch size='2rem' color={colors.darkGray} onClick={() => setIsOpen(true)}/>
        )}
      </button>

      {isOpen && (
        <>
          <input 
            type="search" 
            name="main-search" 
            id="searchInput" 
            placeholder={'Search...'}
            onChange={onSearchChange}
          />

          {searchKeyword.length > 2 && (
            <>
              <SectionTitle title='Channels' button={<Link href={`/search/channels/${searchKeyword}`}><a>See all channels</a></Link>}/>
              <ChannelsCarousel channels={channels} loading={loadingChannels} />

              <SectionTitle title='Episodes'  button={<Link href={`/search/episodes/${searchKeyword}`}><a>See all episodes</a></Link>}/>
              <EpisodeList audioClips={episodes} loading={loadingEpisodes}/>
            </>
          )}

        </>
      )}


      <style jsx>{`
        a {
          font-size: .9rem;
          font-weight: ${fontWeight.bold};
          color: ${colors.darkGray};
          text-decoration: none;
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
