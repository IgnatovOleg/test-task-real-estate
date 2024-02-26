import './App.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrentPosts } from './store/currentPostsReducer'
import Menu from './components/Menu'
import Map from './components/Map'

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.posts)

  useEffect(() => {
    dispatch(addCurrentPosts(posts))
  }, [posts])

  return (
    <div className='main-container'>
      <Menu />
      <Map />
    </div>
  )
}

export default App
