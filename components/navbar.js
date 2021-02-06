import Link from "next/link";

export default function Navbar({user}) {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item is-size-4" href="/">HomeServer</a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                       data-target="navbar-menu">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>
                {user
                    ? <div className="navbar-end">
                        <div className="navbar-item">
                            <Link href="/">
                                <a>{user.firstName} {user.lastName}</a>
                            </Link>
                        </div>
                    </div>
                    : <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link href="/login">
                                    <a className="button is-primary">Login</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </nav>
    );
}