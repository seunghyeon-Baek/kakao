import React from 'react';
import '../../assets/css/_footer.scss'
import '../../assets/css/common.scss';

function Footer() {
    return (
<div class="footer">
  <div class="wrap-footer">
    <div class="service">
      <h2 class="screen-out">하단 메뉴</h2>
      <ul class="inner-service">
        <li class="wrap-service">
          <strong class="tit_service"><a href="#">소개</a></strong>
          <ul class="list_service">
            <li class="list_service_item"><a href="#">카카오 문화</a></li>
            <li class="list_service_item"><a href="#">공동체</a></li>
            <li class="list_service_item"><a href="#">연혁</a></li>
          </ul>
        </li>
        <li class="wrap-service">
          <strong class="tit_service"><a href="#">이야기</a></strong>
          <ul class="list_service">
            <li class="list_service_item"><a href="#">콘텐츠 저장소</a></li>
            <li class="list_service_item"><a href="#">뚝딱뚝딱 성장기</a></li>
            <li class="list_service_item"><a href="#">숫자로 보는 카카오</a></li>
            <li class="list_service_item"><a href="#">카카오 나우</a></li>
          </ul>
        </li>
        <li class="wrap-service">
          <strong class="tit_service"><a href="#">뉴스</a></strong>
        </li>
        <li class="wrap-service">
          <strong class="tit_service"><a href="#">기술과 서비스</a></strong>
          <ul class="list_service">
            <li class="list_service_item"><a href="#">기술</a></li>
            <li class="list_service_item"><a href="#">서비스</a></li>
          </ul>
        </li>
        <li class="wrap-service">
          <strong class="tit_service"><a href="#">약속과 책임</a></strong>
          <ul class="list_service">
            <li class="list_service_item"><a href="#">카카오의 다짐</a></li>
            <li class="list_service_item"><a href="#">ESG</a></li>
            <li class="list_service_item"><a href="#">액티브그린</a></li>
            <li class="list_service_item"><a href="#">단골 만들기 챌린지</a></li>
            <li class="list_service_item"><a href="#">정책</a></li>
          </ul>
        </li>
        <li class="wrap-service">
          <strong class="tit_service"><a href="#">투자정보</a></strong>
          <ul class="list_service">
            <li class="list_service_item"><a href="#">기업지배구조</a></li>
            <li class="list_service_item"><a href="#">주가정보</a></li>
            <li class="list_service_item"><a href="#">재무정보</a></li>
            <li class="list_service_item"><a href="#">IR행사</a></li>
            <li class="list_service_item"><a href="#">공시정보</a></li>
            <li class="list_service_item"><a href="#">공고</a></li>
          </ul>
        </li>
        <li class="wrap-service">
          <strong class="tit_service"><a href="#">고객센터</a></strong>
          <ul class="list_service">
            <li class="list_service_item">
              <a href="#">카카오 고객센터
                <span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" x2="21" y1="14" y2="3"></line>
                  </svg>
                </span>
              </a>
            </li>
            <li class="list_service_item">
              <a href="#">Daum 고객센터
                <span>
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" x2="21" y1="14" y2="3"></line>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="info">
      <h2 class="screen-out">서비스 이용정보</h2>
      <div class="info-relation-container clearfix">
        <div class="inner-info">
          <ul class="clearfix">
            <li class="wrap-info">
              <strong class="tit_info"><a href="#">이용약관</a></strong>
              <ul class="list_info">
                <li class="list_info_item"><a href="#">카카오계정 서비스</a></li>
                <li class="list_info_item"><a href="#">카카오게임 플랫폼 서비스</a></li>
                <li class="list_info_item"><a href="#">카카오페이 서비스</a></li>
                <li class="list_info_item"><a href="#">카카오 T 서비스</a></li>
                <li class="list_info_item"><a href="#">카카오 모빌리티 서비스</a></li>
                <li class="list_info_item"><a href="#">카카오콘텐츠 서비스</a></li>
                <li class="list_info_item"><a href="#">카카오 AI 서비스</a></li>
              </ul>
            </li>
            <li class="wrap-info">
              <strong class="tit_info"><a href="#">개인정보 처리방침</a></strong>
              <ul class="list_info">
                <li class="list_info_item"><a href="#">카카오계정</a></li>
                <li class="list_info_item"><a href="#">카카오게임 플랫폼</a></li>
                <li class="list_info_item"><a href="#">카카오페이</a></li>
                <li class="list_info_item"><a href="#">카카오 T</a></li>
                <li class="list_info_item"><a href="#">카카오 모빌리티</a></li>
                <li class="list_info_item"><a href="#">카카오콘텐츠</a></li>
                <li class="list_info_item"><a href="#">카카오 AI</a></li>
              </ul>
            </li>
            <li class="wrap-info">
              <strong class="tit_info"><a href="#">위치기반 서비스 이용약관</a></strong>
            </li>
            <li class="wrap-info">
              <strong class="tit_info"><a href="#">청소년 보호정책</a></strong>
            </li>
            <li class="wrap-info">
              <strong class="tit_info"><a href="#">제휴 문의</a></strong>
            </li>
          </ul>
        </div>
        <div class="inner-relation">
          <div class="tit_relation"><a href="#">관련사이트</a></div>
          <ul class="wrap-relation">
            <li class="list_relation"><a href="#">카카오 AI</a></li>
            <li class="list_relation"><a href="#">카카오 프라이버시</a></li>
            <li class="list_relation"><a href="#">Kakao Ventures</a></li>
            <li class="list_relation"><a href="#">카카오벤처스</a></li>
            <li class="list_relation"><a href="#">Daum 카페</a></li>
            <li class="list_relation"><a href="#">카카오스토리</a></li>
            <li class="list_relation"><a href="#">카카오톡</a></li>
            <li class="list_relation"><a href="#">카카오TV</a></li>
            <li class="list_relation"><a href="#">카카오 캘린더</a></li>
            <li class="list_relation"><a href="#">카카오 배송</a></li>
          </ul>
        </div>
      </div>
      <small class="txt_copyright" data-v-2a716ef5="">
        © <a href="https://www.kakaocorp.com/page" data-v-2a716ef5="">Kakao Corp.</a> All rights reserved.
      </small>
    </div>
  </div>
</div>

);
}

export default Footer;
