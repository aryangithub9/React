import proptypes from 'prop-types'
function User(props){
    if (props.isLoggedIn){
        return(
            <div className="m1">
                <h1>Welcome {props.Username}</h1>
            </div>
        );
    }
    return(
        <div className="m2">
            <h1>Please {props.Username} Log in to Continue</h1>
        </div>
    );
}

User.defaultProps = {
    Username : "Guest",
    isLoggedIn : true
}

User.prototypes = {
    name: proptypes.string,
    isLoggedIn : proptypes.bool

}

export default User