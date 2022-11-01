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



export const SCROLL_ELEMENT_NAMES = {
    PROJECTS_SECTION: "PROJECTS_SECTION",
    SKILLS_SECTION: "SKILLS_SECTION",
    EXPERIENCE_SECTION: "EXPERIENCE_SECTION",
    ABOUT_SECTION: "ABOUT_SECTION",
    EDUCATION_SECTION: "EDUCATION_SECTION",
    RESUME_SECTION: "RESUME_SECTION",
    EMAIL_SECTION: "EMAIL_SECTION"
}