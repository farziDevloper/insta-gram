import Image from "next/image";
import { NavigationData } from "../Assets/NavigationData";
import Link from "next/link";

const SideBar = () => {
  return (
    <div>
      {NavigationData &&
        NavigationData?.map((item, index) => {
          return (
            <div key={index} className="background-red">
              <Link
                href={item.link}
                className="flex align-center m10px text-none w100"
              >
                <Image
                  src={item.icon}
                  width={30}
                  height={30}
                  alt={item.title}
                />
                <h3 className="hide ml22 text-color">{item.title} </h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default SideBar;
