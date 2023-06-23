import Logo from "./Components/Logo";
import Menu from "./Components/Menu";
import Checkout from "./Components/Checkout";

const Header = ({database}) => {
    return (
        <div className="header">
            <Logo/>
            <Menu/>
            <Checkout checkout={database}/>
            <span>Выход</span>
        </div>
    );
};

export default Header;