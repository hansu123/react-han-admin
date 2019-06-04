#styled-components

样式组件名必须大写

###基本API

####1.变量

```javascript
// import styled from 'styled-components'

const padding = '3em'

const Section = styled.section`
  color: white;

  /* Pass variables as inputs */
  padding: ${padding};

  /* Adjust the background from the properties */
  background: ${props => props.background};
`

render(
  <Section background="cornflowerblue">
    ✨ Magic
  </Section>
)
```

####2.普通传值

样式化组件可以传递一个值，在样式表中根据传入的值来改变它的样式。

ex:

```js
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

####3.属性传值

有时候我们需要改变一些标签内部的属性，如input，image

```js
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

render(
  <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>
);
```

####4.继承（类似sass中的@extend）

```js
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);
```

####5.嵌套规则

：代表当前元素

```js
const Thing = styled.button`
  color: blue;

  :hover {
    color: red;
  }
  
render(
  <Thing>Hello world!</Thing>
)
```

& 代表父级元素

```js
const Thing = styled.div.attrs({ tabIndex: 0 })`
  color: blue;
  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`
render(
  <React.Fragment>
    <Thing className="something">The sun is shining...</Thing>
    <div className="something-else">
      <Thing>Splendid.</Thing>
    </div>
  </React.Fragment>
)
```

####6.传参

插件可以灵活到我们传递参数来改变样式，真正做到js与css无缝连接

组件js

```js
class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allColor: {
        Color:"pink",
        BgColor:"#ccc"
      }
    };
  }
  render() {
    return (
      <UserWrapper allColor={this.state.allColor}>
        <p className="active">sss</p>
      </UserWrapper>
    );
  }
}
```

样式js

```js
import styled from "styled-components"
export const UserWrapper=styled.div.attrs(({allColor})=>({

baseColor:allColor.Color,  
baseBgColor:allColor.BgColor

}))`
width:100px;
height:100px;
font-size:30px;
& .active{
  color:${props=>props.baseColor};
  background:${props=>props.baseBgColor}
}
&:hover{color:pink;}
`
```

这样我们就可以自由控制样式的颜色，如同ui组件一般传递相应参数，获得相应的组件。

####7.动画