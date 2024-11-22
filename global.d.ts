declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

interface ImportMetaEnv {
    readonly VITE_GITHUB_CLIENT_ID: string;
    readonly VITE_GITHUB_CLIENT_SECRET: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}