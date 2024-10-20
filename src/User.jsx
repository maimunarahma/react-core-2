export default function User({ user }){
    console.log(user)
    
    const { name , username , email,address}= user
    return(
        <div className="userStyle">
                 <h1>{name}</h1>
                 <p>{email}</p>
                 <p>{address.street},{address.city}</p>
        </div>
        
        )
}