import React, {useEffect, useRef, useState} from 'react';
import './users.scss'
import noImage from '../../assets/no-image.png'
import {BsArrowRight} from 'react-icons/bs'
import {HiEye, HiEyeOff} from 'react-icons/hi'
import {Link} from "react-router-dom";

const CreateUser = () => {
    const [preview, setPreview] = useState("")
    const [selectedFile, setSelectedFile] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [showIconEyePassword, setShowIconEyePassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [showIconEyeConfirmPassword, setShowIconEyeConfirmPassword] = useState(false)
    const inputFile = useRef(null)

    useEffect(() => {
        if (!selectedFile) {
            setPreview(noImage)
            return
        }
        const objectUrl = window.URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => window.URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    const handleClickOpenUploadImg = () => {
        inputFile.current.click();
    }
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }
    return (
        <div className={`create-user`}>
            <div className="top">
                <Link to={`/admin/users`} className={`title`}>List user</Link>
                <BsArrowRight style={{margin: "0 5px"}}/>
                <p className={`title`}>Add New User</p>
            </div>
            <div className="bottom">
                <div className="left" onClick={handleClickOpenUploadImg}>
                    <div>
                        <img src={preview} alt={``}/>
                    </div>
                </div>
                <div className="right">
                    <form>
                        <input ref={inputFile} onChange={onSelectFile} type="file" accept="image/png, image/jpeg"
                               hidden={true}/>
                        <div className="form-input">
                            <label htmlFor={`username`}>Username</label>
                            <input id={`username`} name={`username`} type={`text`} placeholder={`Nguyen Van A`}/>
                        </div>
                        <div className="form-input">
                            <label htmlFor={`email`}>Email</label>
                            <input id={`email`} name={`email`} type={`email`} placeholder={`nguyen_van_a@mail.com`}/>
                        </div>
                        <div className="form-input">
                            <label htmlFor={`gender`}>Gender</label>
                            <select id={`gender`}>
                                <option>Choose</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-input">
                            <label htmlFor={`birthday`}>Birthday</label>
                            <input id={`birthday`} name={`birthday`} type={`date`}/>
                        </div>
                        <div className="form-input">
                            <label htmlFor={`phone`}>Phone</label>
                            <input id={`phone`} name={`phone`} type={`text`} placeholder={`+1 234 567 89`}/>
                        </div>
                        <div className="form-input">
                            <label htmlFor={`address`}>Address</label>
                            <input id={`address`} name={`address`} type={`text`}
                                   placeholder={`150 Trieu Khuc, Thanh Xuan, Ha Noi`}/>
                        </div>
                        <div className="form-input">
                            <label htmlFor={`password`}>Password</label>
                            <input id={`password`} type={showPassword ? 'text' : 'password'}
                                   onChange={(e) => {
                                       setShowPassword(false)
                                       if (e.target.value.trim() === "") {
                                           setShowIconEyePassword(false)
                                       } else {
                                           setShowIconEyePassword(true)
                                       }
                                   }}
                            />
                            <div hidden={!showIconEyePassword} className={`show-password`}
                                 style={{cursor: "pointer"}}
                                 onClick={() => setShowPassword(!showPassword)}>{showPassword ? <HiEye/> :
                                <HiEyeOff/>}
                            </div>
                        </div>
                        <div className="form-input">
                            <label htmlFor={`confirmPassword`}>Confirm-password</label>
                            <input id={`confirmPassword`} type={showConfirmPassword ? 'text' : 'password'}
                                   onChange={(e) => {
                                       setShowConfirmPassword(false)
                                       if (e.target.value.trim() === "") {
                                           setShowIconEyeConfirmPassword(false)
                                       } else {
                                           setShowIconEyeConfirmPassword(true)
                                       }
                                   }}
                            />
                            <div hidden={!showIconEyeConfirmPassword} className={`show-password`}
                                 style={{cursor: "pointer"}}
                                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ?
                                <HiEye/> : <HiEyeOff/>}</div>
                        </div>
                        <div className={`from-btn`}>
                            <button>Create user</button>
                            <button type="reset">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;