const ussdAuthToken: string = '1190124f7dcb4f103a3y29c722053484-94b8b2bb-310x-43ff-9787-c06545e2d4kp'; 
export const fetchUssdApiWithToken = (url:string, options:any) => {
    const headers = {
      'Authorization': `${ussdAuthToken}`,
      'Content-Type': 'application/json',
    };
  
    return fetch(url, { ...options, headers });
};

export const hashData = async (data: string|undefined)=>{
    return Array.prototype.map
    .call(
      new Uint8Array(
        await crypto.subtle.digest('SHA-512', new TextEncoder().encode(data)),
      ),
      (x) => ('00' + x.toString(16)).slice(-2),
    )
    .join('')
}

export const getToken =() =>{
    let result = ''
    const hexcodes = '0123456789abcdef'.split('')
    for (let index = 0; index < 32; index++) {
      let value = Math.floor(Math.random() * 16)
      switch (index) {
        case 8:
          result += '-'
          break
        case 12:
          value = 4
          result += '-'
          break
        case 16:
          value = (value & 3) | 8
          result += '-'
          break
        case 20:
          result += '-'
          break
      }
      result += hexcodes[value]
    }
    return result
  }