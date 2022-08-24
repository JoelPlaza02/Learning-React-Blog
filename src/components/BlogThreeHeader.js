import React from 'react';
import { DetailHeader, DetailHeaderText, ImageWrapper, Image } from "./styles/BlogOneHeader.Styled";
import LeaveButton from './LeaveButton';

const BlogTwoHeader = () => {
  return (
    <DetailHeader>

         <ImageWrapper>
           <Image src='img/blog3-img.jpg' alt='computer monitor setup' />
         </ImageWrapper>
         <DetailHeaderText>My Third day learning React</DetailHeaderText>
         <LeaveButton />
    
    </DetailHeader>
  );
};

export default BlogTwoHeader;