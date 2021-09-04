import './index.scss'
import { useEffect, useState } from 'react';
const Card = (props) => {
    let { data } = props;
    let [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)
    }, []);
    return (
        <div className='card'>
            <div className='card__profile' >
                <div className='card__profile__loader' style={{ display: load ? "block" : "none" }}>
                    Loading
                </div>
                <img src={`https://firebasestorage.googleapis.com/v0/b/arianagrande-a231e.appspot.com/o/wallpaperflare.com_wallpaper(1).jpg?alt=media&token=68d54a31-a3e2-4401-a96e-5aae52d74533`} alt="" className='card__profile__img' style={{ display: load ? "none" : "flex" }} onLoad={() => setLoad(false)} />


            </div>
            <div className='card__content'>
                <h2 className='card__content__title'>Chernobyl</h2>
                <ul className='card__content__tags'>



                    <li className='card__content__tags__item'>
                        horror
                    </li>

                </ul>
                <p className='card__content__desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, excepturi?
                </p>
                <button className='card__content__cta'>BUY</button>

            </div>
        </div>
    )
}
export default Card;