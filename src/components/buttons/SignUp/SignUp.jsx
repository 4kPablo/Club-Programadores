import './SignUp.css'


const SignUp=({onClick})=>{
    return (
        <>
            <button type="button" 
            className="btn btn-outline-success" 
            id="sumate" 
            onClick={onClick}>
                ¡Sumate!
            </button>
        </>
    )
}

export default SignUp;