import React from 'react'


function Header() {
    return (
        <header className="header">
                <nav className="nav">
                    <a className='homepage' href='#'><img src="reactlogo.svg" className="react-logo" alt="Logo"/> ReactFacts</a>     

                    <p className='extraTitle'>React Course - Project 1</p>               
                </nav>
        </header>
    )
}

export default Header