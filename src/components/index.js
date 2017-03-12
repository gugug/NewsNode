import React from 'react'

import Header from '../containers/Header/Header'
import Banner from '../containers/Banner/Banner'
import NewsList from '../containers/Index/NewsList'
import NewsItem from '../containers/Index/NewsItem'
import Footer from '../containers/Footer/Footer'

const App = () => {
	return (
		<div>
			<Header/>
			<Banner/>
			<NewsList/>
			<Footer/>
		</div>
	);
}

export default App;