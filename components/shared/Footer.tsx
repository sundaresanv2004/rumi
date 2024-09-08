'use client';
import styles from "@/app/styles";
import Image from "next/image";
import {logo} from "@/public/assets";



const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-7 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
            <div className={"flex gap-x-3 items-center"}>
                <Image
                    src={logo}
                    alt=""
                    className="h-6 w-auto pr-2"
                />
                <h1 className="font-semibold text-white text-2xl">Rumi</h1>
            </div>


            <p className={`${styles.paragraph} mt-1 max-w-[312px] flex items-center mb-2`}>

            </p>

            <div className="flex flex-row md:mt-0 pt-5">
                <h1 className={"text-white"}>Hello </h1>
            </div>
        </div>

        <div
            className="flex-[1.5] w-full justify-end max-sm:justify-start flex flex-row space-x-10 flex-wrap md:mt-0 mt-10">
            <h1 className={"text-white"}>Hello </h1>
        </div>
    </div>

      <div
          className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[16px] leading-[27px] text-white">
            Copyright Ⓒ 2024 Rumi | Powered by <span className="pl-1 font-bold pr-1"> Next JS</span>
            Styled by <span className="pl-1 font-bold pr-1"> Tailwind CSS </span> & <span className="pl-1 font-bold pr-1"> Shadcn UI </span>
        </p>
    </div>
  </section>
);

export default Footer;
