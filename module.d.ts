declare namespace NodeJS {
    interface ProcessEnv {
        NEXTAUTH_URL: string
        NEXTAUTH_SECRET: string
        MANAGEMENT_API_URL: string
    }
}