import './Hero.css';
import TenisNike from "../../assets/White-Sneakers-PNG-Clipart 1.png";
import Ornament from '../../assets/Ornament 11.png';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Hero() {
  return (
    <>
      <Swiper
        modules={[Pagination, Scrollbar, A11y]} // Removido Navigation
        slidesPerView={1}
        pagination={{ clickable: true }} // Bolinhas de navegação
        loop={true}
      >
        <SwiperSlide>
          <section className="banner">
            <div className="banner-content">
              <div className="banner-text">
                <p id="title-amarelo">Melhores ofertas personalizadas</p>
                <h1 className='titleBanner'>Queima de estoque Nike🔥</h1>
                <p className='paragraphBanner'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                <button className='btnBanner' type="button">Ver ofertas</button>
              </div>
              <div className="banner-image">
                <img src={TenisNike} alt="" />
              </div>
              <img src={Ornament} id="ornament" alt="" />
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="banner">
            <div className="banner-content">
              <div className="banner-text">
                <p id="title-amarelo">Matheuzin Dev</p>
                <h1 className='titleBanner'>Queima de estoque Nike🔥</h1>
                <p className='paragraphBanner'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                <button className='btnBanner' type="button">Ver ofertas</button>
              </div>
              <div className="banner-image">
                <img src={TenisNike} alt="" />
              </div>
              <img src={Ornament} id="ornament" alt="" />
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
