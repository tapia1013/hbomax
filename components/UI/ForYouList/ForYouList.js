import React from 'react'

const ForYouList = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];

    for (let i = 0; i <= digit; i++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  }




  return (
    <div className='foryou-list'>
      <h3 className='foryou-list__title'>For You</h3>

      <div className='foryou-list__thumbnails'>
        {loopComp(
          (<div className='foryou-list__thumbnail'>
            <img src='https://cdn.shopify.com/s/files/1/0747/3829/products/mNS0481_27e28581-cafd-47f4-a731-65b48c4fe462_1024x1024.jpg?v=1571444644' alt='poster' />

            <div className='foryou-list__top-layer'>
              <i className='fas fa-play' />
            </div>
          </div>)
          , 10)}
      </div>
    </div>
  )
}

export default ForYouList