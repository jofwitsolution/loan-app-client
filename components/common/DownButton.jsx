import Image from "next/image";
import images from "@constants/images";

const DownButton = () => {
  return (
    <button className="w-[35px] h-[35px] rounded-[35px] xs:w-[55px] xs:h-[55px] xs:rounded-[55px] flex items-center justify-center border border-white hover:border-color-secondary">
      <Image
        src={images.dropdown}
        alt="dropdown"
        className="w-[20px] xs:w-[30px]"
      />
    </button>
  );
};

export default DownButton;
