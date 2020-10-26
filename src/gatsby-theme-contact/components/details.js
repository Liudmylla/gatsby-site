import React from 'react'
import { jsx, Styled } from 'theme-ui'

const Details = () => (
    <>
        <Styled.h3 sx={{ mt: 0 }}>Address</Styled.h3>
        <span>
            Marina Marishkette
     <br />
     
     
      Biarritz, France
   </span>

        <Styled.h3>Phone</Styled.h3>
        <span>(357) 616-5411</span>

        <Styled.h3>Email</Styled.h3>
        <span>
            <Styled.a href='mailto:email@example.com'>email@example.com</Styled.a>
        </span>
    </>
)

export default Details