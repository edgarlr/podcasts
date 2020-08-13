import ReactDOM from 'react-dom'

export const AudioPlayerContainer = ({isOpen}) => {
  if (!isOpen) {
    return null
  }
  return <h2>Hola</h2>
  // return ReactDOM.createPortal(
  //   <h1>Audio Player</h1>,
  //   document.getElementById('audioPlayer')
  // )
}
