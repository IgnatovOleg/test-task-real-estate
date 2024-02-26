import React, { useState } from 'react'
import { BsHouse } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrentPosts } from '../../store/currentPostsReducer'
import { add_Post } from '../../store/postsReducer'
import "../Menu/Menu.scss"
import Category from '../Category'

function Menu() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.posts)
  const coords = useSelector(state => state.coords.coords)
  const [newPostStatus, setNewPostStatus] = useState(false)
  const [postName, setPostName] = useState('')
  const [postPrice, setPostPrice] = useState(0)
  const [postImage, setPostImage] = useState('')
  const [startPrice, setStartPrice] = useState(0)
  const [endPrice, setEndPrice] = useState(1)
  const [estateType, setEstateType] = useState('')

  const createNewPost = e => {
    e.preventDefault()
    setNewPostStatus(true)
    setPostName(' ')
    setPostPrice(0)
    setPostImage(' ')
  }

  const handleChoice = category => {
    if (category === 'all') {
      dispatch(addCurrentPosts(posts))
    } else {
      dispatch(addCurrentPosts(posts.filter(el => el.category === category)))
    }
  }
  const handleSortByPrice = e => {
    dispatch(addCurrentPosts(posts.filter(el => el.price >= startPrice && el.price <= endPrice)))
    setEndPrice(0)
    setStartPrice(0)
  }
  const handleCreateNewMarker = e => {
    if (coords.length > 1) {
      const newPost = {
        id: Date.now(),
        disc: postName,
        category: estateType,
        price: postPrice,
        img: postImage,
        coord: coords,
      }
      dispatch(add_Post(newPost))
      setNewPostStatus(false)
    } else {
      alert('Оберіть місце на карті')
    }
  }

  return (
    <>
      {!newPostStatus ? (
        <div className='menu-container'>
          <div className='logo'>
            <BsHouse />
            <h3>The Real Estate</h3>
          </div>
          <div className='category-container'>
            <h3>Категорії</h3>
            <ul>
              <Category handleChoice={handleChoice} />
              <h4>Ціна оренди</h4>
              <div className='price-range-container'>
                <input type='text' placeholder='Від' onChange={e => setStartPrice(e.target.value)} value={startPrice} />
                <input type='text' placeholder='До' onChange={e => setEndPrice(e.target.value)} value={endPrice} />
                <input type='submit' value='Пошук' onClick={handleSortByPrice} />
              </div>
            </ul>
          </div>
          <div className='post-container'>
            <input type='button' value='Додати оголошення' onClick={e => createNewPost(e)} />
          </div>
        </div>
      ) : (
        <div className='menu-container'>
          <div className='logo'>
            <BsHouse />
            <h3>The Real Estate</h3>
          </div>
          <div className='new-post-form'>
            <form>
              <input type='text' placeholder='Назва объяви' onChange={e => setPostName(e.target.value)} />
              <input type='text' placeholder='вкажіть вартість' onChange={e => setPostPrice(+e.target.value)} />
              <input type='text' placeholder='Посилання на фото' onChange={e => setPostImage(e.target.value)} />
              <span>Вкажіть тип нерухомості</span>
              <select onChange={e => setEstateType(e.target.value)}>
                <option value='flat' label='Квартири' />
                <option value='house' label='Будинки' />
                <option value='room' label='Кімнати' />
                <option value='apartment' label='Апартаменти' />
                <option value='commercial' label='Комерційна нерухомість' />
              </select>

              <p>Натисність на карті щоб вказати місце розташування а потім кнопку зберегти</p>
            </form>
          </div>
          <div className='post-container'>
            <input type='button' value='Зберегти' onClick={e => handleCreateNewMarker(e)} />
          </div>
        </div>
      )}
    </>
  )
}

export default Menu
