from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import uvicorn
from services import document_service, ocr_service, nlp_service

app = FastAPI(title="Document Analyzer API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_document(file: UploadFile = File(...)):
    try:
        result = await document_service.process_document(file)
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/documents/{doc_id}")
async def get_document(doc_id: str):
    try:
        return await document_service.get_document(doc_id)
    except Exception as e:
        raise HTTPException(status_code=404, detail=str(e))

@app.post("/analyze")
async def analyze_documents(doc_ids: List[str]):
    try:
        return await nlp_service.analyze_documents(doc_ids)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)