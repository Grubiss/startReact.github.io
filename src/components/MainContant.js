import React from 'react'

function MainContent() {
    return (
        <div className="content">
        <h1 className='h1Title'>Fun facts about React</h1>
            <div className='wrapper'>
                <ul className='bodytext'>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
                <img className='reactjs' src='reactjs-icon.svg' ></img>

            </div>
        </div>
    )
}

export default MainContent