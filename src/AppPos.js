import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/joy/Typography';

export default function IconlessCheckbox() {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [textareaValue, setTextareaValue] = React.useState('');
  const [checkedItems, setCheckedItems] = React.useState({});

  const textareaRef = React.useRef(null);

  const handleCheckboxChange = (item) => {
    const selectedIndex = selectedItems.indexOf(item);
    let newSelectedItems = [];
    let newCheckedItems = { ...checkedItems }; // Create a copy of the checkedItems object
  
    if (selectedIndex === -1) {
      newSelectedItems = [...selectedItems, item];
      newCheckedItems[item] = true; // Check the newly selected item
    } else {
      newSelectedItems = selectedItems.filter(
        (selectedItem) => selectedItem !== item
      );
      newCheckedItems[item] = false; // Uncheck the deselected item
    }
  
    setSelectedItems(newSelectedItems);
    setTextareaValue(newSelectedItems.join(', '));
    setCheckedItems(newCheckedItems); // Update the checkedItems state
  };
  
  const handleClearAll = () => {
    setSelectedItems([]);
    setTextareaValue('');
    setCheckedItems({}); // Clear the checkedItems state
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(textareaValue)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Failed to copy text:', error);
      });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 2 }}>
        <Textarea
          ref={textareaRef}
          value={textareaValue}
          minRows={2}
          startDecorator={
            <Box sx={{ display: 'flex', ml: 'auto', gap: 0.5 }}>
              <IconButton 
                variant="outlined" 
                color="neutral" 
                onClick={handleCopyToClipboard} 
                aria-label="Copy to clipboard"
              >
                <FileCopyIcon />
              </IconButton>
              <IconButton 
                variant="outlined" 
                color="neutral" 
                onClick={handleClearAll} 
                aria-label="ClearAll"
              >
                <ClearIcon />
              </IconButton>
            </Box>
          }
          endDecorator={
            <Typography level="body3" sx={{ ml: 'auto', opacity: 0.8 }}>
              Character Length: {textareaValue.length}
            </Typography>
          }
          sx={{ width: '100%'}}
        />
      </Box>

      <Box role="group" aria-labelledby="negative">

        {/* Universal */}
        <Typography id="negative" level="body2" fontWeight="m" mb={1}>
          Universal
        </Typography>
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '8px',
            '--ListItem-radius': '20px',
          }}
        >
          {[
            'masterpiece',
            'best quality',
            'high resolution',
            '8k',
            'HDR',
          ].map((item, index) => (
            <ListItem key={item}>
              <Checkbox
                size="sm"
                overlay
                disableIcon
                variant="soft"
                label={item.charAt(0).toLocaleUpperCase() + item.slice(1).toLocaleLowerCase()}
                onChange={() => handleCheckboxChange(item)}
                checked={checkedItems[item] || false}
              />
            </ListItem>
          ))}
        </List>

        {/* Objective */}
        <Typography id="negative" level="body2" fontWeight="m" mt={2} mb={1}>
            Objective
        </Typography>
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '8px',
            '--ListItem-radius': '20px',
          }}
        >
          {[
            'beautiful girl',
            'detailed hair',
            'beautiful face',
            'ultra detailed eyes',
            'hyperdetailed',
            'outdoors',
            'looking at viewer',
          ].map((item, index) => (
            <ListItem key={item}>
              <Checkbox
                size="sm"
                overlay
                disableIcon
                variant="soft"
                label={item.charAt(0).toLocaleUpperCase() + item.slice(1).toLocaleLowerCase()}
                onChange={() => handleCheckboxChange(item)}
                checked={checkedItems[item] || false}
              />
            </ListItem>
          ))}
        </List>


        {/* Lighting */}
        <Typography id="negative" level="body2" fontWeight="m" mt={2} mb={1}>
          Lighting
        </Typography>
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '8px',
            '--ListItem-radius': '20px',
          }}
        >
          {[
            'bloom',
            'cinematic lighting',
            'soft lighting',
            'hard lighting',
            'backlight',
            'god rays',
            'columetic lighting',
            'sun light',
            'studio light',
            'bioluminescent light',
            'detailed shadows',
            'intricate tree shadows',
            'ray tracing',
          ].map((item, index) => (
            <ListItem key={item}>
              <Checkbox
                size="sm"
                overlay
                disableIcon
                variant="soft"
                label={item.charAt(0).toLocaleUpperCase() + item.slice(1).toLocaleLowerCase()}
                onChange={() => handleCheckboxChange(item)}
                checked={checkedItems[item] || false}
              />
            </ListItem>
          ))}
        </List>

        {/* Effects */}
        <Typography id="negative" level="body2" fontWeight="m" mt={2} mb={1}>
          Effects
        </Typography>
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '8px',
            '--ListItem-radius': '20px',
          }}
        >
          {[
            'boken',
            'depth of field',
            'film photography',
            'film grain',
            'glare',
            'wind',
          ].map((item, index) => (
            <ListItem key={item}>
              <Checkbox
                size="sm"
                overlay
                disableIcon
                variant="soft"
                label={item.charAt(0).toLocaleUpperCase() + item.slice(1).toLocaleLowerCase()}
                onChange={() => handleCheckboxChange(item)}
                checked={checkedItems[item] || false}
              />
            </ListItem>
          ))}
        </List>

        {/* Camera */}
        <Typography id="negative" level="body2" fontWeight="m" mt={2} mb={1}>
          Camera
        </Typography>
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '8px',
            '--ListItem-radius': '20px',
          }}
        >
          {[
            'close-up',
            'extreme close-up',
            'medium close-up',
            'medium shot',
            'long shot',
            'medium full shot',
            'full shot',
            'establishing shot',
            'point-of-view',
            'cowboy shot',
            'upper body',
            'full body',
            'front view',
            'side view',
            'back view',
            'from behind',
            'from above',
            'from below',
            'straight on',
            'bilateral symmetry',
            'overhead shot',
            'high angle',
            'slightly above',
            'wide angle',
            'macro view',
            'birds eye view',
            'top down',
            'hero view',
            'low view',
            'selfie',
          ].map((item, index) => (
            <ListItem key={item}>
              <Checkbox
                size="sm"
                overlay
                disableIcon
                variant="soft"
                label={item.charAt(0).toLocaleUpperCase() + item.slice(1).toLocaleLowerCase()}
                onChange={() => handleCheckboxChange(item)}
                checked={checkedItems[item] || false}
              />
            </ListItem>
          ))}
        </List>

      </Box>
      
    </Box>
  );
}