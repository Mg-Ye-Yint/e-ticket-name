export async function translateChineseToThai(text: string): Promise<string> {
    try {
        const response = await fetch('https://libretranslate.com/translate', {
            method: 'POST',
            body: JSON.stringify({
                q: text,
                source: 'zh-CN',
                target: 'th'
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            throw new Error('Translation failed');
        }

        const data = await response.json();
        return data.translatedText;
    } catch (error) {
        console.error('Translation error:', error);
        return 'Translation failed';
    }
}

