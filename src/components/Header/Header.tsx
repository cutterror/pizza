import logo from '../../assets/img/logo.svg';
import './Header.css';

export function Header() {
    return (
        <header>
            <div className="logo-container">
                <a href="#">
                    <img className="logo" alt="logo" src={logo} width="207" height="61"/>
                </a>
            </div>
            <a className="account-icon" href="/cabinet">
            </a>
        </header>
    );
}
