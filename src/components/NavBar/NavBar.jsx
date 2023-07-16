import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import M from 'materialize-css';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
    <nav role="navigation">
    <div class="nav-wrapper green darken-4">
      <Link exact class="brand-logo center" to="/">GreenThumb</Link>
      {/* eslint-disable-next-line  */}
      <a data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><span>Welcome, {user.name}</span>&nbsp;&nbsp;</li>
        <li><Link exact to="/plants">My Plants</Link></li>
        <li><Link exact to="/plants/add">Add Plant</Link></li>
        <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li><Link to="" onClick={handleLogOut}>Log Out</Link></li>
      </ul>
    </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li><span>Hi {user.name}!</span>&nbsp;&nbsp;</li>
      <li><Link exact class="black-text" to="/">Home</Link></li>
      <li><Link exact to="/plants">My Plants</Link></li>
      <li><Link exact to="/plants/add">Add Plant</Link></li>
      <li><Link to="" onClick={handleLogOut}>Log Out</Link></li>
    </ul>
  <br/>
  </>             
  );
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  // eslint-disable-next-line
  var instances = M.Sidenav.init(elems);
});
