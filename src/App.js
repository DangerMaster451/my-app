import logo from './logo.svg';
import './App.css';
import cover from './assets/i love my computer.jpg'

const title = "I Love My Computer";
const artist = "Ninajirachi";

function Album() {
  return (
    <div style={{
      paddingTop: '10%',
      height: '100vh',
      backgroundColor: 'black'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img src={cover} style={{
          width:"15%", 
          height:"15%",
          marginTop:"2%",
          boxShadow: "rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          borderRadius: "2%",
        }}></img>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:'auto',
        overflow: 'hidden',
      }}>
        <img src={cover} style={{
          width:"15%",
          height:"15%",
          boxShadow: '1px 2px 9px black',
          borderRadius: "2%",
          transform: "scaleY(-1)",
          marginTop: "",
          opacity: "0.4",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
        }}></img>
      </div>
      
      <p style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Verdana',
        fontSize: '32px',
        fontWeight: 'bold',
        marginTop: '-13%',
        color: 'white',
      }}>{title}</p>

      <p style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Verdana',
        fontWeight: 'bold',
        fontSize: '24px',
        color: 'white'
      }}>{artist}</p>
    </div>
  )
}

function App() {
  return (
    Album()
  );

}

export default App;
