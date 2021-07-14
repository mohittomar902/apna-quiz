import './App.css';

function NavBar() {





  return (

    <div className="">

      <div className="header w3-top">
        <div className="w3-bar  w3-card">
          <a  href="#home" className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
          <a href="/home" className="w3-bar-item w3-button w3-padding-large">Quiz</a>
          <a  href="https://www.interviewbit.com/javascript-interview-questions/"  className="w3-bar-item w3-button w3-padding-large w3-hide-small">JavaScript</a>
          <a  href="https://www.interviewbit.com/react-interview-questions/" className="w3-bar-item w3-button w3-padding-large w3-hide-small">ReactJs</a>
          <a   href="https://www.interviewbit.com/node-js-interview-questions/" className="w3-bar-item w3-button w3-padding-large w3-hide-small">NodeJs</a>
          <div className="w3-dropdown-hover w3-hide-small">
            <button className="w3-padding-large w3-button" title="More">MORE <i className="fa fa-caret-down"></i></button>
            <div className="w3-dropdown-content w3-bar-block w3-card-4">
              <a  href="https://www.interviewbit.com/html-interview-questions/" className="w3-bar-item w3-button">HTML</a>
              <a   href="#home" className="w3-bar-item w3-button">Express</a>
              <a   href="#home" className="w3-bar-item w3-button">JAVA</a>
            </div>
          </div>
          <a   href="#home" className="w3-padding-large w3-hover-red w3-hide-small w3-right"><i className="fa fa-search"></i></a>
        </div>
      </div>
     


    </div>



  );
}


export default NavBar;