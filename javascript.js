function generateGrid(n)
{
    const grid = document.querySelector('.grid')

    const squareSize = 100/n

    for (let i=0; i<n; i++)
    {
        for (let j=0; j<n; j++)
        {
            let square = document.createElement('div')
            square.classList.add('square')
            square.style.flex = `0 0 ${squareSize}%`
            grid.appendChild(square)
        }
    }
    
    grid.addEventListener("mouseover", function(e)
    {
        e.target.style.backgroundColor = "red"
    })
}

function deleteGrid()
{
    let grid = document.querySelector('.grid')
    grid.innerHTML = ''
}



generateGrid(16)
let btn = document.querySelector('button')
btn.addEventListener("click", function(e)
{
    let size = prompt("Enter the number of dimesions you'd like (max 100)")
    if (isNaN(size) || size > 100 || size <= 0)
    {
        alert("Please enter a number between 1-100")
        return
    }

    deleteGrid()
    generateGrid(size)

})
