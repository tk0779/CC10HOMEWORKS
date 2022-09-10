// const form = document.createElement('form')
// const root = document.getElementById('root')
// root.append(form)

// const div = React.createElement('div',{
// id: 'container', 
// className: 'container',
// style:{ margin: "20px"}
// },
// // 'Hello React, this text comes from react.');
// React.createElement('div',{}, React.createElement('span',{className:'main-content'}, 'main-content')),
// React.createElement('p',{},'Welcome to React. This Text comes from react'),
// React.createElement(
//     "ul",
//     {},
//     React.createElement('li',{className:'list-item'},'List1'), //<li class = 'list-item'>list1<li>
//     React.createElement('li',{},'List2'),
//     React.createElement('li',{},'List3')
// ),
// );
// //เขียนเยอะๆก็จะเริ่มงง React จึงให้เขียนเป็น jsx

// console.log(div);

const names = ['John', 'Jim', 'Jane'];
const num = 20;
const classes = 'container ms-0 pt-1'
const ul = (
    <ul>
        <li>{names[0]}</li>
        <li>{names[1]}</li>
        <li>{names[2]}</li>
        <li>{2*25/10}</li>
        <li>{num **2}</li>
    </ul>
);
//LAB1
const fullName = 'Jame Ji';
const birthYear = '1995';

//LAB2
const calcBMI = (h,w) => w/h **2;
const height = 1.82;
const weight = 80.5;

//LAB3

const div = (
    <div style = {{border: '1px solid red', margin: 'auto', padding:"10px"}}id = 'container' className = {classes} >
       <h1>
        Hello React 
        </h1>
        <p>this text comes from babel JSX react</p>
        <p>1. JSX intro</p>
        <p>2. Embed express into element <br/>--  the UL is set to variable and then put into div </p>
        {ul}
        <label htmlFor="username">Username: </label>
        <input id = 'username'></input>
        <br/>
        <hr/>

        <h2>This is Lab1</h2>
        <h1>{fullName}</h1>
        <p>{2022-birthYear}</p>
        <hr/>
     
        <h2>This is Lab2</h2>
        <p>BMI calculator</p>
        <h1> {calcBMI(height,weight).toFixed(2)}</h1>
        <hr/>

        <h2>This is Lab3</h2>
        <label htmlFor="username">Username: </label>
        <input className = 'username' id = "username" name='username'></input>
        <hr/>
        
    </div>
);



ReactDOM.render(div,document.getElementById('root'));