function createParagraph()
{
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const para4 = document.createElement("p");
    para.textContent = "I once felt uninspired";
    para1.textContent = "But my brain got rewired";
    para2.textContent = "My code is pristine other peoples are lackluster";
    para3.textContent = "When my project is complete it never lacks luster";
    para4.textContent = "People would pay to see my work at the Blockbuster";
    document.body.appendChild(para);
    document.body.appendChild(para1);
    document.body.appendChild(para2);
    document.body.appendChild(para3);
    document.body.appendChild(para4);
}

const buttons = document.querySelectorAll(`button`);

for (const button of buttons) 
{
    button.addEventListener("click", createParagraph);
}