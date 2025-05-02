import React, { useState, useEffect } from 'react';
import styles from './BackgroundImage.module.css';

const BackgroundImage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string>('');
  const [nextImage, setNextImage] = useState<string>('');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const fetchNewImage = async () => {
    const response = await fetch('https://picsum.photos/1024/1024?blur=2');
    return response.url;
  };

  useEffect(() => {
    const initializeBackground = async () => {
      const initialImage = await fetchNewImage();
      setCurrentImage(initialImage);
    };

    initializeBackground();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      const newImage = await fetchNewImage();
      setNextImage(newImage);
      setIsTransitioning(true);
      
      // After the transition duration (1s), update the current image
      setTimeout(() => {
        setCurrentImage(newImage);
        setIsTransitioning(false);
      }, 1000);
    }, 10 * 60 * 1000); // 10 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.container} ${isTransitioning ? styles.transitioning : ''}`} aria-hidden="true">
      <div 
        className={`${styles.image} ${styles.current}`}
        style={{ backgroundImage: `url(${currentImage})` }}
      />
      {isTransitioning && (
        <div 
          className={`${styles.image} ${styles.next}`}
          style={{ backgroundImage: `url(${nextImage})` }}
        />
      )}
    </div>
  );
};

export default BackgroundImage; 