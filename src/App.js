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
  {
    "title": "In Rainbows",
    "artist": "Radiohead",
    "cover": require('./assets/in rainbows.jpg')
  }
]

const albumSize = '400px'

function Album(index) {
  return (
    <div style={{
      margin: '10px'
    }}>
      <div style={{
        justifyContent: 'center',
      }}>
        <img src={albums[index].cover} style={{
          width:albumSize, 
          height:albumSize,
          boxShadow: "rgba(255, 255, 255, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          borderRadius: "2%",
        }}></img>
      </div>
      <div style={{
        height:'auto',
        overflow: 'hidden',
      }}>
        <img src={albums[index].cover} style={{
          width:albumSize,
          height:albumSize,
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
        fontFamily: 'Verdana',
        fontSize: '32px',
        fontWeight: 'bold',
        marginTop: '-350px',
        textAlign: 'center',
        color: 'white',
      }}>{albums[index].title}</p>

      <p style={{
        fontFamily: 'Verdana',
        fontWeight: 'bold',
        fontSize: '24px',
        textAlign: 'center',
        color: 'white'
      }}>{albums[index].artist}</p>
    </div>
  )
}

function App() {
  return (
    <div style={{
      paddingTop: '10%',
      height: '100vh',
      backgroundColor: 'black',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
      {Album(0)},
      {Album(1)},
      {Album(2)}
    </div>
  );

}

export default App;
