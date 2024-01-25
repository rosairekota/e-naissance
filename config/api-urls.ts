
export const USSD_API_URL:string ='https://ussd.anicns.cd:9445/service-provider'
const ussdAuthToken: string = '1190124f7dcb4f103a3y29c722053484-94b8b2bb-310x-43ff-9787-c06545e2d4kp'; 
export const fetchUssdApiWithToken = (url:string, options:object) => {
    const headers = {
      'Authorization': `${ussdAuthToken}`,
      'Content-Type': 'application/json',
    };
  
    return fetch(url, { ...options, headers });
};