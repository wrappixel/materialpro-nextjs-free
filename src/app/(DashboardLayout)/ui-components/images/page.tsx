'use client';
import { Grid, ImageList, ImageListItem,Paper} from "@mui/material";
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import Image from "next/image";

import img1 from "public/images/backgrounds/blog-img2.jpg";
import img2 from "public/images/backgrounds/blog-img3.jpg";
import img3 from "public/images/backgrounds/blog-img4.jpg";
import img4 from "public/images/backgrounds/blog-img5.jpg";
import img5 from "public/images/backgrounds/blog-img6.jpg";
import img6 from "public/images/backgrounds/blog-img10.jpg";
import img7 from "public/images/backgrounds/blog-img1.jpg";
const itemData = [
  {
    img: img1 ,
    rows: 2,
    cols: 2,
  },
  {
    img: img2 ,
    title: "Burger",
  },
  {
    img: img3 ,
  },
  {
    img:img2,
    cols: 2,
  },
  {
    img: img4,
    cols: 2,
    rows: 2,
  },
  {
    img: img3,
    cols: 2,
    rows: 2,
  },
  
  {
    img: img6,
  },
  {
    img: img5,
    title: "Fern",
  },
  {
    img: img7,
    rows: 2,
    cols: 2,
  },
  {
    img:img2,
    cols: 2,
  },

];
const Images = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Grid Image">
          <ImageList
            
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((itemimg,index) => (
              <ImageListItem
                key={index}
                cols={itemimg.cols || 1}
                rows={itemimg.rows || 1}
              >
                <Image
                  src={itemimg.img}
                  alt="img"
                  style={{ width: "100%",height:"100%",objectFit:"cover",objectPosition:"top"}}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Images;
