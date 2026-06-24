import { useEffect, useRef } from "react"; // تأكد من وجود هذا السطر في الأعلى
import { SkinViewer } from "skinview3d";


export const CapeViewer: React.FC<CapeViewerProps> = ({ skinUrl, capeUrl }) => {
  const viewerRef = useRef<HTMLCanvasElement>(null);
  const viewerInstance = useRef<SkinViewer | null>(null);

  useEffect(() => {
    // التحقق من أن الروابط موجودة قبل البدء
    if (!viewerRef.current || !skinUrl || !capeUrl) return;

    viewerInstance.current = new SkinViewer({
      canvas: viewerRef.current,
      width: 400,
      height: 500,
      skin: skinUrl,
      cape: capeUrl,
    });

    // إضافة معالجة للأخطاء (Error Handling)
    viewerInstance.current.loadSkin(skinUrl).catch(err => console.error("فشل تحميل السكن:", err));
    viewerInstance.current.loadCape(capeUrl).catch(err => console.error("فشل تحميل الكيب:", err));

    viewerInstance.current.autoRotate = true;
    
    return () => {
      viewerInstance.current?.dispose();
    };
  }, [skinUrl, capeUrl]); // سيعيد الرندرة تلقائياً عند تغير الـ id

  return <canvas ref={viewerRef} />;
};