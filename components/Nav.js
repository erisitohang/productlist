import { ActiveLink } from '.';
import { CONST_ROUTE } from '../constants';

const Nav = () =>
    (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a className="navbar-brand" href="#">Shop</a>
            <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse"
                    data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars" aria-hidden="true"> </i>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 text-center navbar-right">
                    <li className="nav-item active">
                        <ActiveLink href={CONST_ROUTE.HOME.path}>{CONST_ROUTE.HOME.title}</ActiveLink>
                    </li>
                    <li className="nav-item">
                        <ActiveLink href={CONST_ROUTE.ABOUT.path}>{CONST_ROUTE.ABOUT.title}</ActiveLink>
                    </li>

                </ul>
                <ul className="navbar-nav ml-auto text-center">
                    <li className="nav-item">
                        <ActiveLink href={CONST_ROUTE.ACCOUNT.path}>{CONST_ROUTE.ACCOUNT.title}</ActiveLink>
                    </li>
                </ul>
            </div>
        </nav>
    );

export default Nav;
