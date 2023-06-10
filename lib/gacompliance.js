/**
 * This function gets the value of a cookie by name.
 * @param {string} name - The name of the cookie to get.
 * @returns {string|undefined} The value of the cookie, or undefined if the cookie does not exist.
 */
const getCookie = (name) => {
  const value = " " + document.cookie;
  const parts = value.split(" " + name + "=");
  return parts.length < 2 ? undefined : parts.pop().split(";").shift();
};

/**
 * This function sets a cookie with the given name, value, and options.
 * @param {string} name - The name of the cookie to set.
 * @param {string} value - The value of the cookie to set.
 * @param {number} [expiryDays=365] - The number of days until the cookie expires.
 * @param {string} [domain] - The domain to set the cookie for.
 * @param {string} [path] - The path to set the cookie for.
 * @param {boolean} [secure] - Whether to set the cookie as secure.
 */
const setCookie = function (name, value, expiryDays, domain, path, secure) {
  const exdate = new Date();
  exdate.setHours(
    exdate.getHours() +
    (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
  );
  document.cookie =
    name +
    "=" +
    value +
    ";expires=" +
    exdate.toUTCString() +
    ";path=" +
    (path || "/") +
    (domain ? ";domain=" + domain : "") +
    (secure ? ";secure" : "");
};

/**
 * Accepts the GA consent form.
 */
const acceptCookie = () => { 
  setCookie("arGaCompliance", "true", 365);
  document.getElementById("cookieForm").remove();
  restartGa();
}

/**
 * Declines the GA consent form.
 */
const declineCookie = () => { 
  setCookie("arGaCompliance", "false", 365);
  document.getElementById("cookieForm").remove();
}

/**
 * Adds a cookie consent form to the page and sets the cookie if the user accepts.
 */
const addGaForm = () => {
  const cookieForm = document.createElement("div");
  cookieForm.setAttribute("id", "cookieForm");

  // Add the content to the form
  const newContent = document.createElement("p");
  newContent.innerHTML = env.content;
  
  const btn = document.createElement("button");
  btn.setAttribute("id", "cookieBtnAccept");
  btn.setAttribute("type", "button");
  btn.setAttribute("onclick", "acceptCookie()");
  btn.innerHTML = env.acceptLabel;

  const btn2 = document.createElement("button");
  btn2.setAttribute("id", "cookieBtnDecline");
  btn2.setAttribute("type", "button");
  btn2.setAttribute("onclick", "declineCookie()");
  btn2.innerHTML = env.declineLabel;

  newContent.appendChild(btn);
  newContent.appendChild(btn2);

  // Add the content to the form
  cookieForm.appendChild(newContent);

  // Add the form to the page
  document.body.appendChild(cookieForm);
}

/**
 * Enables Google Analytics tracking and sends a pageview event.
 */
const restartGa = () => { 
  window[`ga-disable-${env.gaId}`] = false;
  ga('send', 'pageview');
}

// Check if the user has accepted the cookie policy
if (getCookie("arGaCompliance") === "true") {
  window[`ga-disable-${env.gaId}`] = false;
} else {
  window[`ga-disable-${env.gaId}`] = true;
}

// Add the cookie policy form to the page
window.onload = () => { 
  if (getCookie("arGaCompliance") === undefined) {
    addGaForm();
  }
}