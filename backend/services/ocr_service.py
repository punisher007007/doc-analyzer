from fastapi import UploadFile
import pytesseract
from PIL import Image
import io

class OCRService:
    async def extract_text(self, file: UploadFile) -> dict:
        content = await file.read()
        image = Image.open(io.BytesIO(content))
        
        try:
            text = pytesseract.image_to_string(image)
            return {
                'text': text,
                'success': True
            }
        except Exception as e:
            return {
                'text': '',
                'success': False,
                'error': str(e)
            }

ocr_service = OCRService()