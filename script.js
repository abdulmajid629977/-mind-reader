document.getElementById('numberInput').addEventListener('input', function() {
    const input = this;
    const value = parseInt(input.value, 10);

    // Check if the value exceeds 10
    if (value > 10) {
        input.value = 10; // Set the value to 10 if it exceeds the limit
    }
});

document.getElementById('readMindButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    
    // Validate the input
    if (!numberInput || numberInput < 1 || numberInput > 10) { // Adjusted max value to 10
        alert("Please enter a valid number between 1 and 10.");
        return;
    }
    
    // Hide the result container if it was previously shown
    document.getElementById('resultContainer').classList.add('hidden');
    
    // Show the progress bar and status
    document.getElementById('progressContainer').classList.remove('hidden');
    const progressBar = document.getElementById('progressBar');
    const statusText = document.getElementById('statusText');
    
    const stages = [
        "Analyzing brain waves...",
        "Scanning memories...",
        "Calculating probabilities...",
        "Decoding thoughts..."
    ];
    
    let progress = 0;
    let stageIndex = 0;
    const duration = 5000; // Total duration of the progress (5 seconds)
    const intervalTime = 50; // Interval between progress updates (50 ms)
    const totalSteps = duration / intervalTime; // Total steps for progress bar
    
    const interval = setInterval(function() {
        progress += 100 / totalSteps;
        progressBar.style.width = progress + "%";
        
        // Update the status text at specific progress percentages
        if (progress >= 0 && progress < 25) {
            statusText.textContent = stages[0]; // "Analyzing brain waves..."
        } else if (progress >= 25 && progress < 50) {
            statusText.textContent = stages[1]; // "Scanning memories..."
        } else if (progress >= 50 && progress < 75) {
            statusText.textContent = stages[2]; // "Calculating probabilities..."
        } else if (progress >= 75 && progress <= 100) {
            statusText.textContent = stages[3]; // "Decoding thoughts..."
        }
        
        // When progress reaches 100%, stop the interval and show the result immediately
        if (progress >= 100) {
            clearInterval(interval);
            
            // Hide the progress bar
            document.getElementById('progressContainer').classList.add('hidden');
            
            // Show result immediately after progress reaches 100%
            document.getElementById('resultText').textContent = `You were thinking of the number: ${numberInput}!`;
            document.getElementById('resultContainer').classList.remove('hidden');
        }
    }, intervalTime);
});