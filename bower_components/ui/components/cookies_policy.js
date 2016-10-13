import React from 'react';
import InlineSVG from 'svg-inline-react';
import Cookies from 'cookies-js';

import crossIcon from '../svg_icons/cross';

export default class CookiesPolicyNotification extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            cookiesPolicyAccepted: Cookies.get('cookies_policy_accepted') === 'true'
        };
    };

    componentDidMount () {
        if (!this.state.cookiesPolicyAccepted && window.navigator.language.toLowerCase().indexOf('en-gb') !== -1) {
            this.props.onShow && this.props.onShow();
        }
    }

    acceptCookiesPolicy = () => {
        if (process.browser) {
            let expirationDate = new Date();
            expirationDate.setFullYear(expirationDate.getFullYear() + 1);

            let domain = window.location.hostname.endsWith('compstak.com') ? 'compstak.com' : window.location.hostname;

            let opts = {
                expires: expirationDate,
                domain : domain
            };
            Cookies.set('cookies_policy_accepted', 'true', opts);
            this.setState({cookiesPolicyAccepted: true}, this.props.onAccept);
        }

        if (this.props.close) {
            this.props.close();
        }
    };

    render () {
        if (this.state.cookiesPolicyAccepted || window.navigator.language.toLowerCase().indexOf('en-gb') === -1) {
            return false;
        } else {
            return <div className='header-notification'>
                <p>
                    We use cookies to give you the best experience when using CompStak. Read our <a href="http://www.compstak.com/legal#CookiePolicy">privacy and cookie policy</a> to learn more.
                </p>
                <span className='close' onClick={this.acceptCookiesPolicy}>
                    <InlineSVG src={crossIcon()} element='i'/>
                </span>
            </div>;
        }
    };
};

