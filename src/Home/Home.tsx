import './Home.css';

import HeroSection from '../combonent/ComboHomePag/1.HeroSection/HeroSection';
import SplitLayout from '../combonent/ComboHomePag/2.Split Layout/Split Layout';
import Benefits from '../combonent/ComboHomePag/3.Benefits Section/Benefits Section';
import SoftwareUpdatesSection from '../combonent/ComboHomePag/4.SoftwareUpdatesSection/SoftwareUpdatesSection';
import CTASection from '../combonent/ComboHomePag/5.CTASection/CTASection';

function Home() {
    return (
        <>
            <HeroSection />
            <SplitLayout />
            <Benefits />
            <SoftwareUpdatesSection />
            <CTASection />
        </>
    );
}

export default Home;