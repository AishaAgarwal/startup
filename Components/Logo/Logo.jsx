import Image from 'next/image';

import logo from '../../public/images/Logos.png';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" passHref>
      
        <Image src={logo} width={150} height={50} alt="fantaz page logo" />
      
    </Link>
  );
};

export default Logo;