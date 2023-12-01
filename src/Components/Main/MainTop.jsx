import React from 'react';
import '../../assets/css/_mainTop.scss'
import '../../assets/css/common.scss';
import { BsThreeDotsVertical } from "react-icons/bs"; // icon

function MainTop() {
  return (
    <div className="main" id="hyeon">
      <div className='title'>
        <div className='title_date'>
          <div className='text' >
            <div>
              <img src='/img/ico_date30.gif' alt='' />
            </div>
            <div className='contentP'>
              <p>11월 30일에 전하는</p>
              <p>카카오 소식입니다</p>
            </div>
          </div>
        </div>
      </div>

      <div className='wrap_item 1'>
        <div>
          <div className='inner_item'>
            <div className='item_card'>
              <div className='info_cate'>
                <img src="/img/check.png" alt="checkIcon" className='checkIcon' />
                <div className="balloon">
                  <span className='txt_cate'>금융안전보고서</span>
                </div>
                <div className="icon-container">
                  <button >
                    <BsThreeDotsVertical />
                  </button>
                </div>
              </div>
              <a href="">
                <div class="tit_card">금융안전을 위한 카카오의 노력</div>
                <span className='info_card_tag'>
                  <span className='tag'>#금융안전보고서</span>
                  <span className='tag'>#안전한금융</span>
                  <span className='tag'>#이용자보호</span>
                  <span className='tag'>#카카오의다짐</span>
                </span>
                <span className='cardImg'>
                  <img src='/img/cardImg1.png' />
                </span>

              </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default MainTop;
