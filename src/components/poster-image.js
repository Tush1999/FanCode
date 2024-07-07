const PosterImage = ({ imgSrc = "", title }) => {
  return (
    <div className="image-block">
      <img src={`https://image.tmdb.org/t/p/original${imgSrc}`} alt={title} />
    </div>
  );
};

export default PosterImage;
