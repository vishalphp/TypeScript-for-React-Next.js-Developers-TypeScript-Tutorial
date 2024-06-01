type objectData = {
    name: string,
    value: string
}
type dataProps = {
    [key: string]: objectData[]
}
export const objectArrayLoop = (data: dataProps) =>{

    let returnValueHtml='';
    const keyData = Object.keys(data);
    keyData.forEach(keyFirst=>{
        returnValueHtml += `<ul><li class="firstheading">${keyFirst}</li>`;
        data[keyFirst].forEach(valueData=>{
            returnValueHtml += `<li class="secondvalues"><a href="${valueData.value}" >${valueData.name}</a></li>`;
         });
         returnValueHtml += `</ul>`
    });

  return returnValueHtml;
}