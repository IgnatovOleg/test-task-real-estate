import { Marker } from 'react-leaflet'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrentPosts } from '../../store/currentPostsReducer'
import SelectedCard from '../SelectedCard/SelectedCard'

function Markers() {
  const dispatch = useDispatch()
  const currentPosts = useSelector(state => state.currentPosts.currentPosts)
  const getShow = pos => {
    currentPosts.map(post => {
      if (post.id !== pos.id) {
        post.showed = false
      } else {
        pos.showed = !pos.showed
      }
    })
    dispatch(addCurrentPosts([...currentPosts]))
  }
  return (
    <>
      {currentPosts.map(pos => (
        <Marker
          key={pos.id}
          position={pos.coord}
          eventHandlers={{
            click: () => getShow(pos),
          }}
        >
          {pos.showed && <SelectedCard item={pos} />}
        </Marker>
      ))}
    </>
  )
}

export default Markers
