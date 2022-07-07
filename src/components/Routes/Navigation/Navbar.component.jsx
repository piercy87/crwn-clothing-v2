import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrownLogo } from "../../../assesets/crown.svg"
import "./navigation.styles.scss"

const Navbar = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link to="/" className="logo-container" >
                    <CrownLogo className='crown-logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link to='test' className="nav-link">
                        shop
                    </Link>
                    <Link to='sign-in' className="nav-link">
                        Sign-in
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar