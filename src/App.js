import { db } from './firebase/firebase';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App"> 

     <Navbar />

      <button onClick={()=>{
        db.collection('posts').doc('s5BCBlpOT2ylkk6DzaWv').set({
          title: "updated",
          body: "Lorem Ipsum",
          created: new Date(),
          author: "298frhj983poej938ytr4273rho"
        })
      }}>Click Me</button>
    </div>
  );
}

export default App;
