import Navbar from "./components/navbar";
import Tile from "./components/tile";
import data from "./data"


function App() {
  const tile = data.map(x =>{
    return (
      <Tile 
        key={x.id}
        {...x}
      />
    )
  })
  return (
    <div >
      <Navbar />
      {tile}
    </div>
  );
}

export default App;
