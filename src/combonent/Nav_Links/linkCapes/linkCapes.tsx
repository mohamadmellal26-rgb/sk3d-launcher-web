import styles from './linkCapes.module.css';

export default function LinkCapes() {
    // بيانات تجريبية - استبدلها لاحقاً بـ API call
    const capes = [
        { id: 1, img: 'https://s.namemc.com/3d/skin/body.png?id=12b92a9206470fe2&cape=6851f20cfe35bd03&theta=210&width=384&height=384', likes: 106159 },
        { id: 2, img: 'https://s.namemc.com/3d/skin/body.png?id=12b92a9206470fe2&cape=86a126427a9cf1c9&theta=210&width=384&height=384', likes: 71067 },
        { id: 3, img: 'https://s.namemc.com/3d/skin/body.png?id=12b92a9206470fe2&cape=62db1a06cba0d59a&theta=210&width=384&height=384', likes: 65294 },
        { id: 4, img: '/cape4.png', likes: 48090 },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.glassPanel}>
                <header style={{textAlign: 'center'}}>
                    <h1>Choose a cape in your style</h1>
                    <p>With one click, assign a cape to your account</p>
                </header>

                <div className={styles.filterTabs}>
                    <button>Popular</button>
                    <button>Random</button>
                    <button>Tagged</button>
                </div>

                <div className={styles.capeGrid}>
                    {capes.map((cape) => (
                        <div key={cape.id} className={styles.capeCard}>
                            <img src={cape.img} alt="Cape" />
                            <div className={styles.likes}>❤️ {cape.likes.toLocaleString()}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}