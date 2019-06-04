import styled from "styled-components"
const baseBgColor = '#ccc'
export const LayoutWrapper = styled.div`

.wrapper{
  height:100vh;
 }

 .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

 .ant-layout{
   height:100%;
 }
 
 .header{
   max-height:10vh;
   display:flex;
   justify-content: flex-end;
   background:${props => props.primary ? "red" : baseBgColor}
 }
 .content{
   min-height:100vh;
   display:flex;
   flex-direction:column;
   background:#fff;
 }
 
 .content .content-bread{
   margin:20px
 }
 
 .content .content-body{
 flex:1
 
 }

`

export default LayoutWrapper



