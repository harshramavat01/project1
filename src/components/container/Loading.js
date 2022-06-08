//HOC
import React from 'react';

function Loading(Component) {
    return function LoadingWithComponet ({isLoading, data }){
        if (isLoading){
            return(
                <p>Loading.....</p>
            )
        }else{
            return(
                <Component data={data} />
            )
        }
    }
}
export default Loading;