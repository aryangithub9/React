import Proptypes from 'prop-types'
function Employee(props){

    return(
        <div className="Employee">
            <p>Name :{props.name}</p>
            <p>Age : {props.age}</p>
            <p>Salary : {props.salary}</p>
            <p>Location : {props.location}</p>
        </div>
    );

}



Employee.defaultProps = {
    name : "Guest",
    age : 21,
    salary : 10000,
    location : "Gurgaon"
}

export default Employee