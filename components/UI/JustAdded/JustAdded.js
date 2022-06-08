import React from 'react'

const JustAdded = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];

    for (let i = 0; i <= digit; i++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  }




  return (
    <div className='just-added'>
      <h3 className='just-added__title'>Just Added</h3>

      <div className='just-added__thumbnails'>
        {loopComp(
          (<div className='just-added__thumbnail'>
            <img src='https://i.ebayimg.com/images/g/1NcAAOxywh1TEBku/s-l400.jpg' alt='poster' />

            <div className='just-added__top-layer'>
              <i className='fas fa-play' />
            </div>
          </div>)
          , 10)}
      </div>
    </div>
  )
}

export default JustAdded