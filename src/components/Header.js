import React from 'react';

//we can use functional components instead of hole class
//function Header(props){} which returns the fragment

import PropTypes from 'prop-types'

const Header = (props) => {
    return(
    <React.Fragment>
        <header className="top">

            <h1>
                Catch
                    <span className="ofThe">
                    <span className="of"> of </span>
                    <span className="the"> The </span>
                </span>
                day

                </h1>

            <h3 className="tagline">

                <span> {props.tagline} {props.age}</span>
            </h3>

        </header>
    </React.Fragment>
    );
}

//React validation
Header.prototype = {

    tagline: PropTypes.string.isRequired

}
/*
class Header extends React.Component {
    render() {

        return (

            <React.Fragment>
                <header className="top">

                    <h1>
                        Catch
                        <span className="ofThe">
                            <span className="of"> of </span>
                            <span className="the"> The </span>
                        </span>
                        day

                    </h1>

                    <h3 className="tagline">

                        <span> {this.props.tagline}</span>
                    </h3>

                </header>
            </React.Fragment>
        );
    }

}
*/
export default Header;