const ImageCard = ({ pic, innerRef}) => {
    console.log(pic);
    return (
      <div key={pic.id} ref={innerRef} >
        <img src={pic?.src?.tiny} alt={pic?.alt} />
      </div>
    );
  };
  
  export default ImageCard;