import styled from "styled-components"
export const UserWrapper=styled.div.attrs(({allColor})=>({

baseColor:allColor.Color,  
baseBgColor:allColor.BgColor

}))`
padding:10px;
font-size:30px;
& .active{
  color:${props=>props.primary?"blue":"green"};
  background:${props=>props.baseBgColor}
}
&:hover{color:pink;}
`

