import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { getCapeCards } from '../../Data/capes'; // الاستيراد من المسار الموحد
import styles from './linkCapes.module.css';

// النوع هنا يعبر عن "شكل البطاقة" فقط
interface CapeCard {
    id: number;
    likes: number;
    img: string;
}

export default function LinkCapes() {
    const navigate = useNavigate();
    
    // جلب البيانات الموحدة
    const capes: CapeCard[] = getCapeCards();

    const [selectedId, setSelectedId] = useState<number>(capes[0]?.id || 0);

    const handleCapeClick = (item: CapeCard) => {
        setSelectedId(item.id);
        navigate(`/capes/${item.id}`); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.capeGrid}>
                {capes.map((item) => (
                    <div 
                        key={item.id} 
                        className={`${styles.capeCard} ${selectedId === item.id ? styles.active : ''}`}
                        onClick={() => handleCapeClick(item)}
                    >
                        <img src={item.img} alt={`Cape ${item.id}`} />
                        <div className={styles.likesBar}>
                            <FaHeart /> 
                            <span>{item.likes.toLocaleString()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}