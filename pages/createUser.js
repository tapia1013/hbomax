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
          <img className='create-user__user-img' src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/los-angeles-skyline-at-dusk-kelley-king.jpg' />

          <div className='create-user__input-group'>
            <label>Name</label>

            <input type='text' className='create-user__inputText' />

            <div className='create-user__colors'>
              <div
                className='create-user__color create-user__color--active'
                style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1)11%, rgba(119,30,135,1)100%)'
                }} />

              <div
                className='create-user__color'
                style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(234,117,64,1)11%, rgba(119,30,135,1)100%)'
                }} />

              <div
                className='create-user__color'
                style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(25,227,164,1)11%, rgba(19,30,15,1)100%)'
                }} />

              <div
                className='create-user__color'
                style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(156,217,124,1)11%, rgba(119,30,135,1)100%)'
                }} />

              <div
                className='create-user__color'
                style={{
                  background: 'rgb(2,27,64)',
                  background: 'linear-gradient(135deg, rgba(2,27,64,1)11%, rgba(219,130,45,1)100%)'
                }} />
            </div>
          </div>
        </div>

        <div className='create-user__buttons'>
          <button className='create-user__cancel'>Cancel</button>
          <button className='create-user__save'>Save</button>
        </div>
      </div>
    </>
  )
}