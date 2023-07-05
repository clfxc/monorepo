export enum StateStatus {
    idle = "idle",
    loading = "loading",
    failed = "failed",
}

export enum URLS {
    // WEBSITE
    HOME = "/",
    REPLACE = "/replace",
    SMOL = "/s",
    QR = "/qr",
    CLOSET = "/closet",
    BLOG = "/blog",

    // API
    API_AUTH = "/api/auth",
    API_SMOL = "/api/smol",
    API_SMOL_CREATE = `${URLS.API_SMOL}/create`,
    API_QR_CREATE = "/api/qr/create",
}

export enum Langs {
    en = "en",
    ro = "ro",
}

export enum Currency {
    RON = "RON",
    EUR = "EUR",
    USD = "USD",
}

export enum AuthProvider {
    GITHUB = "github",
    DISCORD = "discord",
    TWITTER = "twitter",
}

export enum PaymentProvider {
    STRIPE = "stripe",
    PAYPAL = "paypal",
}

export enum AccountType {
    admin = "admin",
    standard = "standard",
    member = "member",
    premium = "premium",
}

export enum Storage {
    qrInput = "kdv-qr-input",
    qrMargin = "kdv-qr-margin",
    qrPatternColor = "kdv-qr-dark",
    qrBackgroundColor = "kdv-qr-light",
}

export enum ImageType {
    png = "image/png",
    jpeg = "image/jpeg",
    jpg = "image/jpg",
    svg = "image/svg",
    gif = "image/gif",
    webp = "image/webp",
}

export enum FileType {
    pdf = "application/pdf",
    ppt = "application/vnd.ms-powerpoint",
    pptx = "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    msword = "application/msword",
    mswordx = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    text = "text/plain",
    mp4 = "video/mp4",
    mp3 = "audio/mpeg",
    mpeg = "video/mpeg",
    json = "application/json",
    webm = "video/webm",
}

// HEAD
export enum TITLE {
    HOME = "Home",
}

export enum DESCRIPTION {
    HOME = "Description",
}

export enum OG_DESCRIPTION {
    HOME = "Description",
}

export enum OG_TITLE {
    HOME = "Home",
}

export enum KEYWORDS {
    HOME = "home",
}
