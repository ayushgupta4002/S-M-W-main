import React from 'react'
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div>
    
        <body>
            <div class=" min-h-fit  flex item-center justify-center p-7 ">
                <div class="bg-gray-100 flex flex rounded-2xl max-w-3xl p-5 flex-wrap shadow-xl">
                    <div class="w-1/2 md:w-full">
                        <h2 class="font-bold text-2xl">
                            Login
                        </h2>
                        <p class="font-normal mt-2">
                            Innovation begins Here !
                        </p>
                        <form action="" class="flex flex-col mr-3 mt-8 p-1 gap-4">
                        <input class="p-1 pl-3 h-12 rounded-xl  " type="email" name="email" placeholder="Email"></input>
                                <input class="p-1 pl-3 h-12 rounded-xl " type="password" name="password" placeholder="Password"></input>
                        </form>
                            


                                    <button class="bg-[#002D74] text-white w-[95%] mt-3 p-2  rounded-2xl">Submit</button>

                      

                                <div class="mt-10 grid grid-cols-3 items-center border-gray-400 m-5">
                                    <hr class="border-gray-400 "></hr>
                                        <p class="text-center">OR</p>
                                        <hr class="border-gray-400"></hr>
                                        </div>
                                        <button class="bg-white items-center mt-5  rounded-l w-10/12 pt-2 pb-2 pl-2 pr-2 m-5 flex flex-row justify-evenly">
                                            <img class="w-[11%]" src="google.png"></img>
                                                <p class=" text-gray-500 font-medium">Login with Google</p></button>
                                        <button> <a href=""><p class="mt-3 text-xs border-b py-4 mx-5 ">Forgot Your Password ?</p></a></button>
                                        <div class="mt-3 flex flex-row  justify-between m-3">
                                            <p class="mt-3 text-xs border-b py-1 pl-2  ">Don't have an Account ?</p>
                                            
                                            <button class="bg-white w-1/3  rounded-l text-s"><Link to={`/signup`}> SignUp       </Link></button>
                                     



                                        </div>


                                </div>
                                <div class="w-1/2 md:hidden ">
                                    <img class="rounded-2xl" src="2.jpg"></img>

                                </div>

                            </div>
                    </div>
              
        </body>
        </div>
    )
}

export default LoginPage