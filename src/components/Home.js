import React from 'react'
import {useSelector} from 'react-redux'

import Lists from './Lists'
import Input from './Input'

function Home() {
    
    const name=useSelector((state)=>state.nameReducer.name)
    const lists = useSelector(state=>state.listsReducer.lists)

	return (
		<div className='home'>
			<div className='home__top'>
				<h1>Home component
                {lists.map((item, id) => (
				<div key={id} className='list__item'>
					<p>{item}</p>
				</div>
			))}

                </h1>
				<p>Name: {name} </p>
			</div>

			<div className='home__children'>
				{/* Lists component  */}
				<Lists />

				{/* Input component  */}
				<Input />
			</div>
		</div>
	)
}

export default Home
