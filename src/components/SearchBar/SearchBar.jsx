
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoSearchOutline } from "react-icons/io5";
import css from './SearchBar.module.css';


export default function SearchBar({onSubmit}) {
const [query, setQuery] = useState ("")

const handleChange = (evt) => {setQuery(evt.target.value)}

const handleSubmit = (evt) => {
  evt.preventDefault()

  if(!query.trim()) { return toast.error('Cannot be empty!')}
  onSubmit(query)
  setQuery("")
}

  return (
    <header className={css.container}>
    <form className={css.wraper} onSubmit={handleSubmit}>
      <input className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={query}
        onChange={handleChange}
      />
      <button className={css.button} type="submit"><IoSearchOutline /> Search </button>
    </form>
    <Toaster position="top-right"/>
  </header>
  );
}
