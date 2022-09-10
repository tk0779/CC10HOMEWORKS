// const div =(
//     <div>
//         <h1>Components and Props</h1>
//         <p>
//             1.Function Component
//             <br/>
//             2.Class Component 
//         </p>
//     </div>
// );
// ReactDOM.render(div,document.getElementById('root'));
//------------------------------
// function Header() {
//     return <div> 
//                 <div>Logo</div>
//                 <div>Menu</div>
//             </div>
// }
// //props as object
// function List(message, author) {
//     return   <li>
//     <span>Book Name: {message}</span>
//     <h5>Author: {author}</h5>
// </li>
// }

// function Content() {
//     return <div> 
//                 <ul>
//                  {List('I love Thailand','John')}
//                  {List('I love Bangkok','Will')}
//                  {List(`I'm a Land Ladie`,'Rose')}
//                  {List('Abudabi Travel','Sa')}
//                  {List('I love India','Ann')}
                 
//                 </ul>
//             </div>
// }
// function App() {
//     return <div> 
//                 <div>
//                     <Header/>
//                     <Content/>
//                 <p>
//                     This is App component 
//                 </p>
//                 </div>
//             </div>
// }

//render แบบ function
// ReactDOM.render(App(),document.getElementById('root'));
// ReactDOM.render(<App/>,document.getElementById('root'));
//---------------------------------

function ProductItem(props){
    const {name='unknown',price='-',description = 'unknown'} = props;
    return <div>
        <h1> {props.name}</h1>
        <h2> {props.price}</h2>
        <p> {props.description}</p>
    </div>
};
ReactDOM.render(<ProductItem name ='Pepsi' price ='20' description='Soda'/>,document.getElementById('root'));