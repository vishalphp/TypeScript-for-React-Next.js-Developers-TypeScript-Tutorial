type objectData = {
    name: string,
    value: string
}
type dataProps = {
    [key: string]: objectData[]
}

type socialList = {
   facebook?: string,
   twitter?: string,
   instagram?: string,
   gmail?:string
}
type copyrightMessageData = {
    copyrighttext?: string
}
type copyrightDataProps ={
    children?:any,
    social: socialList[],
    textmessage: copyrightMessageData[]
}

export const objectArrayLoop = (data: dataProps) =>{

    let returnValueHtml='';
    const keyData = Object.keys(data);
    keyData.forEach(keyFirst=>{
        returnValueHtml += `<ul class="nollisttype"><li class="firstheading footer-title color_white_font">${keyFirst}</li>`;
        data[keyFirst].forEach(valueData=>{
            returnValueHtml += `<li class="secondvalues"><a href="${valueData.value}" class="color_white_font anchor_font_small" >${valueData.name}</a></li>`;
         });
         returnValueHtml += `</ul>`;
    });

  return returnValueHtml;
}

export const copyRightArrayHtml = (dataCopy: copyrightDataProps) =>{
    let returnHTTML =''; 
    dataCopy.social.forEach((soc, index)=>{
        const [socKey, socVal] = Object.entries(soc)[0];
        let socKeyHtml: any = ''; 
        if(socKey === 'facebook'){ 
             
         }

        returnHTTML += `<div class="socialicon" key={${index}}><a href={${socVal}}>${socKeyHtml}</a></div>`;
    });

    returnHTTML += ``;
    return returnHTTML;
}