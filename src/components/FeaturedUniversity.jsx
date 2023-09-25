import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedUniversity = ({ href, src, alt }) => {
  return (
    <Link
      href={href}
      className="flex items-center lg:justify-center hover:scale-110 transition-transform"
    >
      <Image width={200} height={200} src={src} alt={alt} />
    </Link>
  );
};

export default FeaturedUniversity;
