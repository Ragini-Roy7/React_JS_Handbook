const ValidPassword = () => <h3>Valid Password</h3>;
const InvalidPassword= ()=> <h3>Invalid Password</h3>;

//passing prop
const Password= ({isValid})=> {
    // if(isValid) {
    //     return <ValidPassword/>
    // }
    // return <InvalidPassword/>
    return isValid ? <ValidPassword/> : <InvalidPassword/>
}
const CheckPass = ()=> {
    return (
        <section>
            {/* <Password isValid= {true}/> */}
            <Password isValid ={false}></Password>
        </section>
    )
}
export default CheckPass;