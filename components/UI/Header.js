import React from 'react'

const Header = () => {
  return (
    <header className='top-header'>
      {/* left side header */}
      <div className='top-header__left-side'>
        <div className='top-header__menu-btn'>
          <i className='fas fa-bars' />
        </div>

        <div className='top-header__search-btn'>
          <i className='fas fa-search' />
        </div>
      </div>

      {/* middle header */}
      <div className='top-header__logo'></div>

      {/* right side header */}
      <div className='top-header__account'>
        <img className='top-header__user-img' src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/los-angeles-skyline-at-dusk-kelley-king.jpg' />

        <div className='top-header__user-name'>LA</div>
      </div>
    </header>
  )
}

export default Header