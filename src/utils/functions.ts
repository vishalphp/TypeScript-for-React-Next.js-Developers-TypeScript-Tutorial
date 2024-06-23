import React from "react";

type objectData = {
    name: string,
    value: string
}
type dataProps = {
    [key: string]: objectData[]
}

type socialList ={
   facebook?:  string,
   twitter?: string,
   instagram?: string,
   gmail?:string
}
type copyrightMessageData = {
    copyrighttext?: string
}
export type copyrightDataProps = {
    children?: React.ReactNode,
    social: socialList[],
    textmessage: copyrightMessageData[],
}


export const copySocialArray = (dataCopy: copyrightDataProps) =>{

   return dataCopy.social.map((soc)=>{
            const [socKey, socVal] = Object.entries(soc)[0];
            //let socKeyHtml: React.ReactNode = null;
            return {"name":socKey, "val":socVal};
        });
//return socialElements;
}

export const copyrightMessageArray = (dataCopy: copyrightDataProps) =>{

    return dataCopy.textmessage.map((textmessage)=>{
             const [socKey, socVal] = Object.entries(textmessage)[0];
             //let socKeyHtml: React.ReactNode = null;
             return {"name":socKey, "val":socVal};
         });
 //return socialElements;
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

