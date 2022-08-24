import React from 'react';
import { DetailHeader, DetailHeaderText, ImageWrapper, Image } from "./styles/BlogOneHeader.Styled";
import LeaveButton from './LeaveButton';

const BlogOneHeader = () => {
  return (
    <DetailHeader>

         <ImageWrapper>
           <Image src='img/blog6-img.webp' alt='computer monitor setup' />
         </ImageWrapper>
         <DetailHeaderText>My first day learning React</DetailHeaderText>
         <LeaveButton />
    
    </DetailHeader>
  )
}

export default BlogOneHeader;