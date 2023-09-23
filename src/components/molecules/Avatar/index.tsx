import { Box, Typography, Link } from "@mui/material";
import React from "react";
import Image from "next/image";

interface IndexProps {
  src?: string;
  expand?: boolean;
  imgSize?: string;
}

export default function Index({ src, expand, imgSize }: IndexProps) {
  const defaultSize = {
    height: expand ? "50px" : "30px",
    width: expand ? "50px" : "30px",
  };

  const size = imgSize ? { width: imgSize, height: imgSize } : defaultSize;

  return (
    <Link href="/profile">
      <Box display="flex" sx={expand ? { padding: 2, gap: 2 } : {}}>
        <Image
          alt=""
          src={src || "/simaa.jpeg"}
          style={{ borderRadius: "50%", ...size }}
          width={100}
          height={100}
        />
        {expand && (
          <Box>
            <Typography
              variant="h6"
              fontSize={"15px"}
              children={"Simaa Abumousa"}
            />
            <Typography
              variant="body2"
              fontSize={"12px"}
              children={"Freelancer"}
            />
          </Box>
        )}
      </Box>
    </Link>
  );
}
