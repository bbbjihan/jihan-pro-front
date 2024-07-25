import localFont from "next/font/local";

export const NotoSans = localFont({
  src: [
    {
      path: "./NotoSans-R.woff2",
      style: "normal",
    },
    {
      path: "./NotoSans-100.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./NotoSans-800.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});
