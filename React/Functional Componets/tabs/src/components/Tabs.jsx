import React, { useState } from 'react'


const Tabs = (props) => {
    const [select, setSelect] = useState(1)
    const clickHandler = (i, e) => {
        setSelect(i)
    }

    return (
        <div className='container bg-primary'>
            <div className='container d-flex flex-row justify-content-evenly'>
                {
                    props.tabs.map((tab, i) => {
                        return (
                            <p className={`${i === select ? 'bg-light' : 'bg-primary'} btn border`} onClick={(e) => clickHandler(i, e)} key={i}>
                                {tab.name}
                            </p>
                        )
                    }
                    )
                }
            </div>
            <div className='border mb-2'>
                <p className='p-2 mb-2'>{props.tabs[select].content}</p>
            </div>
        </div>
    )
}

export default Tabs