import '../css/App.css';

function Hello(){
    alert("Welcome to react js")
}
function Car(props){
    return<h2>I am a  {props.color} car</h2>;
}
function Car1(props){
    return<h2>My car brand is {props.brand}...</h2>;
}
function Paragraph(){
    return<h3>hai jeevitha welcome to react js</h3>;
}

function App(){
    var a,b,c;
    a=10;
    b=20;
    c=a+b;

return(
    <div className="App">
    <h2>hello {c} </h2>
    <Car color="green" />
    <Car1 brand="Ford" />
    <Paragraph />
    <button onClick={Hello}>Click Me</button>
    </div>
);
}
export default App;
