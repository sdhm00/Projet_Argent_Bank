import logo from "../../../designs/img/argentBankLogo.png"
import "../styles/styles.css"
import SignIn from "../../pages/SignIn";
import Home from "../../pages/Home";

function Header() {
    return (
        <header>
            <nav class="main-nav">
                <a class="main-nav-logo" href={Home}>
                    <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                    <h1 class="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a class="main-nav-item" href={SignIn}>
                        <i class="fa fa-user-circle"></i>
                        Sign In
                    </a>
                </div>
            </nav>
        </header>
    );
}
  
export default Header;