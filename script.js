function handleClick(){
    console.log("Button Clicked!")
     const container = document.getElementById("container");

    const p = document.createElement('p');
    p.innerText = "Show only when btn is clicked!"
    container.appendChild(p);

}