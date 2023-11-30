import '../../assets/css/common.scss'
function Header() {
    return(
        <div className="header">
            <div className="hdWrap">
                <div>
                    <h1>
                        logo
                    </h1>
                </div>
                <ul className='nav'>
                    <li>소개</li>
                    <li>이야기</li>
                    <li>뉴스</li>
                    <li>기술과 서비스</li>
                    <li>약속과 책임</li>
                </ul>
                <ul className='navUtil'>
                    <li>검색</li>
                    <li>영어</li>
                    <li>다크</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;