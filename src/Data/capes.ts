export interface Cape {
    id: number;
    skin: string;
    cape: string;
    likes: number;
    downloads: number;
    shares: number;
    img: string;
}

export const capesData: Cape[] = [
    { 
        id: 1, 
        skin: '/assets/3D_Object/2dc65bc94b53c809.png', // تعديل المسار
        cape: '/assets/imges_Caps/ImgCaps1.png',      // تعديل المسار
        likes: 106159, 
        downloads: 1239, 
        shares: 69, 
        img: '/assets/images/1.image_c0dc04.png'      // تعديل المسار
    },
    { 
        id: 2, 
        skin: '/assets/3D_Object/2dc65bc94b53c809.png', 
        cape: '/assets/imges_Caps/ImgCaps2.png', 
        likes: 48090, 
        downloads: 500, 
        shares: 12, 
        img: '/assets/images/2.image_c0dc1e.png' 
    },
    { 
        id: 3, 
        skin: '/assets/3D_Object/2dc65bc94b53c809.png', 
        cape: '/assets/imges_Caps/ImgCaps3.png', 
        likes: 48090, 
        downloads: 500, 
        shares: 12, 
        img: '/assets/images/3.image_c0dc24.png' 
    },
];

export const getCapeCards = () => capesData.map(({ id, likes, img }) => ({
    id,
    likes,
    img
}));