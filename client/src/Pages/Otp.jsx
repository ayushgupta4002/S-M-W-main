import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function OTP() {
  
  const baseurl = "http://localhost:8000/api/route";
  const [otp, setotp] = useState("")
  const otpfunction = async () => {
    try {

        axios.post(baseurl + "/otp", {
         otp:otp
        }).then((Response) => {
            if (Response.status = 200) {
                window.location='/home';


                console.log("success");
            }

            console.log(Response)
        })

    }
    catch (error) {
        console.log(error.response.data);
    }


};


  return (
    <div>
    <div class="h-screen bg-blue-500 py-20 px-3">
    <div class="container mx-auto">
        <div class="max-w-sm mx-auto md:max-w-lg">
            <div class="w-full">
                <div class="bg-white h-74 py-3 rounded text-center">
                      <h1 class="text-2xl font-bold">OTP Verification</h1>
                      <div class="flex flex-col mt-4">
                          <span>Enter the OTP you sent to your Email</span>
                          <span class="font-bold"></span>
                      </div>
                      
                      <div id="otp" class="flex flex-row justify-center text-center px-2 mt-5">
                      <form>
            <input class="m-2 border h-12 w-70 text-center form-control rounded" name="otp" type="text" id="first" maxlength="6" onChange={(e) => {setotp(e.target.value);}} /> 
            {/* <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxlength="1" /> 
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxlength="1" /> 
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxlength="1" /> 
            <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" /> */}
            </form>
                      </div>
                      
                      <div class="flex justify-center text-center mt-5">
                          <a class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"><span class="font-bold">Resend OTP</span><i class='bx bx-caret-right ml-1'></i></a>
                      </div>
                      <button class="bg-[#002D74] text-white w-[95%] mt-3 p-2  rounded-2xl" onClick={(otpfunction)}>Submit</button>
                     

                </div>
                
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default OTP