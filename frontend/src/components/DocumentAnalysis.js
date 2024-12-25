import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Typography, CircularProgress } from '@material-ui/core';

function DocumentAnalysis() {
  const { id } = useParams();
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        // TODO: Implement API call to fetch analysis
        setAnalysis({
          text: 'Sample extracted text',
          summary: 'Document summary will appear here',
          entities: ['Sample Entity 1', 'Sample Entity 2']
        });
      } catch (error) {
        console.error('Failed to fetch analysis:', error);
      }
      setLoading(false);
    };

    fetchAnalysis();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Paper style={{ padding: 20, margin: 20 }}>
      <Typography variant="h5" gutterBottom>
        Document Analysis
      </Typography>
      <Typography variant="h6">Summary</Typography>
      <Typography paragraph>{analysis?.summary}</Typography>
      
      <Typography variant="h6">Extracted Text</Typography>
      <Typography paragraph>{analysis?.text}</Typography>
      
      <Typography variant="h6">Key Entities</Typography>
      <ul>
        {analysis?.entities.map((entity, index) => (
          <li key={index}>{entity}</li>
        ))}
      </ul>
    </Paper>
  );
}

export default DocumentAnalysis;