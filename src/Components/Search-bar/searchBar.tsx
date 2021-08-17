import React, { FC } from "react";

import styles from './searchBar.module.css';

interface SearchBarProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const SearchBar: FC<SearchBarProps> = (props) => {
  return <input placeholder="Search..." className={styles.search} type="search" onChange={props.onChange} />

}
