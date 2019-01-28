import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

class App extends React.Component{
    render() {
        const menuItems = [
            {href: "/", title: "Main page"},
            {href: "/about", title: "About us"},
            {href: "/service", title: "Services"},
            {href: "/contacts", title: "Contacts"}
        ]

        return 'console';
        // return (<div>
        // <h1>First project</h1>
        // <Menu titleMenu="Main menu" items={menuItems}/>
        // </div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));