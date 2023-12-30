/// <reference types="vite/client"/>
export interface ImportMetaEnv {
    readonly VITE_PORT: string;
}

export interface ImportMeta {
    readonly env: ImportMetaEnv;
}
