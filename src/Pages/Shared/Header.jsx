import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <img className='mx-auto pt-4 pb-2' src={logo} alt="" />
            <p className='py-3'>{moment().format('LLLL')}</p>
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;