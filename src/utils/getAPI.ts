export type FetchedData = {
    name?: string;
    manufacturer?: string;
};

export type GetAPIDataProps = {
    apiURL: string;
};

export type GetAPIDataResponse = {
    results: FetchedData[];
}

export const getAPIData = async({apiURL}:GetAPIDataProps): Promise<GetAPIDataResponse>=>{
    const result = await fetch(apiURL);
    if (!result.ok) {
        throw new Error('Network response was not ok');
      }
    const  data:GetAPIDataResponse = await result.json();
   return data;
}