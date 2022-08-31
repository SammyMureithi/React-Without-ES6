var createReactClass = require( 'create-react-class' );

var Greetings = createReactClass( {
    getDefaultProps: function () {
        return {
           name:"Mary"
       }
    },
    render: function () {
        return <>
            <h1>My name is { this.props.name}</h1>
        </>
    }
})