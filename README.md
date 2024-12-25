# Document Analyzer

A comprehensive document analysis tool that provides OCR, text extraction, and document summarization capabilities.

## Features

- PDF document processing
- OCR for image-based documents
- Text extraction and analysis
- Document summarization
- Multi-document comparison
- Key information extraction

## Tech Stack

### Frontend
- React
- PDF.js for PDF rendering
- Material-UI for components
- Redux for state management

### Backend
- Python
- FastAPI
- Tesseract OCR
- spaCy for NLP
- PyTorch for ML models

## Getting Started

### Prerequisites
- Node.js >= 14
- Python >= 3.8
- Tesseract OCR

### Installation

1. Clone the repository
```bash
git clone https://github.com/punisher007007/doc-analyzer.git
cd doc-analyzer
```

2. Install frontend dependencies
```bash
cd frontend
npm install
```

3. Install backend dependencies
```bash
cd ../backend
pip install -r requirements.txt
```

4. Start the development servers

Frontend:
```bash
cd frontend
npm start
```

Backend:
```bash
cd backend
python main.py
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.