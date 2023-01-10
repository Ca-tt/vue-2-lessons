// Взял туториал отсюда:
// https://www.youtube.com/watch?v=G00V4tRx1ME

// похож на трекер на сайтах, который отслеживает,
// как и что мы смотрим в интернете
// только этот трекает состояние - характеристики - нашего компонента
// к примеру, включён он или выключен, какой у него цвет и т.д
import { useState } from "react";

// эта штука будет вживлять нашу тему везде, где мы скажем ей делать это
import styled, { ThemeProvider } from 'styled-components';

// подгружаем наши кастомные темы
import { lightTheme, darkTheme, GlobalStyles } from './themes.js';


const StyledApp = styled.div`

  color: ${props => props.theme.fontColor}

`;

function App() {

  // функция useState() принимает в себя 2 параметра
  // theme - это переменная, где хранится значение
  // вторая - setTheme, функция, может манипулировать темой
  const [theme, setTheme] = useState("light");

  // проверка на активную тему
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <h1>Hello World</h1>
        <button onClick={ () => themeToggler() }>Change Theme</button>

      </StyledApp>
		</ThemeProvider>
  );
}

export default App;
