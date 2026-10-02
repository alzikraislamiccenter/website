"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
import AnimatedArrow from "./AnimatedArrow";

export default function GoBackButton() {
  const router = useRouter();
  return <Button onClick={() => window.history.length > 1 ? router.back() : router.push("/")}>Go Back <AnimatedArrow /></Button>;
}
