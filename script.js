// Define the function checkSize with one parameter: fileSize
function checkSize(fileSize) {
    // Define a constant maxSize with a value of 5
    const maxSize = 5;
    
    // Define a constant minSize with a value of 1
    const minSize = 1;
    
    // Print the string "Upload Permitted?" to the console
    console.log("Upload Permitted?");
    
    // Check if fileSize is greater than maxSize
    // Store the result (true or false) in the variable overMaxSize
    const overMaxSize = fileSize > maxSize;
    
    // Print whether the file is too large
    // The ${overMaxSize} is a placeholder that gets replaced with the value of overMaxSize
    console.log(`The file is too large: ${overMaxSize}`);
    
    // Check if fileSize is less than minSize
    // Store the result (true or false) in the variable underMinSize
    const underMinSize = fileSize < minSize;
    
    // Print whether the file is too small
    // The ${underMinSize} is a placeholder that gets replaced with the value of underMinSize
    console.log(`The file is too small: ${underMinSize}`);
  }
  
  // Call the checkSize function with the argument 7
  // Inside the function, fileSize will be 7
  checkSize(7);
  
  // Expected output:
  // Upload Permitted?
  // The file is too large: true
  // The file is too small: false
  