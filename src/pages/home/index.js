import './index.scss'

import Card from '../../components/card'
const Home = () => {

    return (
        <section id='home'>
            <div className="home">
                <nav className="header">
                    <h1 className='header__title'>Browse movies</h1>
                    <input type='text' className='header__search' placeholder='Search movie'></input>
                </nav>
                <div className='tags'>
                    <ul className='tags__list'>
                        <li className='tags__list__item' >
                            Tags
                        </li>

                        <li className='tags__list__item' >
                            Drama
                        </li>

                    </ul>
                </div>

                <div className='cards'>

                    <Card />

                </div>
            </div>
        </section>
    )
}

export default Home;