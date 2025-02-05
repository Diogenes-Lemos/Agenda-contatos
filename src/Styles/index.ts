import styled, { createGlobalStyle } from 'styled-components';
import WallpaperImg from '../Assets/Images/Wallpaper.jpg';

const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
`;

export const Wallpaper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: url(${WallpaperImg}) no-repeat center center/cover; z-index: -1;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const AppArea = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

export const WorkArea = styled.div`
    display: grid;
    grid-template-columns: 15% 85%;
    width: 100%;
    max-width: 900px;
    height: auto;
    margin: 0 auto;
`


export default EstiloGlobal;
