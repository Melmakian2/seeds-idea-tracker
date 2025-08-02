import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

function Background() {
  return (
    <body style={{ 
      backgroundImage: 'url("/Background.png")', 
      backgroundSize: 'cover', 
    }}/>
  );
}

function TopBar(){
  return (
  <div className = "container">
    <table border="0" class = "top-bar">
      <tr>
        <td><img src="/Settings.png" style={{ width: '50px', height: '50px', verticalAlign: 'center' }}/></td>
        <td><img src="/star.jpg" style={{ width: '50px', height: '50px' }}/></td>
        <td><img src="/logo192.png" style={{ width: '50px', height: '50px' }}/></td>
        {/*<td rowspan="2"><div style={{ display: 'flex', alignItems: 'center', paddingLeft: '100px', borderLeft: '2px solid white'}}>Hello John <img src="profile_pic.webp" style={{ width: '50px', height: '50px', marginLeft: '10px'}}/></div></td>*/}
      </tr>
      <tr>
        <th>Main Menu</th>
        <th>Project Board</th>
        <th>Settings</th>
      </tr>
    </table>
    <table border = '0' class='top-bar-profile'>
      <tr>
        <td>Hello John</td>
        <td><img src="profile_pic.webp" style={{ width: '50px', height: '50px'}}/></td>
      </tr>
    </table>
  </div>
  )
}

function RecentSeeds(){
  return(
  <div style={{paddingLeft: '50px', marginTop: '140px'}}>
    <h1>Recent Seeds:</h1>
    <div>
      <table border = "0">
        <tr>
          <td><img src="/logo192.png" style={{ width: '200px', height: '200px', verticalAlign: 'center' }}></img></td>
        </tr>
        <tr>
          <td style={{textAlign: 'center', backgroundColor: 'white', color: 'grey'}}>Idea 1</td>
        </tr>
      </table>
    </div>
  </div>
  )
}

function YourSeedIdeas(){
  return(
    <div style={{paddingLeft: '50px', marginTop: '50px'}}>
      <h1 style = {{ fontFamily: 'B612, sans-serif' }}>Your Seed Ideas: </h1>
      <div style={{ height: '200px', overflowY: 'auto' }}>
        <table border = "0" style={{backgroundColor: 'white'}}>
          <tr>
            <td style = {{textAlign: 'left', backgroundColor: 'white', color: 'Black', fontSize: '25px'}}>Idea 1</td>
          </tr>
          <tr>
            <td style = {{textAlign: 'left', backgroundColor: 'white', color: 'grey'}}>Description</td>
          </tr>
        </table>
      </div>
    </div>
  )
}


function App(){
  return (
  <h1 class = "heading_2">Hello World</h1>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background/>
    <TopBar />
    <RecentSeeds/>
    <YourSeedIdeas/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals