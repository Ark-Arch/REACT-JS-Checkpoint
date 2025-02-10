import React from 'react'
import NavigationBar from './components/Navbar'
import CardComp from './components/Card'

const App = () => {

    return (
        <>
            <div className='App'>
                <NavigationBar/>
                <h1>This webpage is in fulfillment of one of the tasks given me during my gomycode classes</h1>
                <CardComp/>
                <CardComp/>
                <CardComp/>
            </div>
        </>
    )
}

export default App