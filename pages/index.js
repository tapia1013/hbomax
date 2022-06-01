import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='login-user'>
        {/* login screen top */}
        <div className='login-user__top'>
          <div className='login-user__logo' />
          <span className='login-user__title'>
            Who Is Watching?
          </span>
        </div>

        {/* login screen form */}
        <div className='login-user__form'>
          <div className='login-user__user-box'>
            <img className='login-user__user-img' src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/los-angeles-skyline-at-dusk-kelley-king.jpg' />
            <div className='login-user__user-name'>LA</div>
          </div>
        </div>

        {/* login screen buttons */}
        <div className='login-user__buttons'>
          <button className='login-user__adult'>Add Adult</button>
          <button className='login-user__kid'>Add Kid</button>
        </div>
      </div>
    </>
  )
}