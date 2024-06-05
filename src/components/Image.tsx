interface Iprop {
  imageUrl: string;
  alt: string;
  className?: string;
}

const Image = ({ imageUrl, alt, className }: Iprop) => {
  return <img src={imageUrl} alt={alt} className={className} />;
};

export default Image;
