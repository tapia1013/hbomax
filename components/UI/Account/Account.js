import React from 'react'

const Account = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];

    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp)
    }

    return thumbnails
  }


  return (
    <div className='account '>
      <div className='account__details'>
        <div className='account__title'>My List</div>

        <div className='account__watch-list'>

          {loopComp((
            <div className='account__watch-video'>
              <img src='https://i.ebayimg.com/images/g/1NcAAOxywh1TEBku/s-l400.jpg' />

              {/** overlay for video */}
              <div className='account__watch-overlay'>
                <div className='account__watch-buttons'>
                  <div className='account__watch-circle'>
                    <i className='fas fa-play' />
                  </div>

                  <div className='account__watch-circle'>
                    <i className='fas fa-times' />
                  </div>
                </div>
              </div>
            </div>
          ), 6)}


        </div>
      </div>

      <div className='account__menu'>
        <ul className='account_main'>
          <li>
            <a href='/' className='active'>My List</a>
          </li>
        </ul>

        <div className='side-nav__divider' />

        <ul className='account_main'>
          <li>
            <a href='/'>Account</a>
          </li>

          <li>
            <a href='/'>Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Account