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
        returnValueHtml += `<ul class="nollisttype"><li class="firstheading footer-title color_white_font">${keyFirst}</li>`;
        data[keyFirst].forEach(valueData=>{
            returnValueHtml += `<li class="secondvalues"><a href="${valueData.value}" class="color_white_font anchor_font_small" >${valueData.name}</a></li>`;
         });
         returnValueHtml += `</ul>`
    });

  return returnValueHtml;
}