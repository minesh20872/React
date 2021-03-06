var React = require('react');
var ReactDOM = require('react-dom');

var Person = function() {
    var name = 'Derek Zoolander';
    var imageUrl = 'http://uifaces.com/assets/static/images/zoolander.jpg';
    var job = 'Male model';
        return (
            <div className="person">
                <div className="person-name">{name}</div>
                <img className="person-img" src={imageUrl} />
                <div className="person-job">
                    {job}
                </div>
            </div>
        );
    };

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<PersonList />, document.getElementById('app'));
});


    var PersonList = function() {
        var people = [];
        for (var i=0; i<5; i++) {
            people.push(<Person />);
    }
    return (
            <div className="person-list">
                {people}
            </div>
    );
};