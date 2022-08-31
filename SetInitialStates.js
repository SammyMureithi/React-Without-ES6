var createReactClass = require( 'create-react-class' );
 
var Counter = createReactClass( {
    getInitialState: function () {
        return {
            counter: this.props.initialCounter
        }
    },
    render: function () {
        return <>
            <h1>This is a counter { this.state.counter}</h1>
        </>
    }
})