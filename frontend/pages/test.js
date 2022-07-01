import axios from "axios";
import { useEffect } from "react";

export default function test() {
    useEffect(() => {
        const options = {
            method: 'POST',
            url: 'https://d7sms.p.rapidapi.com/secure/send',
            headers: {
              'content-type': 'application/json',
              Authorization: 'Basic cXZrdzg3OTM6UDdsSEp4MjU=',
              'X-RapidAPI-Key': '67e6658240mshf5ac4f57584ca2bp1be28cjsn1f4fe1a07f3b',
              'X-RapidAPI-Host': 'd7sms.p.rapidapi.com'
            },
            data: '{"content":"Test Message","from":"D7-Rapid","to":84983464047}'
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    })
    return (<></>)
}

