import createCache from "@emotion/cache";
import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
    typography: {
       fontFamily: "Archivo"
    },
});


export function createEmotionCache() {
    return createCache({ key: "css", prepend: true });
}
