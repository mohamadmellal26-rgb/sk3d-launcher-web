import './Home.css';

// الاستيرادات صحيحة كما كتبتها أنت
import { HeroSection1 } from '../../components/ComboHomePage/1.HeroSection/HeroSection';
import { SplitLayout3 } from '../../components/ComboHomePage/2.Split Layout/Split Layout';
import { BenefitsSection2 } from '../../components/ComboHomePage/3.Benefits Section/Benefits Section';
import { SoftwareUpdatesSection4 } from '../../components/ComboHomePage/4.SoftwareUpdatesSection/SoftwareUpdatesSection';
import { CTASection5 } from '../../components/ComboHomePage/5.CTASection/CTASection';

function Home() {
    return (
        <>
            {/* استخدم الأسماء التي استوردتها هنا */}
            <HeroSection1 />
            <SplitLayout3 />
            <BenefitsSection2 />
            <SoftwareUpdatesSection4 />
            <CTASection5 />
        </>
    );
}

export default Home;