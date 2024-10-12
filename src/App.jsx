import { useEffect, useState } from 'react';
import { getPhotos } from '../src/image-api';

import SearchBar from "./components/SearchBar/SearchBar";

// import Loader from './components/Loader/Loader';
// import ImageGallery from './components/ImageGallery/ImageGallery';
// import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
// import ErrorMessage from './components/ErrorMessage/ErrorMessage';
// import ImageModal from './components/ImageModal/ImageModal';

export default function App() {
  const [query, setQuery] = useState ("");
  const [page, setPage] = useState (1);
  const [images, setImages] = useState ([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setEroor] = useState(null);


  useEffect (() => {
    if(!query) {
      return;
    }
    const fetchData = async () => {
    setIsloading(true);
    try {
      const data = await getPhotos(query, page);
      console.log(data);
    } catch (error) {
      setEroor(error);
    } finally {
      setIsloading(false);
    }
}
fetchData();
  },[page, query])

  
  const onHandleSubmit = (value) =>{
    setQuery(value);
  }
  

return (
  <SearchBar onSubmit={onHandleSubmit}/>
)
}
