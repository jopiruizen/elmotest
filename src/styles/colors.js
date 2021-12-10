
 
 export const typography = {
     main: '#000000',
 };
 
 export const brand = {
    primary: '#04146A',
    white: '#FFFFFF',
 }


 export const backgrounds = { 
     headings: '#030A31',
     background: '#F2F3F9',
 };
 
 export const withOpacity = (hexCode, opacity) => {
     const rgb = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexCode);
     if (!rgb) {
       return '';
     }
     return `rgba(${parseInt(rgb[1], 16)}, ${parseInt(rgb[2], 16)}, ${parseInt(rgb[3], 16)}, ${opacity})`;
 };
 
 
 export const  buttons = {
     primary: '#04146A',
     primaryHover: '#878EB3',
     primaryDisable: '#E4E4E4',
     
     secondary: '#04146A',
     secondaryHover: '#878EB3',
     secondaryDisable: '#D5D8E9',
 };
  

const colors =  {
    brand,
    typography,
    buttons,
};

export default colors;
