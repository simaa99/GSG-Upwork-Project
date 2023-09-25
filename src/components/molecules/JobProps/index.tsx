import React from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image'; 
import PriceTagIcon from 'public/PriceTagIcon.svg';
import IntelligenceIcon from 'public/IntelligenceIcon.svg';
import ContractIcon from 'public/contract-24.png';
import CalendarIcon from 'public/CalendarIcon.svg';
import FeaturedIcon from 'public/featured-30.png';
import TimeIcon from 'public/time-30.png';
import TimerIcon from 'public/timer.png';
import { LightTooltip } from './_document';

interface Props {
  icon: string;
  text?: string;
  subText?: string;
  alt: string;
}

const Index: React.FC<Props> = ({ icon, text, subText, alt }) => {
  const imgSrc: Record<string, string> = {
    FixedPrice: PriceTagIcon,
    Hourly: IntelligenceIcon,
    Contract: IntelligenceIcon,
    Calendar: CalendarIcon,
    Featured: IntelligenceIcon,
    Time: IntelligenceIcon,
    Timer: IntelligenceIcon,
  };

  return (
    <LightTooltip title={alt} placement="top-start">
      <Grid container item gap={1} sm={4}>
        <Grid width="fit-content" container item sm={2}>
          
          <Image
            src={imgSrc[icon]}
            alt=""
            width={20}
            height={20} 
          />
        </Grid>
        <Grid container direction="column" item sm={5} width="fit-content">
          <Typography fontSize="15px" children={text || "text"} />
          <Typography fontSize="12px" color="GrayText" children={subText || "sub text"} />
        </Grid>
      </Grid>
    </LightTooltip>
  );
};

export default Index;
