//START OF RAW SCRIPTS//
//Collapsible Module Code
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    var content = this.nextElementSibling;
    var icon = this.querySelector('.collapsible-icon');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.style.transform = "rotate(0deg)";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    }
  });
}

//Scroll to top on refresh
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
}
//END OF RAW SCRIPTS//

//Calls scripts upon load
window.onload = () => {
};

//Calls scripts upon webpages state change
document.onreadystatechange = function () {
  loadingScreen();
};

//Clickable image functions
function interactibleImages() {
  let all = document.getElementsByClassName("carousel-image"),
    lightbox = document.getElementById("lightbox");
  if (all.length > 0) {
    for (let i of all) {
      i.onclick = () => {
        let clone = i.cloneNode();
        clone.className = "";
        lightbox.innerHTML = "";
        lightbox.appendChild(clone);
        lightbox.className = "show";
      };
    }
  }
  lightbox.onclick = () => {
    lightbox.className = "";
  };
}

function loadingScreen() {
  if (document.readyState !== "complete") {
    //Scroll to top of page
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    }
    //Show loading screen
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector("body").style.maxHeight = "100vh";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    //Hide loading screen
    document.querySelector("#loader").classList.toggle('fade');
    document.querySelector("body").style.overflowY = "visible";
    document.querySelector("body").style.visibility = "visible";
    document.querySelector("body").style.maxHeight = "fit-content";
  }
}

