import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../js/store/appContext.jsx";
import ProductCardPerfumes from "../components/ui/cards/ProductCardPerfumes.jsx";
import HomeContact from "../components/home/HomeContact.jsx";
import banner from "../assets/banner_arabe.jpg";
import Asesoria from "../components/Asesoria.jsx";
import { storeConfig } from "../config/storeConfig";


export default function InicioNuevo() {
    const { store, actions } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const banner = `/${storeConfig.media.heroImage}`;

    useEffect(() => {
        if (actions?.fetchProducts) {
            actions.fetchProducts();
        }
    }, []);

    const ADDRESS = storeConfig.business.address;
    const HOURS = storeConfig.business.hours;
    const IG_URL = storeConfig.contact.instagram;

    const WA_URL = `https://wa.me/${storeConfig.contact.whatsapp}?text=${encodeURIComponent(
        storeConfig.contact.whatsappMessage
    )}`;

    const MAP_EMBED = storeConfig.map.embed;


    useLayoutEffect(() => {
        const lastId = sessionStorage.getItem("lastProductId");
        if (!lastId) return;

        const el = document.querySelector(`[data-product-id="${lastId}"]`);
        if (!el) return;

        el.scrollIntoView({ block: "center" });

        // opcional: limpiar para que no te re-scrollee en futuras entradas
        sessionStorage.removeItem("lastProductId");
    }, []);



    useEffect(() => {
        if (location.state?.scrollTo === "contacto") {
            const el = document.getElementById("asesoria");
            if (!el) return;
            const headerH = document.querySelector("header")?.offsetHeight || 80;
            const y = el.getBoundingClientRect().top + window.pageYOffset - headerH - 8;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }, [location.state]);
    return (
        <div className="min-h-screen bg-gray-50">


            {/* HERO PREMIUM CON IMAGEN IMPORTADA */}
            <section className="relative h-[400px] sm:h-[420px] md:h-[75vh] flex items-center justify-center text-center overflow-hidden bg-[#0B0608]">

                {/* Fondo con tu imagen */}
                <div
                    className="
  absolute inset-0
  bg-no-repeat

  /* ================= MOBILE ================= */

  bg-[length:170%_auto]      /* ZOOM MOBILE (100% = normal, 120% = zoom, 90% = más chica) */
  bg-[center_top_1px]      /* POSICION VERTICAL MOBILE (- sube, + baja) */

  /* ================= DESKTOP ================= */

  sm:bg-cover                /* DESKTOP llena todo el contenedor */
  sm:bg-center               /* DESKTOP centrada */
  md:bg-[center_top_-2px]   /* POSICION VERTICAL DESKTOP */

  /* ================= EFECTOS ================= */

  animate-zoomSlow
  brightness-110
  saturate-110
  "
                    style={{ backgroundImage: `url(${banner})` }}
                />

                {/* Overlay oscuro elegante */}

                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/0 to-black/40" />

                {/* Contenido */}
                <div className="
relative z-10 px-6 max-w-3xl

mt-[240px]        /* MOBILE mover bloque */
sm:mt-[180px]
md:mt-[350px]     /* DESKTOP mover bloque */
">

                    <h1 className="
    text-2xl md:text-3xl
    font-serif font-semibold text-white tracking-wide

    pt-[20px]        /* MOBILE espacio arriba titulo */
    md:pt-[190px]    /* DESKTOP espacio arriba */

    mb-[10px]        /* MOBILE espacio abajo titulo */
    md:mb-[20px]     /* DESKTOP espacio abajo */
    ">
                        {storeConfig.branding.heroTitle}
                    </h1>

                    <p className="
    text-sm md:text-xl
    font-serif text-gray-200 tracking-wide

    mt-[-5px]        /* MOBILE subir/bajar subtitulo */
    md:mt-[-20px]    /* DESKTOP */

    mb-[20px]        /* espacio abajo subtitulo */
    md:mb-[30px]
    ">
                        {storeConfig.branding.heroSubtitle}
                    </p>

                </div>

            </section>

            {/* PRODUCTOS */}
            <section className="max-w-7xl mx-auto px-2 sm:px-4 py-12">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold tracking-wide">
                        Productos destacados
                    </h2>

                    <div className="w-16 h-[2px] bg-amber-500 mx-auto mt-4"></div>
                </div>

                {store.loading ? (
                    <p className="text-center">Cargando...</p>
                ) : (
                    <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                        {(store.products || []).slice(0, 12).map((product) => (
                            <div
                                key={product.id}
                                data-product-id={product.id}
                                className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl rounded-xl"
                            >
                                <ProductCardPerfumes product={product} returnTo={location.pathname} isGrid={false} />
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <div className="flex justify-center mt-0 mb-12 lg:px-12 lg:py-12">
                <div
                    onClick={() => navigate(location.pathname.startsWith("/mayorista") ? "/mayorista/products" : "/products")}
                    className="
cursor-pointer
px-8 py-3
font-serif
tracking-wide
text-sm
uppercase
rounded-lg
text-black
bg-[linear-gradient(110deg,#fbbf24,#f59e0b,#fbbf24)]
bg-[length:200%_100%]
bg-left
hover:bg-right
transition-all duration-500
shadow-lg shadow-amber-500/20
"
                >
                    Explorar todas las categorías
                </div>
            </div>
            <section id="asesoria">
                <Asesoria />
            </section>



        </div>
    );
}