import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Use the access key from environment variables
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            return NextResponse.json(
                { success: false, message: "WEB3FORMS_ACCESS_KEY is not set in environment variables" },
                { status: 500 }
            );
        }

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "User-Agent": request.headers.get("User-Agent") || "Mozilla/5.0",
                Origin: request.headers.get("Origin") || "http://localhost:3000"
            },
            body: JSON.stringify({
                access_key: accessKey,
                ...data,
            }),
        });

        // Check if the response is actually JSON and successful
        const contentType = response.headers.get("content-type");
        if (!response.ok || !contentType?.includes("application/json")) {
            const errorText = await response.text();
            console.error("Web3Forms API Error:", response.status, errorText);
            return NextResponse.json(
                { success: false, message: `API Error ${response.status}: ${errorText.substring(0, 50)}...` },
                { status: response.status }
            );
        }

        const result = await response.json();
        return NextResponse.json(result);
    } catch (error: any) {
        console.error("Contact API Critical Error:", error.message || error);
        return NextResponse.json(
            { success: false, message: error.message || "Failed to send message" },
            { status: 500 }
        );
    }
}
