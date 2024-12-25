import uuid
from typing import Dict, Any
from fastapi import UploadFile
import os

class DocumentService:
    def __init__(self):
        self.documents = {}
        self.upload_dir = "uploads"
        os.makedirs(self.upload_dir, exist_ok=True)

    async def process_document(self, file: UploadFile) -> Dict[str, Any]:
        doc_id = str(uuid.uuid4())
        file_path = os.path.join(self.upload_dir, f"{doc_id}_{file.filename}")

        with open(file_path, 'wb') as out_file:
            content = await file.read()
            out_file.write(content)

        self.documents[doc_id] = {
            'id': doc_id,
            'filename': file.filename,
            'path': file_path,
            'status': 'processing'
        }

        return self.documents[doc_id]

    async def get_document(self, doc_id: str) -> Dict[str, Any]:
        if doc_id not in self.documents:
            raise ValueError(f"Document {doc_id} not found")
        return self.documents[doc_id]

document_service = DocumentService()