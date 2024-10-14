import { useEffect, useState } from 'react';
import { getPhotos } from '../src/image-api';

import SearchBar from "./components/SearchBar/SearchBar";
import Loader from './components/Loader/Loader';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

import './App.css';


export default function App() {
  const [query, setQuery] = useState ("");
  const [page, setPage] = useState (1);
  const [images, setImages] = useState ([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty,setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect (() => {
    if(!query) {
      return;
    }
    const fetchData = async () => {
    setIsLoading(true);
    try {
      const {total_pages, results} = await getPhotos(query, page);
      if(!results.length) {
        return setIsEmpty(true);
      }
      setImages(prevImages => [...prevImages, ...results]);
      setIsVisible(page < total_pages);
    } catch (error) {
      setError(error);
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
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  }
  
  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  }

  const openModal = (imageData) => {
    setSelectedImage(imageData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

return (
  <>
  <SearchBar onSubmit={onHandleSubmit}/>
  {isEmpty && <p className="no-results">No results found</p>}
  {images.length > 0 && <ImageGallery images={images}  onImageClick={openModal} />}
  <ImageModal
    isOpen={isModalOpen}
    onRequestClose={closeModal}
    imageData={selectedImage}
  />
  {isVisible && images.length > 0 && <LoadMoreBtn onClick={onLoadMore} disabled={isLoading}>{isLoading ? "loading" : "LoadMore" }</LoadMoreBtn>}
  {isLoading && <Loader isLoading={isLoading} />}
  {error && <ErrorMessage message={error} />}
</>
)
}
