function Child(props){
    return(
        <>
        <h1>Child Component</h1>
        NAME: {props.name}
        AGE: {props.age}
        </>
    )
}
export default Child;