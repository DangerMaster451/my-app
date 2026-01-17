const albums = [
  {
    "title": "I Love My Computer",
    "artist": "Ninajirachi",
    "cover": require('./assets/i love my computer.jpg')
  },
  {
    "title": "Good At Falling",
    "artist": "The Japanese House",
    "cover": require('./assets/good at falling.jpg')
  },
]

function Album(index) {
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
        <img src={albums[index].cover} style={{
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
        <img src={albums[index].cover} style={{
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
      }}>{albums[index].title}</p>

      <p style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Verdana',
        fontWeight: 'bold',
        fontSize: '24px',
        color: 'white'
      }}>{albums[index].artist}</p>
    </div>
  )
}

function App() {
  return (
    Album(0),
    Album(1)
  );

}

export default App;
