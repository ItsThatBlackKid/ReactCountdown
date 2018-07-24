export function getContrast(hexcolor){
    return (parseInt(hexcolor, 16) > 0xffffff/2) ? '#000':'#fff';
}