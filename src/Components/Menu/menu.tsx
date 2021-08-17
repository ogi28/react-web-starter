import { MenuItem } from './menu-item';
import { SearchBar } from '../Search-bar';
import { Link } from "react-router-dom";
// import React from "react";

export function Menu() {
  return (<>
       {/*TODO fix console log with query from database */}
    <SearchBar onChange={(e) => console.log(e.target.value)} />
    <MenuItem><Link to="/">Home</Link> </MenuItem>
    <MenuItem><Link to="/all-posts">All posts</Link> </MenuItem>
    <MenuItem><Link to="/favorites">Favorites</Link> </MenuItem>
    <MenuItem><Link to="/last-listened">Last Listened</Link> </MenuItem>
  </>
  )
}
