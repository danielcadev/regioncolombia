// types/blog.ts

export interface ImageData {
    data: {
      attributes: {
        url: string;
      };
    };
  }
  
  export interface ProyectoComunitario {
    id: number;
    attributes: {
      Title: string;
      MainImage: ImageData;
      Description: string;
      ContentSection1: string;
      Image1: ImageData;
      ContentSection2: string;
      Image2: ImageData;
      ContentSection3: string;
      Slug: string;
      Author: {
        data: {
          attributes: {
            username: string;
          };
        };
      };
      zona: string; 
    };
  }
  
  export interface ProyectoComunitarioPreviewProps {
    id: number;
    title: string;
    imageUrl: string;
    slug: string;
    regionName: string;
    subRegionName: string;
    zonaName: string;
  }

  