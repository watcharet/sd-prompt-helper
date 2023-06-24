import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppPos from './AppPos';
import reportWebVitals from './reportWebVitals';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Box sx={{ mt: '1rem', pl: '2rem', pr: '2rem'}}>
      <Typography variant="h1" component="h1" mt={2}>
        Stable Diffution Prompt Helper
      </Typography>
      <Typography variant="body2" mt={0}>
      Welcome to Stable Diffusion Prompt Helper, your ultimate companion for navigating the world of stable diffusion prompts!
      </Typography>
    </Box>
    
    <Box sx={{ display: 'flex', mt: '1rem', pl: '1rem', pr: '1rem' }}>
      {/* First column */}
      <Box sx={{ flex: 1, padding: '12px' }}>
      <Typography id="negative" level="body1" fontWeight="lg" mb={1}>
          Positive Prompts
      </Typography>
        <AppPos />
      </Box>

      {/* Second column */}
      <Box sx={{ flex: 1, padding: '12px' }}>
        <Typography id="negative" level="body1" fontWeight="lg" mb={1}>
          Negative Prompts
        </Typography>
        <App />
      </Box>
    </Box>

    <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px', marginTop: '60px' }}>
      <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px', marginTop: 'auto' }}>
        <Typography variant="body1" align="center" color="textSecondary">
          Made with ❤
        </Typography>
        <Typography variant="body2" align="center">
          Thank you
          <br></br>
          <Link 
            href='https://bootcamp.uxdesign.cc/30-prompts-to-create-a-beautiful-girl-in-stable-diffusion-290dc312b3fc'
            underline="none"
            variant="soft"
            color="info" 
            target="_blank"
            sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1, mr: 1 }}
            >
              uxdesign
          </Link>
          <Link 
            href='https://www.greataiprompts.com/imageprompt/what-is-negative-prompt-in-stable-diffusion/#Universal_Negative_Prompt_List_For_Stable_Diffusion'
            underline="none"
            variant="soft"
            color="info" 
            target="_blank"
            rel="noreferrer"
            sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1, mr: 1 }}
            >
              greataiprompts
          </Link>
          <Link 
            href='https://openai.com/blog/chatgpt'
            underline="none"
            variant="soft"
            color="info" 
            target="_blank"
            rel="noreferrer"
            sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1, mr: 1 }}
            >
              openai
          </Link>
          <Link 
            href='https://civitai.com'
            underline="none"
            variant="soft"
            color="info" 
            target="_blank"
            rel="noreferrer"
            sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1, mr: 1 }}
            >
              civitai
          </Link>
          <Link 
            href='https://mui.com/'
            underline="none"
            variant="soft"
            color="info" 
            target="_blank"
            rel="noreferrer"
            sx={{ '--Link-gap': '0.5rem', pr: 1, pl: 1, mr: 1 }}
            >
              mui
          </Link>
        </Typography>
      </Box>
      <Typography sx={{ mt: 1, maxWidth: 50 }} level="body3" variant="soft">Alpha-1</Typography>
    </Box>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
