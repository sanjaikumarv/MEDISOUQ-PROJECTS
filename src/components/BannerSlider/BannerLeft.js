import React from "react";

export default function BannerLeft() {
  return (
    <div className='CardsComponent-CardLeft'>
        <div className='CardsComponent-CardLeft-TopContainer'>
          <button className='CardsComponent-CardLeft-TopContainer-Button'>
            SALE
          </button>
          <img
            className='CardsComponent-CardLeft-TopContainer-Img'
            src=''
            alt=''
          />
        </div>
        <div className='CardsComponent-CardLeft-Titles'>
          <h1 className='CardsComponent-CardLeft-Titles-Name'>
            Mustela Moistrurising Baby Lotion 300 ML
          </h1>
          <h1 className='CardsComponent-CardLeft-Titles-Price'>
            AED 60.00 <span>AED 50.00</span>
          </h1>
        </div>
      </div>
  );
}
