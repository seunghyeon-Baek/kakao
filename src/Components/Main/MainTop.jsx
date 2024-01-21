import React from 'react';
import '../../assets/css/_mainTop.scss'
import '../../assets/css/common.scss';
import { HiDotsVertical } from "react-icons/hi";

function MainTop() {
  return (
    <div className="main" id="hyeon">
      {/* 달력. */}
      <div className='title'>
        <div className='title_date'>
          <div className='text' >
            <div>
              <img src='/img/ico_date30.gif' alt='icon' />
            </div>
            <div className='emph_tit'>
              <p>11월 30일에 전하는</p>
              <p>카카오 소식입니다</p>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 카드 1 */}
      <div className='cont_home'>
        <div className='section_home'>
          <div className='wrap_item' id='big'>
            <div className='card card1' >
              <div className='inner_item1'>
                <div className='item_card'>
                  <div class='wrap_cont'>
                    <div className='info_cate'>
                      <img src="/img/highlight.png" alt="highlightIcon" className='icon' />
                      <div className="balloon b_highlight">
                        <span className='txt_cate'>하이라이트</span>
                      </div>
                      <div className="icon-container">
                        <button>
                        <HiDotsVertical />
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="">
                    <div class="tit_card">카카오와 함께 하는 단골 만들기 챌린지</div>
                    <span className='info_card_tag'>
                      <span className='tag'>#단골만들기</span>
                      <span className='tag'>#카카오톡채널</span>
                    </span>
                    <img src='/img/cardImg2.png' className='cardImg' />
                  </a>
                </div>
              </div>
              <div className='inner_item1'>
                <div className='item_card'>
                  <div class="wrap_cont">
                    <div className='info_cate'>
                      <img src="/img/check.png" alt="checkIcon" className='icon' />
                      <div className="balloon b_check">
                        <span className='txt_cate'>금융안전보고서</span>
                      </div>
                      <div className="icon-container">
                        <button >
                        <HiDotsVertical />
                        </button>
                      </div>
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
                    <img src='/img/cardImg1.png' className='cardImg' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='wrap_item' id='half'>
            <div className='inner_item'>
              <div className='item_card card_half half1'>
                <a href="" className='wrap_cont'>
                  <div role='text'>
                    <span className='info_cate'>
                      <img src="/img/ico_responsible.png" alt="responsible" className='icon' />
                      <div className="balloon b_check">
                        <span className='txt_cate'>약속과 책임</span>
                      </div>
                    </span>
                    <div className='tit_content'>
                      <p>ESG 보고서,</p>
                      <p>카카오의 약속과 책임</p>
                    </div>
                    <span className='info_card'>
                      <span className='txt_ketword'>#카카오ESG</span>
                      <span className='txt_ketword'>#ESG보고서</span>
                    </span>
                  </div>
                </a>
              </div>
              <div className='item_card card_half half2'>
                <a href="" className='wrap_cont'>
                  <div role='text'>
                    <span className='info_cate'>
                      <img src="/img/ico_talktips.png" alt="talktips" className='icon' />
                      <div className="balloon b_check">
                        <span className='txt_cate'>카톡설명서</span>
                      </div>
                    </span>
                    <div className='tit_content'>
                      <p>모두의 카톡을 더 가깝고 안전하게,</p>
                      <p>카톡 설명서</p>
                    </div>
                    <span className='info_card'>
                      <span className='txt_ketword'>#카카오톡</span>
                      <span className='txt_ketword'>#커뮤니케이션</span>
                      <span className='txt_ketword'>#라이프</span>
                    </span>
                  </div>
                </a>
              </div>
              <div className='item_card card_half half3'>
                <a href="" className='wrap_cont'>
                  <div role='text'  >
                    <span className='info_cate'>
                      <img src="/img/ico_activegreen.png" alt="activegreen" className='icon' />
                      <div className="balloon b_check">
                        <span className='txt_cate'>액티브그린</span>
                      </div>
                    </span>
                    <div className='tit_content'>
                      <p>이용자와 함께 꿈꾸는</p>
                      <p>지속가능한 지구</p>
                    </div>
                    <span className='info_card'>
                      <span className='txt_ketword'>#esg</span>
                      <span className='txt_ketword'>#액티브그린</span>
                      <span className='txt_ketword'>#환경</span>
                    </span>
                  </div>
                </a>
              </div>
              <div className='item_card card_half half4'>
                <a href="" className='wrap_cont'>
                  <div role='text'>
                    <span className='info_cate'>
                      <img src="/img/ico_customer.png" alt="customer" className='icon' />
                      <div className="balloon b_check">
                        <span className='txt_cate'>고객센터</span>
                      </div>
                    </span>
                    <div className="balloon b_highlight">
                      <span className='txt_cate'>어떤 서비스를 도와드릴까요?</span>
                    </div>
                    <ul className='list_cs' id='list_cs'>
                      <li><a className='link_cs'>카카오</a></li>
                      <li><a className='link_cs'>다음</a></li>
                      <li><a className='link_cs'>커머스</a></li>
                    </ul>
                  </div>
                </a>
              </div>
              <div className='item_card card_middle middle1'>
                <a href="" className='wrap_cont'>
                  <div role='text'  >
                    <span className='info_cate'>
                      <img src="/img/sound.png" alt="activegreen" className='icon' />
                      <div className="balloon b_check">
                        <span className='txt_cate'>보도자료</span>
                      </div>
                      <span className='txt_cate date'>2023.12.05</span>
                    </span>
                    <div className='tit_content'>
                      <p>카카오, 연말 역대급 할인 행사</p>
                      <p>'2023 카카오쇼핑 페스타'진행</p>
                    </div>
                    <span className='info_card'>
                      <span className='txt_ketword'>#커머스CIC</span>
                      <span className='txt_ketword'>#쇼핑페스타</span>
                    </span>
                  </div>
                </a>
                <span className="wrap_thumb">
                  <img src='/img/middleImg.png' className='cardMiddleImg' />
                </span>
              </div>
              <div className='item_card card_middle middle2'>
                <a href="" className='wrap_cont'>
                  <div role='text'  >
                    <span className='info_cate'>
                      <img src="/img/sound.png" alt="activegreen" className='icon' />
                      <div className="balloon b_check">
                        <span className='txt_cate'>보도자료</span>
                      </div>
                      <span className='txt_cate date'>2023.12.04</span>
                    </span>
                    <div className='tit_content'>
                      <p>카카오임팩트, 기술 기반</p>
                      <p>사회문제 해결 위한 KAIS</p>
                    </div>
                    <span className='info_card'>
                      <span className='txt_ketword'>#카카오임팩트</span>
                      <span className='txt_ketword'>#태크포임팩트</span>
                    </span>
                  </div>
                </a>
                <span className="wrap_thumb">
                  <img src='/img/kaist.png' className='cardMiddleImg' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default MainTop;
