window.addEventListener('DOMContentLoaded', () => {
  const chessboard = document.getElementById('chessboard');
  const blocks = [];

  // Create the chessboard
  for (let i = 0; i < 64; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    blocks.push(block);
    chessboard.appendChild(block);

    // Add event listener for click event
    block.addEventListener('click', () => {
      highlightDiagonals(block, blocks);
    });
  }

  // Function to highlight diagonals
  function highlightDiagonals(clickedBlock, allBlocks) {
    const row = Math.floor(allBlocks.indexOf(clickedBlock) / 8);
    const col = allBlocks.indexOf(clickedBlock) % 8;

    // Clear previous highlights
    allBlocks.forEach(block => {
      block.classList.remove('highlighted');
    });

    // Highlight diagonals
    for (let i = 0; i < 8; i++) {
      const diagonalBlock1 = allBlocks[row * 8 + i];
      const diagonalBlock2 = allBlocks[i * 8 + col];
      diagonalBlock1.classList.add('highlighted');
      diagonalBlock2.classList.add('highlighted');
    }
  }
});
