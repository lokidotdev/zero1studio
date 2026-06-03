"use client";

import dynamic from "next/dynamic";
import SmoothScroll from "@/components/smooth-scroll";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export function DeferredUI() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
    </>
  );
}
