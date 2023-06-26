import React, { useState } from 'react';
import videosData from '../videos.json';


function Modal(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const videos: string[] = videosData.videos;

  
    return (
      <div className="modal">
        <h2>Vídeos</h2>
        <ul>
          {videos.map((video, index) => (
            <li key={index}>
              <a href={video} target="_blank" rel="noopener noreferrer">
                Vídeo {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

