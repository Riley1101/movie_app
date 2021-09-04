import './index.scss'
import starwar from './starwars.jpg'
const Detail = () => {
    return (
        <div className='detail__container'>
            <div className="info">

                <div className='info__content'>

                    <h1 className='info__content__title'>Starwars : Episode VIII The last Jedi</h1>
                    <ul className='info__content__tags'>
                        <li className='info__content__tags__item'>
                            science
                        </li>
                        <li className='info__content__tags__item'>
                            action
                        </li>
                    </ul>
                    <p className='info__content__desc'>
                        The Star Wars saga continues as new heroes and galactic legends go on an epic adventure, unlocking mysteries of the Force and shocking revelations of the past.
                    </p>
                    <button className='info__content__cta'>
                        Watch
                    </button>

                </div>

                <div className='info__profile'>
                    <img src={starwar} alt="" className='info__profile__img' />
                </div>
            </div>

        </div>
    )
}

export default Detail;