import '../../assets/css/common.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth, faMagnifyingGlass, faMoon } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return(
        <div className="header">
            <div className="hdWrap">
                <h1>
                    Kakao
                </h1>
                <ul className='nav'>
                    <li><a href="#">소개</a></li>
                    <li><a href="#">이야기</a></li>
                    <li><a href="#">뉴스</a></li>
                    <li><a href="#">기술과 서비스</a></li>
                    <li><a href="#">약속과 책임</a></li>
                </ul>
                <div className='navUtil'>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" class="IconButton__BlockIcon-sc-19femd6-1 funiM"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} border='' /> */}
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24" stroke="black" stroke-width='0.1' ><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048A10.211,10.211,0,0,1,16.5,12ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17Zm11.252,4.644A19.676,19.676,0,0,0,17.426,17h3.221A10.031,10.031,0,0,1,14.605,21.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z"/></svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"  stroke="currentColor" stroke-width="0.1"><path d="M14,24A12.013,12.013,0,0,1,2,12C1.847,3.044,12.031-2.985,19.791,1.509l1.553.862-1.543.88c-6.7,3.688-6.21,13.87.8,16.906l1.621.731-1.467,1.006A11.921,11.921,0,0,1,14,24ZM14,2A10.011,10.011,0,0,0,4,12c-.155,7.117,7.763,12.2,14.155,9.082a11.544,11.544,0,0,1-.876-18.521A9.745,9.745,0,0,0,14,2Z"/></svg>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;