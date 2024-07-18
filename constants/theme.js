export const COLORS = {
    color1: "#FFF5E1",
    color2: "#FF6969",
    color3: "#C80036",
    color4: "#0C1844",
    colorBlanco: "#FFFFFF",
    colorNegro: "#000000",
    colorGrisClaro: "#CCCCCC",
    colorGrisOscuro: "#333333",
}

export const SIZES = {
    small: 4, 
    base: 8,
    medio: 16, 
    large: 32,
    h1: 36,
    h2: 24,
    h3: 18,
    body1: 18,
    body2: 16,
    enorme: 96,
}

export const FONTS = {
    h1: {fontFamily: 'black', fontSize: SIZES.h1},
    h2: {fontFamily: 'bold', fontSize: SIZES.h2},
    h3: {fontFamily: 'bold', fontSize: SIZES.h3},
    enorme: {fontFamily: 'extraLight', fontSize: SIZES.enorme},
    body1: {fontFamily: 'regular', fontSize: SIZES.body1},
    body2: {fontFamily: 'regular', fontSize: SIZES.body2},

}

const appTheme = { COLORS, SIZES, FONTS}
export default appTheme