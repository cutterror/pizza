import promotion from '../../assets/img/promotion1.png';
import './Promotions.css';

export function Promotions() {
    return (
        <div className="promotion-img-container">
            <img className="promotion-img" alt="promotion" src={promotion}/>
        </div>
    );
}
