"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider.tsx";

export default function ImagesSliderDemo() {
  const images = [
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708769478/CSI%20Website/Gallery/ewbkh5mwxgeo7sgybvfr.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708769585/CSI%20Website/Gallery/wpgnapkpa5j2wxuk2m5x.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708769699/CSI%20Website/Gallery/g2tjvahusvbtfiynjg6i.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708769758/CSI%20Website/Gallery/zpjtyfbrk435fkcb0en4.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708521009/CSI%20Website/Gallery/mlduoo38gu0h85stcpdk.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708521035/CSI%20Website/Gallery/iuved39sv3qpctjmn63h.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708521349/CSI%20Website/Gallery/tal12kplyxflg5tdti3x.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708521349/CSI%20Website/Gallery/r4vsj5zgnb4vhuq1vseu.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708521349/CSI%20Website/Gallery/f7n7ssq7ggdnf1mp2bfj.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708521349/CSI%20Website/Gallery/vt0q1yxcwletk1c2l1wg.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708521350/CSI%20Website/Gallery/jjlaeehn9s0dupruqinw.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708521350/CSI%20Website/Gallery/qtgigrazkp8vgohawxtm.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708522996/CSI%20Website/Gallery/g0oixaysfo22yqqeu9px.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708769973/CSI%20Website/Gallery/xwsesdtidctuqgurl9rv.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708770049/CSI%20Website/Gallery/tfhq9gulue6dhe6197u9.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708770105/CSI%20Website/Gallery/lltqb2bpxvf9wiad1m1l.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708770138/CSI%20Website/Gallery/h4wme0g93t3ujkhkjc1n.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708770190/CSI%20Website/Gallery/h1uxdaagcx2erqt5o2e8.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708770260/CSI%20Website/Gallery/ojdwiuwv6bghsiugphin.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708770323/CSI%20Website/Gallery/mhmjejz667eyz9x6gi6k.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708770400/CSI%20Website/Gallery/ofw5hw46ppefq5bu5ep0.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708770474/CSI%20Website/Gallery/bx4laujbxc5ucerhvdhq.jpg",
  ];
  return (
    <ImagesSlider className="sm:h-[40rem] h-[20rem] rounded-2xl" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
  );
}
