var createReactClass = require( 'create-react-class' );

var SayHelle = createReactClass( {
    getInitialState: function () {
        return { message: "Hello" }
    },
    handleClick: function () {
        alert( this.state.message );
    },
    render: function () {
        return (
            <button onClick={this.handleClick}>
                Say Hi
            </button>
        )
    }
} );