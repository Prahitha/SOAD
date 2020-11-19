import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import "./style.css";
import {Link} from "react-scroll";
import logo from '../../Images/logo.png';
import Button from '@material-ui/core/Button';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isloggedin: false};
    }

    handleLoginClick() {
      console.log("HIi");
      this.setState({isloggedin: true});
    }
    
    handleLogoutClick() {
      this.setState({isloggedin: false});
    }

    render(){
        const isloggedin = this.state.isloggedin;
        let navitem;

        if(isloggedin) {
            navitem = <Button onClick={this.handleLogoutClick} style={{color: "#EFBC9B"}}>Logout</Button>;
        }
        else {
            navitem = <Button onClick={this.handleLoginClick} style={{color: "#EFBC9B"}}>Login</Button>;
            console.log({isloggedin});
        }
        
        return(
            <div>
                    <Navbar style={{backgroundColor: "#63326E"}} expand="lg">
                    <Navbar.Brand href="/" className="brand" style={{ display: "flex" }}>
                        <img
                        alt="logo"
                        src={logo}
                        width="70"
                        height="70"
                        style={{ marginTop: "-1%", marginBottom: "-2%" }}
                        className="d-inline-block align-top"
                        />
                        <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            marginLeft: "10px",
                        }}
                        >
                        <p style={{color: "#EFBC9B", marginBottom: "1px", marginTop: "7px" }}>
                            Senior Sunshine
                        </p>
                        <small style={{ fontSize: "14px", color: "#EFBC9B" }}>
                            Making aging a happy process
                        </small>
                        </div>
                    </Navbar.Brand>
    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="/request-service" style={{color: "#EFBC9B"}}>Get Help</Nav.Link>
                        <Nav.Link href="/volunteer-list" style={{color: "#EFBC9B"}}>Volunteers</Nav.Link>
                        <Nav.Link href="/feedback" style={{color: "#EFBC9B"}}>Feedback</Nav.Link>
                        <Nav.Link>
                            <Link to="contact-us" smooth duration={300} style={{color: "#EFBC9B"}}>About Us</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="contact-us" smooth duration={500} style={{color: "#EFBC9B"}}>Contact Us</Link>
                        </Nav.Link>

                        {isloggedin ? <FacebookLoginButton onClick={this.handleLogoutClick} /> : <GoogleLoginButton onClick={this.handleLoginClick} />}
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
        );
    }
}

export default Header;
