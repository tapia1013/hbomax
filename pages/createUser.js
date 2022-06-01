import Head from 'next/head'
import Image from 'next/image'

export default function CreateUser() {
  return (
    <>
      <div className='create-user'>
        <div className='create-user__top'>
          <div className='create-user__logo' />
          <span className='create-user__title'>
            Who Is Watching?
          </span>
        </div>

        <div className='create-user__form'>
          <div className='create-user__user-box'>
            <img className='create-user__user-img' src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/los-angeles-skyline-at-dusk-kelley-king.jpg' />
            <div className='create-user__user-name'>LA</div>
          </div>
        </div>

        <div className='create-user__buttons'>
          <button className='create-user__adult'>Add Adult</button>
          <button className='create-user__kid'>Add Kid</button>
        </div>
      </div>
    </>
  )
}