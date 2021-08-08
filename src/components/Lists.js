import React from 'react'
import {useSelector} from 'react-redux'

function Lists() {
	const lists = useSelector(state=>state.listsReducer.lists)

	return (
		<div className='lists'>
			<h2>Lists</h2>
			{lists.map((item, id) => (
				<div key={id} className='list__item'>
					<p>{item}</p>
				</div>
			))}
		</div>
	)
}

export default Lists
