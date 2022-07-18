import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrownLogo } from "../../../assesets/crown.svg"
import { UserContext } from "../../../contexts/user.context"
import { signUserOut } from "../../../utils/Firebase/firebase.utils"
import "./navigation.styles.scss"

const Navbar = () => {
    const { currentUser } = useContext(UserContext)
    // console.log(currentUser)
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
                    {
                        currentUser ? (
                            <span onClick={signUserOut} className='nav-link'>SIGN OUT</span>
                        ) : (
                            <Link to='authentication' className="nav-link">
                                Sign-in
                            </Link>
                        )
                    }

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar