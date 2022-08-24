import React from 'react';
import { DetailHeader, DetailHeaderText, ImageWrapper, Image } from "./styles/BlogFourHeader.Styled";
import LeaveButton from './LeaveButton';

const BlogFourHeader = () => {
  return (
    <DetailHeader>

         <ImageWrapper>
             <Image src='img/blog8-img.jpg' alt='computer monitor setup' />
         </ImageWrapper>
         <DetailHeaderText>My Fourth day learning React</DetailHeaderText>
         <LeaveButton />
    
    </DetailHeader>
  );
};

export default BlogFourHeader;