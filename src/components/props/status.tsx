type StatusProps={
    status: 'loading' | 'success' | 'error'
}

export const Status = (props:StatusProps) => {
    let message 
    if(props.status === 'loading'){
        message = 'loading...'}
    // } else if (props.status === 'success '){
    //     message = 'status fetching success'
    // } else if (props.status === 'error '){
    //     message = 'status fetching failed'
    // }
    return(
            <h1>Status - {message}</h1>
    )
}