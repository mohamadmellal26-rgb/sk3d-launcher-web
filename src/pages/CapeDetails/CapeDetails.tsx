import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaHeart, FaDownload, FaShareAlt, FaPlay, FaFeather } from 'react-icons/fa';
import { CapeViewer } from '@components/ComboCapeDetails/CapeViewer/CapeViewer';
import { capesData } from '@/Data/capes';
import styles from './CapeDetails.module.css';

export const CapeDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const capeData = useMemo(() => capesData.find((c) => c.id === Number(id)), [id]);

  // دالة التنزيل المباشر
  const handleDownload = () => {
    if (!capeData?.cape) return;

    // استخدام رابط التحميل المباشر لتجنب مشاكل CORS
    const link = document.createElement('a');
    link.href = capeData.cape;
    link.setAttribute('download', `cape-${capeData.id}.png`);
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  };

  if (!capeData) {
    return (
      <div className={styles.error}>
        <h1>Cape not found!</h1>
        <button onClick={() => navigate('/home')}>Back to Home</button>
      </div>
    );
  }

  return (
    <main className={styles.pageWrapper}>
      <section className={styles.container}>
        {/* القسم الأيسر: العرض 3D */}
        <div className={styles.previewColumn}>
          <div className={styles.viewer3D}>
            <CapeViewer skinUrl={capeData.skin} capeUrl={capeData.cape} />
          </div>
          <div className={styles.viewerHeader}>
            <button aria-label="Play"><FaPlay /></button>
            <button aria-label="Feather"><FaFeather /></button>
          </div>
        </div>

        {/* القسم الأيمن: البيانات والأزرار */}
        <aside className={styles.infoColumn}>
          <h1>Cape #{capeData.id} Details</h1>
          
          <div className={styles.actionButtons}>
            <button className={styles.btnAssign}><FaHeart /> Assign</button>
            <button className={styles.btnDownload} onClick={handleDownload}>
              <FaDownload /> Download
            </button>
            <button className={styles.btnShare}><FaShareAlt /> Share</button>
          </div>
          
          <div className={styles.statsCard}>
            <h3>Cape statistics</h3>
            <ul>
              <li><FaHeart /> {capeData.likes?.toLocaleString()} Likes</li>
              <li><FaDownload /> {capeData.downloads?.toLocaleString()} Downloads</li>
              <li><FaShareAlt /> {capeData.shares?.toLocaleString()} Shares</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
};