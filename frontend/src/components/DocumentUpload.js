import React, { useState } from 'react';
import { Paper, Typography, Button, CircularProgress } from '@material-ui/core';
import { CloudUpload } from '@material-ui/icons';

function DocumentUpload() {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      // TODO: Implement file upload logic
      console.log('Uploading file:', file.name);
    } catch (error) {
      console.error('Upload failed:', error);
    }
    setUploading(false);
  };

  return (
    <Paper style={{ padding: 20, margin: 20, textAlign: 'center' }}>
      <input
        accept=".pdf,.doc,.docx,image/*"
        style={{ display: 'none' }}
        id="file-upload"
        type="file"
        onChange={handleFileUpload}
      />
      <label htmlFor="file-upload">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<CloudUpload />}
          disabled={uploading}
        >
          {uploading ? <CircularProgress size={24} /> : 'Upload Document'}
        </Button>
      </label>
    </Paper>
  );
}

export default DocumentUpload;