let drawColor = '#EA3546';

const createGrid = () => {
    const numInput = prompt('How many squares per side?');
    const numOfSquares = numInput * numInput;
    const container = document.getElementById('container');
	
    container.innerHTML = '';

    container.style.cssText = `
        grid-template-columns: repeat(${numInput}, 1fr);
        grid-template-rows: repeat(${numInput}, 1fr);
    `;
	
    for (i=0; i<numOfSquares; i++) {
        const square = document.createElement('div')
        square.classList.add('pixel');
        square.setAttribute('onmouseover', 'draw(this)');
        container.appendChild(square);
    }
}

// const createGrid = num => {
// 	const numOfSquares = num * num;
// 	const container = document.getElementById('container');
	
// 	container.style.cssText = `
// 		grid-template-columns: repeat(${num}, 1fr);
// 		grid-template-rows: repeat(${num}, 1fr);
// 	`;
	
// 	for (i=0; i<numOfSquares; i++) {
// 		const square = document.createElement('div')
// 		square.classList.add('pixel');
// 		square.setAttribute('onmouseover', 'draw(this)');
// 		container.appendChild(square);
// 	}
// }

const color = color => {
	switch(color){
		case 'red':
			drawColor = '#EA3546;'
			break;
		case 'orange':
			drawColor = '#F86624;'
			break;
		case 'yellow':
			drawColor = '#F9C80E;'
			break;
		case 'green':
			drawColor = '#64C956;'
			break;
		case 'blue':
			drawColor = '#1BE0FA;'
			break;
		case 'purple':
			drawColor = '#662E9B;'
			break;
		default:
			break;
	}
}

const draw = (x) => {
	x.style.cssText = `background-color: ${drawColor};`;
}

createGrid();