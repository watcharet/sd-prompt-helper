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
            'worst quality',
            'low quality',
            'normal quality',
            'lowres',
            'monochrome',
            'greyscale',
            'blurry',
            'painting',
            'cartoon',
            'draft',
            '3d',
            'ugly',
            'deformed',
            'bad anatomy',
            'bad hands',
            'extra arms',
            'extra fingers',
            'extra limbs',
            'extra legs',
            'poorly drawn hands',
            'missing arms',
            'missing legs',
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

        {/* Other */}
        <Typography id="negative" level="body2" fontWeight="m" mt={2} mb={1}>
          Other
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
            'watermark',
            'text',
            'logo',
            'signature',
            'out of frame'
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