function generateHeader() {
  var header = document.getElementById("header");
  header.innerHTML = `
  <!--
  DEVELOPED BY PLM STUDENTS FOR FUTURE PLM STUDENTS!
  DEVELOPERS:
  CAYLE SAM PANGANIBAN
  CLARENCE JACOB AGCAOILI
  HANNAH SHANE GITTABAO
  -->
  <div class="container-fluid">
      <a class="navbar-brand abs" href="index.php">
          <img src="PLM_Seal.png" width="43" height="43" alt="" loading="lazy" />
      </a>

      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
        <input type="checkbox" id="checkbox4" class="checkbox4 visuallyHidden">
        <label for="checkbox4" class="hamburger-label">
            <div class="hamburger hamburger4">
                <span class="bar bar1"></span>
                <span class="bar bar2"></span>
                <span class="bar bar3"></span>
                <span class="bar bar4"></span>
                <span class="bar bar5"></span>
            </div>
        </label>
      </button>

<div class="navbar-collapse collapse" id="collapseNavbar">
    <a class="plm-label nav-link" aria-current="page" href="index.php">
        <div class="plm-label-text">
            <p class="plm-label-filipino m-0 p-0 g-0">Pamantasan ng Lungsod ng Maynila</p>
            <p class="plm-label-english m-0 p-0 g-0">University of the City of Manila</p>
        </div>
    </a>
    <ul class="admin-menu navbar-nav ms-auto justify-content-center">
        <li class="nav-item">
            <a class="nav-link" href="index.php">
                <img src="home.svg" alt="Home Icon" />
                Home
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../dataPrivacy.php">
                <img src="form.svg" alt="Applicant Form Icon" />
                Applicant Form
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../login_stub.php">
                <img src="login.svg" alt="Applicant Login Icon" />
                Applicant Login
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="helpdesk.php">
                <img src="help.svg" alt="Help Desk Icon" />
                Help Desk
            </a>
        </li>
    </ul>
</div>

<!-- Additional CSS for Styling -->
<style>
    .navbar-collapse {
        padding: 0 15px;
    }

    .plm-label {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .plm-label-text {
        text-align: center;
    }

    .plm-label-filipino,
    .plm-label-english {
        margin: 0;
        padding: 0;
    }

    .admin-menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
    }

    .admin-menu .nav-item {
        margin: 5px;
    }

    .admin-menu .nav-link {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    .admin-menu .nav-link img {
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }

    @media (max-width: 768px) {
        .plm-label-filipino,
        .plm-label-english {
            font-size: 14px;
        }

        .admin-menu .nav-link {
            font-size: 12px;
        }

        .admin-menu .nav-link img {
            width: 16px;
            height: 16px;
        }
    }
</style>


  <div class="modal fade" data-toggle="modal" id="loginModal" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body row g-0">
          <div class="col g-0 loginRed">
            <img src="PLM_Seal.png">
          </div>
          <div class="col g-0 loginWhite">
            <a class="exitModal" data-bs-dismiss="modal" aria-label="Close"><img src="thumbnails_2023/close.svg"></a>
            <form id="loginForm">
              <h5>Applicant Login</h5>
              <h6>Use the account credentials sent to your email</h6>
              <div class="row g-0 loginInput">
                <div class="input-credentials">
                  <img src="thumbnails_2023/username.svg">
                  <p>Applicant ID</p>
                </div>
                <div class="input-group mb-3">
                  <input name="applicantLogin" type="text" class="input-text form-control" id="applicantLogin" placeholder="Enter username" />
                </div>
              </div>


              <div class="row g-0 loginInput">
                <div class="input-credentials">
                  <img src="thumbnails_2023/password.svg">
                  <p>Password</p>
                </div>

                <div class="input-group mb-3">
                <input name="passwordLogin" type="password" class="input form-control" id="passwordLogin" placeholder="Enter Password" />
                  <span class="input-group-text" onclick="password_show_hide();">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16" id="hide_eye" style="display: none;">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16" id="show_eye" style="display: block;">
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
              </svg>
                  </span>
              </div>
              <div class="input-group mb-3">
              <h6 id="loginError"></h6>
              </div>
              </div>
              <button class="loginbutton" id="loginButton" type="button" onclick="loginApplicant()">Log in</button>
            </form>
            <img src="thumbnails_2023/PLM_White.png">
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function generateHeader2() {
  let header2 = document.getElementById("header2");
  header2.innerHTML = `
  <!--
  DEVELOPED BY PLM STUDENTS FOR FUTURE PLM STUDENTS!
  DEVELOPERS:
  CAYLE SAM PANGANIBAN
  CLARENCE JACOB AGCAOILI
  HANNAH SHANE GITTABAO
  -->
  <div class="container-fluid">
    <a class="navbar-brand abs" href="javascript:logoutApplicant()">
      <img src="PLM_Seal.png" width="43" height="43" alt="" loading="lazy" />
    </a>

    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
    <input type="checkbox" id="checkbox4" class="checkbox4 visuallyHidden">
      <label for="checkbox4" class="hamburger-label">
          <div class="hamburger hamburger4">
              <span class="bar bar1"></span>
              <span class="bar bar2"></span>
              <span class="bar bar3"></span>
              <span class="bar bar4"></span>
              <span class="bar bar5"></span>
          </div>
      </label>
    </button>
    
    <div class="navbar-collapse collapse" id="collapseNavbar">
      <a class="plm-label nav-link" aria-current="page" href="javascript:logoutApplicant()">
        <p class="plm-label-filipino m-0 p-0 g-0">Pamantasan ng Lungsod ng Maynila</p>
        <p class="plm-label-english m-0 p-0 g-0"> University of the City of Manila</p>
      </a>
      <ul class="admin-menu navbar-nav ms-auto justify-content-center ">
        <li class="nav-item">
          <a class="nav-link" href="applicantform.php">
            <img src="thumbnails_2023/app_eye.svg" />
            View Info</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="applicationsubmission.php">
            <img src="thumbnails_2023/app_status.svg" />
            Application Submission </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:logoutApplicant()">
            <img src="thumbnails_2023/logout.svg" />
            Logout</a>
        </li>
      </ul>
    </div>
  </div>`
}

function password_show_hide() {
	var x = document.getElementById("passwordLogin");
	var show_eye = document.getElementById("show_eye");
	var hide_eye = document.getElementById("hide_eye");
	hide_eye.classList.remove("d-none");
	if (x.type === "password") {
	  x.type = "text";
	  show_eye.style.display = "none";
	  hide_eye.style.display = "block";
	} else {
	  x.type = "password";
	  show_eye.style.display = "block";
	  hide_eye.style.display = "none";
	}
  }


function generateFooter() {
  var footer = document.getElementById("footer");
  footer.innerHTML = `<div class="row g-0 details">
    <div class="col g-0 about-us">
        <div class="row g-0 plm-footer-logo">
            <img class="plm-footer-image" src="PLM_Seal.png" alt="" loading="lazy" />
            <div class="col g-0">
                <p class="plm-footer-label-main">Pamantasan ng Lungsod ng Maynila</p>
                <p class="plm-footer-label-sub">University of the City of Manila</p>
            </div>
        </div>
        <div class="row g-0 plm-footer-aboutus">
            <b>About Us:</b> 
            Pamantasan ng Lungsod ng Maynila (PLM) is the first and only charted and autonomous university funded by a city government which is situated inside the historic walled area of Intramuros, Manila, Philippines.
        </div>
    </div>
    <div class="col g-0 AO-Information">
        <p class="plm-footer-contact">For more information, you may contact the Admissions Office.</p>
        <div class="row g-0 plm-email">
            <div class="col g-0">
                <span class="plm-footer-bold">Email: </span>
                <span class="plm-footer-text">admission_office@plm.edu.ph</span>
            </div>
        </div>
        <div class="row g-0 plm-number">
            <div class="col g-0">
                <span class="plm-footer-bold">Contact Numbers: </span>
               <!-- <span class="plm-footer-numbertext">(+632) 8643-25-57 and (+632) 8643-25-74</span> -->
            </div>
        </div>
        <div class="row g-0 plm-address">
            <div class="col g-0">
                <span class="plm-footer-bold">Address: </span>
                <span class="plm-footer-addresstext">Gen. Luna corner Muralla Streets, Intramuros Manila, Philippines 1002</span>
            </div>
        </div>
        <div class="row g-0 plm-footer-icon-section">
            <div class="plm-footer-icon d-flex justify-content-center">
        </div>
    </div>
    <div class="col g-0">
        <iframe class="gmaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.215549408406!2d120.97398871478896!3d14.586789989811258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2336770053%3A0x1b731714778d3506!2sPamantasan%20ng%20Lungsod%20ng%20Maynila!5e0!3m2!1sen!2sph!4v1658283044869!5m2!1sen!2sph" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
  <div class="copyright row g-0 bottom-footer text-center align-content-center">
  <p>Copyright 1967 - 2022 Pamantasan ng Lungsod ng Maynila. All Rights Reserved.<br>Admissions Office</p>
  </div>
  <button onclick="topFunction()" id="goToTop" title="Go to top"><img src="thumbnails_2023/expand_less.svg" style="padding-bottom: 10px; margin-top: -5px;"></button>`;
}

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  var button = document.getElementById("goToTop");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.bottom = "20px";
    button.style.opacity = "1";
  } else {
    button.style.bottom = "-100px";
    button.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//String cleaner removes double spaces and replaces it with single space
//Also checks for empty and undefined values and replaces them with an empty
//String for better processing.
function stringCleaner(string, isNA = true) {
  if (isNA)
  {
    if (string == undefined || string == "")
      return 'N/A';
  }
  else if (!isNA)
  {
    if (string == undefined || string == "")
      return '';
  }
  let stringCleanerArray = string.trim().split(" ");
  stringCleanerArray = stringCleanerArray.filter(function (e) {
    return e != '';
  });
  stringCleanerArray = stringCleanerArray.join(" ");
  return stringCleanerArray;
}

//Function for applicant login using Ajax for instant feedback without reloading
function loginApplicant() {
  let loginApplicantID = document.getElementById("applicantLogin");
  let loginPassword = document.getElementById("passwordLogin");
  let loginError = document.getElementById("loginError");

  if (loginApplicantID.value.length == 0) {
    loginError.innerHTML = "Error: Applicant ID is required.";
    return 0;
  }

  if (loginPassword.value.length == 0) {
    loginError.innerHTML = "Error: Password is required.";
    return 0;
  }

  $.ajax({
    url: 'php_2023/loginApplicantForm.php',
    type: 'POST',
    data: {
      'loginApplicantID': stringCleaner(loginApplicantID.value, false),
      'loginPassword': stringCleaner(loginPassword.value, false)
    },
    cache: false,
    success: function (result) {
      switch (result) {
        case '0':
          document.location = "applicantform.php";
          break;
        case '401':
          loginError.innerHTML = "Error: Expired credentials.";
          break;
        case '404':
          loginError.innerHTML = "Error: Invalid credentials.";
          break;
        default:
          loginError.innerHTML = "Error: Unknown error.";
      }
    },
    error: function (result) {
      loginError.innerHTML = "Error: Server might be down, please try again later.";
    }
  });
}

function logoutApplicant() {
  $.ajax({
    url: 'php_2023/logoutApplicantForm.php',
    success: function () {
      document.location = "index.php";
    }
  });
}

function convertDateToReadable(dateString) {
  if(dateString == undefined)
    return undefined;
  let dateArray = dateString.split("-");
  switch (parseInt(dateArray[1])) {
    case 1:
      dateArray[1] = "January";
      break;
    case 2:
      dateArray[1] = "February";
      break;
    case 3:
      dateArray[1] = "March";
      break;
    case 4:
      dateArray[1] = "April";
      break;
    case 5:
      dateArray[1] = "May";
      break;
    case 6:
      dateArray[1] = "June";
      break;
    case 7:
      dateArray[1] = "July";
      break;
    case 8:
      dateArray[1] = "August";
      break;
    case 9:
      dateArray[1] = "September";
      break;
    case 10:
      dateArray[1] = "October";
      break;
    case 11:
      dateArray[1] = "November";
      break;
    case 12:
      dateArray[1] = "December";
      break;
  }
  return dateArray[1]+" "+dateArray[2]+", "+dateArray[0];
}

function getFileExtension(filename) {
  return filename.split(".").pop().toLowerCase();
}

function getFileSizeReadable(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
