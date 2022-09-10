import './Home.css';

// function Home() {
//     return <div>
//         This is Home Component
//         ถ้าเป็น default export ชื่อไม่จำเป็นต้องตรงตอน import
//         <br/>หนึ่งไฟล๋มี default export ได้แค่ชื่อเดียว
//     </div>
// };
// export default Home;
import './Home.css';
export default function Home() {
    return <div className='home'>
        This is Home component
    </div>
}