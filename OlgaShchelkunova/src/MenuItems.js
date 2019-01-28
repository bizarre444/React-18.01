import React from 'react'

class MenuItems extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.href}>{this.props.children}</a>
            </li>
        );
    }
}

export default MenuItems;