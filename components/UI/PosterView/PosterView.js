import React from 'react'





const PosterView = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];

    for (let i = 0; i <= digit; i++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  }



  return (
    <div className='poster-view'>
      <h3 className='poster-view__title'>Movies</h3>

      <div className='poster-view__thumbnails'>
        {loopComp(
          (<div className='poster-view__thumbnail'>
            <img src='https://i.ebayimg.com/images/g/1NcAAOxywh1TEBku/s-l400.jpg' alt='poster' />

            <div className='poster-view__top-layer'>
              <i className='fas fa-play' />
            </div>
          </div>)
          , 10)}
      </div>
    </div>
  )
}

export default PosterView