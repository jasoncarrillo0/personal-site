import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import App from "../components/App";
import '../styles/globals.css';
import { createEmotionCache, theme } from "../utils/constants";

const clientSideEmotionCache = createEmotionCache();
function MyApp({ Component, emotionCache=clientSideEmotionCache, pageProps }) {
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App {...pageProps}/>
            </ThemeProvider>
        </CacheProvider>
        
    );
}

export default MyApp;