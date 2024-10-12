import { useState } from 'react';
// import { getPhotos } from '../src/image-api';

import SearchBar from "./components/SearchBar/SearchBar";

// import Loader from './components/Loader/Loader';
// import ImageGallery from './components/ImageGallery/ImageGallery';
// import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
// import ErrorMessage from './components/ErrorMessage/ErrorMessage';
// import ImageModal from './components/ImageModal/ImageModal';

export default function App() {
  const [query, setQuery] = useState ("");
  const onHandleSubmit = (value) =>{
    setQuery(value);
    console.log(value);
    
  }
console.log(query);

return (
  <SearchBar onSubmit={onHandleSubmit}/>
)
}
