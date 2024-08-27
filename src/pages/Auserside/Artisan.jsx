import React from 'react';
import Navbar from '../../components/GeneralComponents/Navbar';
import Footer from '../../components/GeneralComponents/Footer';
import "../Auserside/Artisan.css";
import { useParams } from 'react-router';
import Userchangepassword from '../../components/ClientUserProfile/Userchangepassword';
import Artisanportfolio from '../../components/ArtisanUserProfile/Artisanportfolio';
import Artisansidebar from '../../components/ArtisanUserProfile/Artisansidebar';
import Artisanaccsettings from '../../components/ArtisanUserProfile/Artisanaccsettings';
import Artisanaddress from '../../components/ArtisanUserProfile/Artisanaddress';



const Artisan = () => {

    const { activepage } = useParams()

    return (
        <>
            <div>
                <Navbar />

                <div className='artisanprofilein'>
                    <div className='left'>
                        <Artisansidebar activepage= {activepage} />
                    </div>
                    <div className='right'>
                        {/* Welcome User Steven */}
                        {activepage === 'artisanaccountsettings' && <Artisanaccsettings /> }
                        {activepage === 'artisanchangepassword' && <Userchangepassword /> }
                        {activepage === 'artisanskillorservice' && <Artisanportfolio /> }
                        {activepage === 'artisanaddress' && <Artisanaddress /> }
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Artisan;
