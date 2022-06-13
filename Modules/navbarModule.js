function navbar(){
    return `<nav>
    <div id="navBar">
      <div id="firstBox">
        <div id="line">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="styles-hamburger-2QFkx6GW" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 7C3.25 6.58579 3.58579 6.25 4 6.25H20C20.4142 6.25 20.75 6.58579 20.75 7C20.75 7.41421 20.4142 7.75 20 7.75H4C3.58579 7.75 3.25 7.41421 3.25 7ZM3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12ZM4 16.25C3.58579 16.25 3.25 16.5858 3.25 17C3.25 17.4142 3.58579 17.75 4 17.75H20C20.4142 17.75 20.75 17.4142 20.75 17C20.75 16.5858 20.4142 16.25 20 16.25H4Z" fill="white"></path></svg>
          
          
        </div>
      </div>
      <div id="secondBox">
          <a hrf="index.html">
          <img
          src="tflix.jpeg"
          alt="Logo" height="70" width="180"
        />
        </a>
      </div>

      <div id="thirdBox">
        <div>
        <a href="./index.html">Home</a>
        <a href="./explore.html">Explore</a>
        <a href="./kids.html">Kids</a>
        <a href="./mindblown.html">Mindblown</a>
        
      </div>
    </div>

      <div id="fourthBox">
        <div>
          <input type="text" id="searchInput" onkeyup="processChange()" placeholder="Search for a show, episode, shorts etc." />
          <img src="./search.png" alt="" />
        </div>
       
      </div>
             
      <div id="fifthBox">
        <button  id="signIn"  onclick="sign()">Sign In</button>
      </div>
    </div>
  </nav>
  <div id="navBelowDiv">

  <div id="navbarhamburgerbox"></div>
  <div id="searchBox"></div>
  <div id="signInBox"></div>

  </div>
  `
}
export default navbar;