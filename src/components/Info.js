import "../css/Info.css";



export default function Info(props){

const {name, phone, age} = props;

    return (<div className="title">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Phone: {phone}</p>
    </div>
    );
}