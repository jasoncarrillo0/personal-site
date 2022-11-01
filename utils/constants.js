import createCache from "@emotion/cache";
import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
    typography: {
        fontFamily: ['"Source Sans Pro"', '"sans-serif"'].join(','),
        
    },
    
    palette: { mode: 'dark'},
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    letterSpacing: "0.05em",
                    fontWeight: '500',
                    fontSize: '15px'
                }
            }
        }
    }
});


export function createEmotionCache() {
    return createCache({ key: "css", prepend: true });
}
