from typing import List, Dict
import spacy

class NLPService:
    def __init__(self):
        self.nlp = spacy.load('en_core_web_sm')

    async def analyze_documents(self, doc_ids: List[str]) -> Dict:
        # This is a placeholder for document analysis logic
        return {
            'summary': 'Document analysis summary',
            'entities': [],
            'similarities': {}
        }

    def extract_key_info(self, text: str) -> Dict:
        doc = self.nlp(text)
        
        return {
            'entities': [(ent.text, ent.label_) for ent in doc.ents],
            'keywords': [token.text for token in doc if token.pos_ in ['NOUN', 'PROPN']],
            'sentences': [str(sent) for sent in doc.sents]
        }

nlp_service = NLPService()