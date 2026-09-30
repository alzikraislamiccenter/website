import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";

export default function Logo({ inverse = false, light = false, header = false }: { inverse?: boolean; light?: boolean; header?: boolean }) {
  return <Link className={`logo ${inverse ? "logo-inverse" : ""} ${header ? "logo-header" : ""}`} href="/" aria-label={`${site.name} home`}>
    {header ? <Image src="/assets/Logo.png" alt="" width={474} height={31} priority className="logo-header-image" /> : light ? <svg className="logo-knockout" viewBox="105 175 380 245" aria-hidden="true" focusable="false">
      <filter id="al-zikra-white-mark" x="0" y="0" width="591" height="591" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  .472 1.589 .160 0 -1.222" />
      </filter>
      <image href="/assets/brand/logo-white.jpg" x="0" y="0" width="591" height="591" filter="url(#al-zikra-white-mark)" />
    </svg> : <Image src={inverse ? "/assets/brand/logo-white.jpg" : "/assets/brand/logo-brown.jpg"} alt="" width={591} height={591} priority className="logo-image" />}
  </Link>;
}
