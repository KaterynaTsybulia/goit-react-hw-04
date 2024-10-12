import { useEffect, useState } from 'react';
import { getPhotos } from '../src/image-api';

import SearchBar from "./components/SearchBar/SearchBar";
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
// import ImageModal from './components/ImageModal/ImageModal';
// import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';


export default function App() {
  const [query, setQuery] = useState ("");
  const [page, setPage] = useState (1);
  const [images, setImages] = useState ([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setEroor] = useState(null);
  const [isEmpty,setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  useEffect (() => {
    if(!query) {
      return;
    }
    const fetchData = async () => {
    setIsLoading(true);
    try {
      const {total, total_pages, results} = await getPhotos(query, page);
      if(!results.length) {
        return setIsEmpty(true);
      }
      setImages(prevImages => [...prevImages, ...results]);
      setIsVisible(page < total_pages);
    } catch (error) {
      setEroor(error);
    } finally {
      setIsLoading(false);
    }
}
fetchData();
  },[page, query])

  
  const onHandleSubmit = (value) =>{
    setQuery(value);
    setImages([]);
    setPage(1);
    setEroor(null);
    setIsEmpty(false);
    setIsVisible(false);
  }
  
  const onLoadMore = 

return (
  <>
  <SearchBar onSubmit={onHandleSubmit}/>
  {images.length > 0 && <ImageGallery images={images}   />}
  {/* <ImageModal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    imageData={selectedImage}
  /> */}
  {/* {isVisible && images.length > 0 && <LoadMoreBtn onClick={onLoadMore} disable={isLoading} />} */}
  
  {isLoading && <Loader isLoading={isLoading} />}
  {error && <ErrorMessage />}
</>
)
}
