import { FaDownload } from "react-icons/fa6";

const ImageCard = ({ pic }) => {
  // console.log(pic);
  return (
    <div
      key={pic.id}
      className="relative flex flex-col gap-4 p-2 mb-4 bg-white rounded-xl"
    >
      <a
        href={pic?.src?.original}
        className="absolute top-0 right-0 p-4 text-black cursor-pointer"
      >
        <FaDownload />
      </a>
      <div className="object-contain w-full">
        <img
          src={pic?.src?.tiny}
          alt={pic?.alt}
          className="w-full aspect-[4/3]"
        />
      </div>
      {/* <div className="flex flex-col py-4">
        <div className="w-full break-words ">{pic.alt}</div>
        <div>{pic?.id}</div>
        <div>{pic?.photographer}</div>
      </div> */}
    </div>
  );
};

export default ImageCard;
