import './header.scss';
import logo from '../../logo.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="headerLeft">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="headerRight">
          <div className="headerMenu">
            <ul>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">Почему мы</a>
              </li>
              <li>
                <a href="#">Психологи</a>
              </li>
              <li>
                <a href="#">Как записаться</a>
              </li>
              <li>
                <a href="#">Отзывы</a>
              </li>
              <li>
                <a href="#">Для бизнеса</a>
              </li>
            </ul>
            <button className="headerBtn" onClick={() => {}}>
              Онлайн консультация
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
