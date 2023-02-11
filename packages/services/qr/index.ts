import { create, QRCode, toDataURL, toFile } from "qrcode";

export type { QRCode, QRCodeToDataURLOptions, QRCodeToFileOptions } from "qrcode";
export { toDataURL, toFile };

type CreateQRError = { message: string };
export async function createQRCode(
    data: string
): Promise<{ ok: false; error?: CreateQRError; code?: undefined } | { ok: true; error?: CreateQRError; code: QRCode }> {
    if (typeof window === "undefined") throw new Error("can't build code on the server");
    if (!data) return { ok: false, error: { message: "no data" } };

    const encoder = new TextEncoder();
    const dataEncoded = encoder.encode(data);
    const bytes = dataEncoded.BYTES_PER_ELEMENT * dataEncoded.byteLength;

    if (bytes >= 2953) {
        console.warn(bytes, "qr code data too big -> making smol");
        return { ok: false, error: { message: "data too big" } };
    }

    const code = create(data);

    return { ok: true, code };
}
